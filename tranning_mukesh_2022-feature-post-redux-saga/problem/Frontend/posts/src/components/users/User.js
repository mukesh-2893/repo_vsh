import React, { Component } from 'react'
import { connect } from 'react-redux';
import { operation, selectedUser } from './actions';
import Table from './Table'
import UserForm from './UserForm';

export class User extends Component {

    add = (name) => {
        var id = this.props.users.map(({ uid }) => {
          return uid;
        });
        var max = Math.max(...id) + 1;
    
        var obj = Object.assign({ uid: max, name: name });
    console.log(obj);
        this.props.addUser(obj);
      };

      edit(obj) {
        this.props.setSelectedUser(obj);
        this.props.setOperation("update");
      }

      update(obj) {
        this.props.setUpdate(obj);
      }

      delete = (obj) => {
        let id = obj.uid;
        this.props.deleteUser(id);
      };
    
  render() {
    const {tableHeader, users, selectedUser, operation} = this.props;
    // console.log(users);

    return (
      <>
      <UserForm
        handleAdd={(obj)=>this.add(obj)}
        selectedUser={selectedUser}
        operation={operation}
        handleUpdate={(obj) => this.update(obj)}
      />
        <Table
            tableHeader={tableHeader}
            users={users}
            
            handleDelete={(obj)=>this.delete(obj)}
            handleEdit={(obj)=>this.edit(obj)}
        />
      </>
    )
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