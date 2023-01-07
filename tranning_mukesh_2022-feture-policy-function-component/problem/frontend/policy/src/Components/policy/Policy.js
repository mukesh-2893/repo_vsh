import React from "react";
import { connect } from "react-redux";
import { operation, selectedPolicy } from "./actions";
import PolicyForm from "./PolicyForm";
import Table from "./Table";

function Policy({
  tableHeader,
  policies,
  selectedPolicy,
  operation,
  addPolicy,
  setSelectedPolicy,
  setOperation,
  setUpdate,
  deletePolicy,
}) {
  const add = (obj) => {
    var id = policies.map(({ pid }) => {
      return pid;
    });
    var max = Math.max(...id) + 1;

    var obj2 = Object.assign({ pid: max }, obj);
    console.log(obj2);
    addPolicy(obj2);
  };

  const edit = (obj) => {
    setSelectedPolicy(obj);
    setOperation("update");
  };

  const update = (obj) => {
    console.log(obj);
    setUpdate(obj);
  };

  const deleteByID = (obj) => {
    let id = obj.pid;
    deletePolicy(id);
  };
  return (
    <>
      <PolicyForm
        handleAdd={(obj) => add(obj)}
        selectedPolicy={selectedPolicy}
        operation={operation}
        handleUpdate={(obj) => update(obj)}
      />
      <Table
        tableHeader={tableHeader}
        policies={policies}
        handleDelete={(obj) => deleteByID(obj)}
        handleEdit={(obj) => edit(obj)}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state, "in mapstateto props");
  return {
    tableHeader: state.policyStore.tableHeader,
    policies: state.policyStore.policies,
    selectedPolicy: state.policyStore.selectedPolicy,
    operation: state.policyStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("mapdispatch" , dispatch)
  return {
    addPolicy: (obj) => {
      dispatch({ type: "EVENT_ADD_POLICY", payload: obj });
    },
    setSelectedPolicy: (obj) => {
      dispatch(selectedPolicy(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdate: (obj) => {
      dispatch({ type: "EVENT_UPDATE_POLICY", payload: obj });
    },
    deletePolicy: (id) => {
      dispatch({ type: "EVENT_DELETE_POLICY", payload: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Policy);
