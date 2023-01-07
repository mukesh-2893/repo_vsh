import React, { Component } from 'react'
import { connect } from 'react-redux';
import ClaimTable from './ClaimTable';
import ApproveTable from './ApproveTable'
import RejectTable from './RejectTable';

export class Claim extends Component {

  approve = (obj)=>{
    this.props.setApprove(obj);
  }

  reject = (obj)=>{
    console.log(obj);
    this.props.setReject(obj);
  }
  render() {
    const { userPolicy, policyStatus } = this.props;
    const claimData = userPolicy.filter((el)=> el.status == "claim");

    console.log(policyStatus);
    return (
        <>
          <ClaimTable
            claimData={claimData}
            handleApprove={(obj)=>this.approve(obj)}
            handleReject={(obj)=>this.reject(obj)}
          />

          <ApproveTable
            userPolicy={userPolicy}
          />
          <RejectTable
            userPolicy={userPolicy}
          />
           
        </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tableHeader: state.userPolicyStore.tableHeader,
    userPolicy: state.userPolicyStore.userPolicy,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("mapdispatch" , dispatch)
  return {
    setApprove: (obj) => {
      dispatch({ type: "EVENT_CLAIM", payload: obj });
    },
    setReject: (obj) => {
      dispatch({ type: "EVENT_CLAIM", payload: obj });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Claim);
