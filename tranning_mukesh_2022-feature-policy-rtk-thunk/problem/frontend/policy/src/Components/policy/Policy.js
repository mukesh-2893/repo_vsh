import React from "react";
import { connect } from "react-redux";
import { operation, selected } from "./reducer";
import PolicyForm from "./PolicyForm";
import Table from "./Table";
import { addPolicy, deletePolicy, updatePolicy } from "./policyService";

function Policy({
  tableHeader,
  ids,
  policies,
  selectedPolicy,
  operation,
  setDeletePolicy,
  addPolicy,
  setSelectedPolicy,
  setOperation,
  setUpdate,
}) {

  const add = (obj) => {
    var id = Object.values(policies).map(({ pid }) => {
      return pid;
    });
    var max = Math.max(...id) + 1;

    var obj2 = Object.assign({ id : max,  pid: max }, obj);
    console.log(obj2);
    addPolicy(obj2);
  };

  const edit = (obj) => {
    setSelectedPolicy(obj);
    setOperation("update");
  };

  const update = (obj) => {
    setUpdate(obj);
  };

  const deleteByID = (id) => {
    setDeletePolicy(id);
  };

  return (
    <>
      <PolicyForm
        handleAdd={(obj) => add(obj)}
        selectedPolicy={selectedPolicy}
        operation={operation}
        handleUpdate={(obj) => update(obj)}
      />
      {Object.keys(policies).length > 0 ?
      <Table
        tableHeader={tableHeader}
        ids={ids}
        policies={policies}
        handleDelete={(obj) => deleteByID(obj)}
        handleEdit={(obj) => edit(obj)}
      />
      : null }
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state, "in mapstateto props");
  return {
    tableHeader: state.rootReducer.policyStore.tableHeader,
    policies: state.rootReducer.policyStore.entities,
    ids: state.rootReducer.policyStore.ids,
    selectedPolicy: state.rootReducer.policyStore.selectedPolicy,
    operation: state.rootReducer.policyStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("mapdispatch" , dispatch)
  return {
    addPolicy: (obj) => {
      dispatch(addPolicy(obj));
    },
    setSelectedPolicy: (obj) => {
      dispatch(selected(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdate: (obj) => {
      dispatch(updatePolicy(obj));
    },
    setDeletePolicy: (id) => {
      dispatch(deletePolicy(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Policy);
