import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PolicyForm from "./PolicyForm";
import Table from "./Table";
import { useAddPolicyMutation, useDeletePolicyMutation, useGetPoliciesQuery, useUpdatePolicyMutation } from "./policyApiSlice";
import { getOperation, getSelectedPolicy, setOperation, setSelectedPolicy } from "./policyReducer";

function Policy(props) {
  const { data, isError, isLoading, isSuccess } = useGetPoliciesQuery();
  
  const selectedPolicy = useSelector(getSelectedPolicy);
  const operation = useSelector(getOperation);
  const [addPolicy]= useAddPolicyMutation();
  const [deletePolicy]= useDeletePolicyMutation();
  const [updatePolicy] = useUpdatePolicyMutation();
  const dispatch = useDispatch();
  let content;
  if (isLoading) {
    content = `<h1>Loading please wait...</h1>`;
  } else if (isSuccess) {
    content = (
      <>
        <PolicyForm
          handleAdd={(obj) => add(obj)}
          selectedPolicy={selectedPolicy}
          operation={operation}
          handleUpdate={(obj) => update(obj)}
        />
        <Table
          tableHeader={data.tableHeader}
          ids={data.ids}
          policies={data.entities}
          handleDelete={(id) => deleteByID(id)}
          handleEdit={(obj) => edit(obj)}
        />
      </>
    );
  } else if (isError) {
    content = (
      <>
        <h1>404 page not found</h1>
        <p>{isError}</p>
      </>
    );
  }
  const add = (obj) => {
    var max = Math.max(...data.ids) + 1;

    var obj2 = Object.assign({ id: max, pid: max }, obj);
    console.log(obj2);
    addPolicy(obj2);
  };

  const edit = (obj) => {
    dispatch(setSelectedPolicy(obj));
    dispatch(setOperation("update"));
  };

  const update = (obj) => {
    updatePolicy(obj);
  };

  const deleteByID = (id) => {
    deletePolicy(id);
  };

  return <>{content}</>;
}

export default Policy;
