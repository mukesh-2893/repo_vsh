import React, { Component } from "react";
import { connect } from "react-redux";
import { operation, selectedUP } from "./actions";
import { Form } from "./Form";
import Table from "./Table";

export class UserPolicy extends Component {
  add = (obj) => {
    var id = this.props.userPolicy.map(({ upid }) => {
      return upid;
    });
    var max = Math.max(...id) + 1;

    var uIndex = this.props.users.findIndex((i)=> { return i.name == obj.userName})
    var pIndex = this.props.policies.findIndex((i)=> { return i.name == obj.policyName})
    // console.log(obj);
    // console.log(uIndex);
    // console.log(this.props.users);
    // console.log(this.props.policies);

    var obj2 = { upid : max, uid : this.props.users[uIndex].uid, pid : this.props.policies[pIndex].pid, status : "", camount : 0};
    console.log(obj2);
    // var obj2 = Object.assign({ upid: max }, obj);
    // console.log(obj2);
    this.props.addUserPolicy(obj2);
  };

  edit(obj) {
    console.log(obj);
    this.props.setSelectedUP(obj);
    this.props.setOperation("update");
  }

  update(obj) {
    console.log(obj);
    this.props.setUpdate(obj);
  }

  delete = (obj) => {
    let id = obj.upid;
    console.log(id);
    this.props.deleteUP(id);
  };

  claim = (obj) =>{
    console.log(obj);
    this.props.setClaim(obj);
  }
  render() {
    const { tableHeader, userPolicy, selectedUP, operation, users, policies } = this.props;
    const showData = userPolicy.filter((el)=> el.status == "");
    console.log(showData);
    
    console.log(userPolicy);
    // console.log(selectedUP);
    return (
      <>
        <Form
          handleAdd={(obj) => this.add(obj)}
          selectedUP={selectedUP}
          operation={operation}
          userPolicy={userPolicy}
          policies={policies}
          users={users}
          handleUpdate={(obj) => this.update(obj)}
        />
        <Table
          tableHeader={tableHeader}
          showData={showData}
          handleDelete={(obj) => this.delete(obj)}
          handleEdit={(obj) => this.edit(obj)}
          handleClaim={(obj)=>this.claim(obj)}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableHeader: state.userPolicyStore.tableHeader,
    userPolicy: state.userPolicyStore.userPolicy,
    selectedUP: state.userPolicyStore.selectedUP,
    operation: state.userPolicyStore.operation,
    users: state.userStore.users,
    policies: state.policyStore.policies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserPolicy: (obj) => {
      dispatch({ type: "EVENT_ADD_UP", payload: obj });
    },
    setSelectedUP: (obj) => {
      dispatch(selectedUP(obj));
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
    setClaim : (obj)=>{
      dispatch({type : "EVENT_CLAIM", payload : obj})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPolicy);
