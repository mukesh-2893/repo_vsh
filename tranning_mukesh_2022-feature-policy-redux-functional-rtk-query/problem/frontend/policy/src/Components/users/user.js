import React from "react";

import { connect } from "react-redux";
import { operation, selectedUser } from "./reducer";
import Table from "./table";
import UserForm from "./userForm";

function User({
  tableHeader,
  users,
  selectedUser,
  operation,
  addUser,
  setSelectedUser,
  setOperation,
  setUpdate,
  deleteUser,
}) {
  const add = (name) => {
    var id = users.map(({ uid }) => {
      return uid;
    });
    var max = Math.max(...id) + 1;

    var obj = Object.assign({ uid: max, name: name });
    console.log(obj);
    addUser(obj);
  };

  const edit = (obj) => {
    setSelectedUser(obj);
    setOperation("update");
  };

  const update = (obj) => {
    setUpdate(obj);
  };

  const deleteByID = (obj) => {
    let id = obj.uid;
    deleteUser(id);
  };

  return (
    <>
      <UserForm
        handleAdd={(obj) => add(obj)}
        selectedUser={selectedUser}
        operation={operation}
        handleUpdate={(obj) => update(obj)}
      />
      <Table
        tableHeader={tableHeader}
        users={users}
        handleDelete={(obj) => deleteByID(obj)}
        handleEdit={(obj) => edit(obj)}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state, "in mapstateto props");
  return {
    tableHeader: state.rootReducer.userStore.tableHeader,
    users: state.rootReducer.userStore.users,
    selectedUser: state.rootReducer.userStore.selectedUser,
    operation: state.rootReducer.userStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("mapdispatch" , dispatch)
  return {
    addUser: (obj) => {
      dispatch({ type: "EVENT_ADD_USER", payload: obj });
    },
    setSelectedUser: (obj) => {
      dispatch(selectedUser(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdate: (obj) => {
      dispatch({ type: "EVENT_UPDATE_USER", payload: obj });
    },
    deleteUser: (id) => {
      dispatch({ type: "EVENT_DELETE_USER", payload: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
