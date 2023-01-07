import React from "react";
import { connect } from "react-redux";
import { operation, selectedUserPolicy } from "./reducer";
import Form from "./Form";
import Table from "./Table";

function UserPolicy({
  tableHeader,
  userPolicy,
  operation,
  users,
  selectedUserPolicy,
  policies,
  addUserPolicy,
  setSelectedUP,
  setOperation,
  setUpdate,
  deleteUP,
  setClaim,
}) {
  const showData = userPolicy.filter((el) => el.status == "");
  console.log(users);

  const add = (obj) => {
    console.log(obj);
    var id = userPolicy.map(({ upid }) => {
      return upid;
    });
    var max = Math.max(...id) + 1;

    var uIndex = users.findIndex((i) => {
      return i.name == obj.userName;
    });
    var pIndex = policies.findIndex((i) => {
      return i.name == obj.policyName;
    });

    var obj2 = {
      upid: max,
      uid: users[uIndex].uid,
      pid: policies[pIndex].pid,
      status: "",
      camount: 0,
    };
    console.log(obj2);

    addUserPolicy(obj2);
  };

  const edit = (obj) => {
    setSelectedUP(obj);
    setOperation("update");
  };

  const update = (obj) => {
    setUpdate(obj);
  };

  const deleteByID = (obj) => {
    let id = obj.upid;
    console.log(id);
    deleteUP(id);
  };

  const claim = (obj) => {
    console.log(obj);
    setClaim(obj);
  };

  console.log(userPolicy);
  return (
    <>
      <Form
        handleAdd={(obj) => add(obj)}
        selectedUserPolicy={selectedUserPolicy}
        operation={operation}
        userPolicy={userPolicy}
        policies={policies}
        users={users}
        handleUpdate={(obj) => update(obj)}
      />
      <Table
        tableHeader={tableHeader}
        showData={showData}
        handleDelete={(obj) => deleteByID(obj)}
        handleEdit={(obj) => edit(obj)}
        handleClaim={(obj) => claim(obj)}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tableHeader: state.rootReducer.userPolicyStore.tableHeader,
    userPolicy: state.rootReducer.userPolicyStore.userPolicy,
    selectedUserPolicy: state.rootReducer.userPolicyStore.selectedUserPolicy,
    operation: state.rootReducer.userPolicyStore.operation,
    users: state.rootReducer.userStore.users,
    policies: state.rootReducer.policyStore.policies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserPolicy: (obj) => {
      dispatch({ type: "EVENT_ADD_UP", payload: obj });
    },
    setSelectedUP: (obj) => {
      dispatch(selectedUserPolicy(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdate: (obj) => {
      dispatch({ type: "EVENT_UPDATE_UP", payload: obj });
    },
    deleteUP: (id) => {
      dispatch({ type: "EVENT_DELETE_UP", payload: id });
    },
    setClaim: (obj) => {
      dispatch({ type: "EVENT_CLAIM", payload: obj });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPolicy);
