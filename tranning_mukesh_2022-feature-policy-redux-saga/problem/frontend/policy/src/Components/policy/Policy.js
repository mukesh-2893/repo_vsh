import React, { Component } from 'react'
import { connect } from 'react-redux';
import { operation, selectedPolicy } from './actions';
import { PolicyForm } from './PolicyForm';
import Table from './Table';

export class Policy extends Component {
  add = (obj) => {
    var id = this.props.policies.map(({ pid }) => {
      return pid;
    });
    var max = Math.max(...id) + 1;

    var obj2 = Object.assign({ pid: max}, obj);
console.log(obj2);
    this.props.addPolicy(obj2);
  };

  edit(obj) {
    this.props.setSelectedPolicy(obj);
    this.props.setOperation("update");
  }

  update(obj) {
    console.log(obj);
    this.props.setUpdate(obj);
  }

  delete = (obj) => {
    let id = obj.pid;
    this.props.deletePolicy(id);
  };
  render() {
    const { tableHeader, policies, selectedPolicy, operation }= this.props
    console.log(selectedPolicy);
    return (
      <>
      <PolicyForm
        handleAdd={(obj)=>this.add(obj)}
        selectedPolicy={selectedPolicy}
        operation={operation}
        handleUpdate={(obj) => this.update(obj)}
      />
        <Table
          tableHeader={tableHeader}
          policies={policies}
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
  
