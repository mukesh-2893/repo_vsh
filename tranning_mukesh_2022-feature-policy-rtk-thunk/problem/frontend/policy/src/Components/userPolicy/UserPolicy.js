import React from "react";
import { connect } from "react-redux";
import { operation, selectedUserPolicy } from "./reducer";
import Form from "./Form";
import Table from "./Table";
import { addUserPolicy, claimSettlement, deleteUserPolicy, updateUserPolicy } from "./userPolicyService";

function UserPolicy({
  tableHeader,
  userPolicy,
  operation,
  users,
  selectedUserPolicy,
  policies,
  setAddUserPolicy,
  setSelectedUP,
  setOperation,
  setUpdate,
  deleteUP,
  setClaim,
  ids,
  userIds,
  policyIds,
}) {
  const add = (obj) => {
    var max = Math.max(...ids) + 1;

    var uIndex = Object.values(users).findIndex((i) => {
      return i.name == obj.userName;
    });
    var pIndex = Object.values(policies).findIndex((i) => {
      return i.name == obj.policyName;
    });

    var obj2 = {
      id : max,
      upid: max,
      uid: Object.values(users)[uIndex].uid,
      pid: Object.values(policies)[pIndex].pid,
      status: "",
      camount: 0,
    };
    // console.log(obj2);

    setAddUserPolicy(obj2);
  };

  const edit = (obj) => {
    setSelectedUP(obj);
    setOperation("update");
  };

  const update = (obj) => {
    setUpdate(obj);
  };

  const deleteByID = (id) => {
    deleteUP(id);
  };

  const claim = (obj) => {
    console.log(obj);
    setClaim(obj);
  };

  return (
    <>
      <Form
        selectedUserPolicy={selectedUserPolicy}
        operation={operation}
        userPolicy={userPolicy}
        policies={policies}
        users={users}
        ids={ids}
        userIds={userIds}
        policyIds={policyIds}
        handleAdd={(obj) => add(obj)}
        handleUpdate={(obj) => update(obj)}
      />
      {Object.keys(userPolicy).length > 0 ?
      <Table
        tableHeader={tableHeader}
        showData={userPolicy}
        ids={ids}
        handleDelete={(obj) => deleteByID(obj)}
        handleEdit={(obj) => edit(obj)}
        handleClaim={(obj) => claim(obj)}
      /> : null }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tableHeader: state.rootReducer.userPolicyStore.tableHeader,
    userPolicy: state.rootReducer.userPolicyStore.entities,
    ids: state.rootReducer.userPolicyStore.ids,
    selectedUserPolicy: state.rootReducer.userPolicyStore.selectedUserPolicy,
    operation: state.rootReducer.userPolicyStore.operation,
    users: state.rootReducer.userStore.entities,
    userIds : state.rootReducer.userStore.ids,
    policies: state.rootReducer.policyStore.entities,
    policyIds: state.rootReducer.policyStore.ids,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddUserPolicy: (obj) => {
      dispatch(addUserPolicy(obj));
    },
    setSelectedUP: (obj) => {
      dispatch(selectedUserPolicy(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdate: (obj) => {
      dispatch(updateUserPolicy(obj));
    },
    deleteUP: (id) => {
      dispatch(deleteUserPolicy(id));
    },
    setClaim: (obj) => {
      dispatch(claimSettlement(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPolicy);
