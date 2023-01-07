import React, { Component } from "react";
import Userfrom from "./userForm";
import Table from "../navbar/Table";
import { connect } from "react-redux";
import {
  // loadUsers,
  selectedUser,
  operation,
} from "./actions";

class User extends Component {
  
  add = (name) => {
    var id = this.props.users.map(({ uid }) => {
      return uid;
    });
    var max = Math.max(...id) + 1;

    var obj = Object.assign({ uid: max, name: name });

    this.props.addUser(obj);
  };

  delete = (obj) => {
    let id = obj.uid;
    this.props.deleteUser(id);
  };

  edit(obj) {
    this.props.setSelectedUser(obj);
    this.props.setOperation("update");
  }

  update(obj) {
    this.props.setUpdate(obj);
  }

  render() {
    const { tableHeader, users, selectedUser, operation, status } = this.props;
    console.log(users);
    return (
      <>
        <div className="container py-5">
          <Userfrom
            selectedUser={selectedUser}
            handleAdd={(name) => this.add(name)}
            handleUpdate={(obj) => this.update(obj)}
            operation={operation}
          />
          {users && users.length > 0 ? (
            <Table
              tableHeader={tableHeader}
              tableData={users}
              handleDelete={(id) => this.delete(id)}
              handleEdit={(id) => this.edit(id)}
              status={status}
            />
          ) : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state, "in mapstateto props");
  return {
    tableHeader: state.userStore.tableHeader,
    users: state.userStore.users,
    selectedUser: state.userStore.selectedUser,
    operation: state.userStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("mapdispatch" , dispatch)
  return {
    // setLoadUsers: (data) => {
    //   // console.log(data, " in setLoadusers");
    //   dispatch(loadUsers(data));
    // },
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
