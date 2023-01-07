import React from "react";

import { connect } from "react-redux";
import { operation, selectedUser } from "./reducer";
import Table from "./table";
import UserForm from "./userForm";
import { addUsers, deleteUsers, updateUser } from "./userService";

function User(props) {
const {
  tableHeader,
  ids,
  users,
  selectedUser,
  operation,
  addUser,
  setSelectedUser,
  setOperation,
  setUpdate,
  deleteUser,
} = props;
  // console.log(props.users);
  const add = (name) => {
    var id = Object.values(users).map(({ id }) => {
        return id;
      });
      console.log(id);
    
    var max = Math.max(...id) + 1;

    var obj = Object.assign({ id : max, uid: max, name: name });
    // console.log(obj);
    addUser(obj);
  };

  const edit = (obj) => {
    console.log(obj);
    setSelectedUser(obj);
    setOperation("update");
  };

  const update = (obj) => {
    // console.log(obj);
    Object.assign(obj, {id : obj.uid})
    setUpdate(obj);
  };

  const deleteByID = (id) => {
    console.log(id);
    // let id = obj.uid;
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
        ids={ids}
        users={users}
        handleDelete={(obj) => deleteByID(obj)}
        handleEdit={(obj) => edit(obj)}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state, "in mapstateto props");
  return {
    tableHeader: state.rootReducer.userStore.tableHeader,
    users: state.rootReducer.userStore.entities,
    ids: state.rootReducer.userStore.ids,
    selectedUser: state.rootReducer.userStore.selectedUser,
    operation: state.rootReducer.userStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("mapdispatch" , dispatch)
  return {
    addUser: (obj) => {
      dispatch(addUsers(obj));
    },
    setSelectedUser: (obj) => {
      dispatch(selectedUser(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdate: (obj) => {
      dispatch(updateUser(obj));
    },
    deleteUser: (id) => {
      dispatch(deleteUsers(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
