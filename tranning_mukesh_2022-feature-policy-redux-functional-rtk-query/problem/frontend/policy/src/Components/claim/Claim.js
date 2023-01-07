import React from "react";

import { connect } from "react-redux";
import ClaimTable from "./ClaimTable";
import ApproveTable from "./ApproveTable";
import RejectTable from "./RejectTable";

function Claim({ userPolicy, policyStatus, setApprove, setReject }) {
  const claimData = userPolicy.filter((el) => el.status == "claim");

  const approve = (obj) => {
    setApprove(obj);
  };

  const reject = (obj) => {
    console.log(obj);
    setReject(obj);
  };

  return (
    <>
      <ClaimTable
        userPolicy={userPolicy}
        handleApprove={(obj) => approve(obj)}
        handleReject={(obj) => reject(obj)}
      />

      <ApproveTable userPolicy={userPolicy} />
      <RejectTable userPolicy={userPolicy} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tableHeader: state.rootReducer.userPolicyStore.tableHeader,
    userPolicy: state.rootReducer.userPolicyStore.userPolicy,
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
