import React from "react";

import { connect } from "react-redux";
import ClaimTable from "./ClaimTable";
import ApproveTable from "./ApproveTable";
import RejectTable from "./RejectTable";
import { claimSettlement } from "../userPolicy/userPolicyService";

function Claim({userPolicy, setApprove, setReject , ids, tableHeader}) {

  const approve = (obj) => {
    setApprove(obj);
  };

  const reject = (obj) => {
    console.log(obj);
    setReject(obj);
  };

  return (
    <>
     {Object.keys(userPolicy).length>0 ?
      <ClaimTable
        userPolicy={userPolicy}
        ids={ids}
        handleApprove={(obj) => approve(obj)}
        handleReject={(obj) => reject(obj)}
      /> : null}

{Object.keys(userPolicy).length>0 ?
      <ApproveTable 
      userPolicy={userPolicy}
      ids={ids} />: null}

      {Object.keys(userPolicy).length>0 ?
      <RejectTable userPolicy={userPolicy} ids={ids} />: null}
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state.rootReducer.userPolicyStore.entities);
  return {
    // tableHeader: state.rootReducer.userPolicyStore.tableHeader,
    userPolicy: state.rootReducer.userPolicyStore.entities,
    ids: state.rootReducer.userPolicyStore.ids,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setApprove: (obj) => {
      dispatch(claimSettlement(obj));
    },
    setReject: (obj) => {
      dispatch(claimSettlement(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Claim);
