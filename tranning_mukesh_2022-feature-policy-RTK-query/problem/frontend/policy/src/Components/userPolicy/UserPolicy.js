import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import Table from "./Table";
import {
  useAddUserPolicyMutation,
  useClaimMutation,
  useDeleteUserPolicyMutation,
  useGetUserPolicyQuery,
  useUpdateUserPolicyMutation,
} from "./userPolicyApiSlice";
import { useGetUsersQuery } from "../users/userApiSlice";
import {
  getOperation,
  getSelectedUserPolicy,
  setOperation,
  setSelectedUserPolicy,
} from "./userPolicyReducer";
import { useGetPoliciesQuery } from "../policy/policyApiSlice";

function UserPolicy(props) {
  const userData = useGetUsersQuery().data;
  const policyData = useGetPoliciesQuery().data;
  const { data, isError, isLoading, isSuccess } = useGetUserPolicyQuery();

  const selectedUserPolicy = useSelector(getSelectedUserPolicy);
  const operation = useSelector(getOperation);
  const dispatch = useDispatch();

  const [addUserPolicy] = useAddUserPolicyMutation();
  const [deleteUserPolicy] = useDeleteUserPolicyMutation();
  const [updateUserPolicy] = useUpdateUserPolicyMutation();
  const [setClaim] = useClaimMutation();

  let content;
  if (isLoading) {
    content = `<h1>Loading please wait...</h1>`;
  } else if (isSuccess) {
    content = (
      <>
        <Form
          selectedUserPolicy={selectedUserPolicy}
          operation={operation}
          userPolicy={data.entities}
          policies={policyData.entities}
          users={userData.entities}
          ids={data.ids}
          userIds={userData.ids}
          policyIds={policyData.ids}
          handleAdd={(obj) => add(obj)}
          handleUpdate={(obj) => update(obj)}
        />
        {Object.keys(data.entities).length > 0 ? (
          <Table
            tableHeader={data.tableHeader}
            showData={data.entities}
            ids={data.ids}
            handleDelete={(obj) => deleteByID(obj)}
            handleEdit={(obj) => edit(obj)}
            handleClaim={(obj) => claim(obj)}
          />
        ) : null}
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

    var uIndex = Object.values(userData.entities).findIndex((i) => {
      return i.name === obj.userName;
    });
    var pIndex = Object.values(policyData.entities).findIndex((i) => {
      return i.name === obj.policyName;
    });

    var obj2 = {
      id: max,
      upid: max,
      uid: Object.values(userData.entities)[uIndex].uid,
      pid: Object.values(policyData.entities)[pIndex].pid,
      status: "",
      camount: 0,
    };
    // console.log(obj2);

    addUserPolicy(obj2);
  };

  const edit = (obj) => {
    console.log(obj);
    dispatch(setSelectedUserPolicy(obj));
    dispatch(setOperation("update"));
  };

  const update = (obj) => {
    console.log(obj);
    updateUserPolicy(obj);
  };

  const deleteByID = (id) => {
    deleteUserPolicy(id);
  };

  const claim = (obj) => {
    console.log(obj);
    setClaim(obj);
  };

  return <>{content}</>;
}

export default UserPolicy;
