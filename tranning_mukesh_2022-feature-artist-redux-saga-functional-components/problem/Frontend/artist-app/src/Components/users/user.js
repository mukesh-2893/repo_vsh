import React from "react";
import Userfrom from "./userForm";
import Table from "../navbar/Table";
import { connect } from "react-redux";
import {
  // loadUsers,
  selectedUser,
  operation,
} from "./actions";

function User(props) {
  const {
    tableHeader,
    users,
    selectedUser,
    operation,
    status,
    addUser,
    deleteUser,
    setSelectedUser,
    setOperation,
    setUpdate,
  } = props;

  const add = (name) => {
    var id = props.users.map(({ uid }) => {
      return uid;
    });
    var max = Math.max(...id) + 1;

    var obj = Object.assign({ uid: max, name: name });

    addUser(obj);
  };

  const deleteByID = (obj) => {
    let id = obj.uid;
    deleteUser(id);
  };

  const edit = (obj) => {
    setSelectedUser(obj);
    setOperation("update");
  };

  const update = (obj) => {
    setUpdate(obj);
  };

  return (
    <>
      <div className="container py-5">
        <Userfrom
          selectedUser={selectedUser}
          handleAdd={(name) => add(name)}
          handleUpdate={(obj) => update(obj)}
          operation={operation}
        />
        {users && users.length > 0 ? (
          <Table
            tableHeader={tableHeader}
            tableData={users}
            handleDelete={(id) => deleteByID(id)}
            handleEdit={(id) => edit(id)}
            status={status}
          />
        ) : null}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tableHeader: state.userStore.tableHeader,
    users: state.userStore.users,
    selectedUser: state.userStore.selectedUser,
    operation: state.userStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (obj) => {
      dispatch({ type: "EVENT_ADD_USER", payload: obj });
    },
    deleteUser: (id) => {
      dispatch({ type: "EVENT_DELETE_USER", payload: id });
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
