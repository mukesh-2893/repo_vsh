import React, { Component } from "react";
import Userfrom from "./userForm";
import Table from "../navbar/Table";
import axios from "axios";
import { connect } from "react-redux";
import { loadUsers, addUser, deleteUser, selectedUser, operation, update } from "./actions";

class User extends Component {

  componentDidMount() {
    axios
      .get("http://localhost:3000/users")

      .then((response) => {
        // console.log(response.data, " in component didmount");
        this.props.setLoadUsers(response.data);
        // this.setState({ tableData: response.data });
      })
      .catch((error) => console.log(error));
  }

  add = (name)=>{
    var id = this.props.users.map(({uid})=>{
      return uid;
    })
    var max = Math.max(...id)+1;
    // console.log(max);

    var obj = Object.assign({uid : max, name : name});
    // console.log(obj);

    axios
    .post("http://localhost:3000/users/add", obj)
    .then((response)=>{
      this.props.addUser(response.data[response.data.length - 1])
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  delete =(obj)=>{
    // console.log(obj.uid);
    axios
    .delete(`http://localhost:3000/users/delete/${obj.uid}`)
    .then((response)=>{
      console.log(response.data);
      this.props.deleteUser(obj.uid)
      
    })
    .catch((err)=>{console.log(err)})
  }

  edit(obj){
    this.props.setSelectedUser(obj);
    this.props.setOperation("update");
  }

  update(obj){
    console.log(obj);

    axios
    .put(`http://localhost:3000/users/update/${obj.uid}`, obj)
    .then((response)=>{
      console.log(response.data);
      this.props.setUpdate(obj);
    })
    .catch((err)=>{console.log(err)})
  }

  

  render() {
    const { tableHeader, users, selectedUser, operation, status } = this.props;
    // console.log(users.length, "users length");
    return (
      <>
        <div className="container py-5">
          <Userfrom
            selectedUser={selectedUser}
            handleAdd={(name) => this.add(name)}
            handleUpdate={(obj)=>this.update(obj)}
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
    setLoadUsers: (data) => {
      // console.log(data, " in setLoadusers");
      dispatch(loadUsers(data));
    },
    
    addUser: (obj) => {
      dispatch(addUser(obj));
    },
    deleteUser : (id)=>{
      dispatch(deleteUser(id));
    },
    setSelectedUser : (obj)=>{
      dispatch(selectedUser(obj));
    },
    setOperation : (obj)=>{
      dispatch(operation(obj));
    },
    setUpdate : (obj)=>{
      dispatch(update(obj))
    }
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
