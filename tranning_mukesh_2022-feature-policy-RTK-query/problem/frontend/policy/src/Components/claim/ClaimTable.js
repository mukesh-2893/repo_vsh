import React from "react";

export default function ClaimTable(props) {
  const { userPolicy, ids } = props;

  const approve = (p) => {
    // console.log(p);
    let obj = {
      amount: p.amount,
      camount: p.camount,
      limit: p.limit,
      pid: p.pid,
      policyName: p.policyName,
      status: "approved",
      uid: p.uid,
      upid: p.upid,
      userName: p.userName,
    };
    props.handleApprove(obj);
  };

  const reject = (p) => {
    let obj = {
      amount: p.amount,
      camount: p.camount,
      limit: p.limit,
      pid: p.pid,
      policyName: p.policyName,
      status: "Rejected",
      uid: p.uid,
      upid: p.upid,
      userName: p.userName,
    };
    props.handleReject(obj);
  };
  // console.log(userPolicy);

  const displayUP = ids.map((p, i) => {
    if(userPolicy[p].status == "claim"){
    return (
      <tr key={i}>
        <td>{userPolicy[p].userName}</td>
        <td>{userPolicy[p].policyName}</td>
        <td>{userPolicy[p].amount}</td>
        <td>{userPolicy[p].limit}</td>
        <td>{userPolicy[p].camount}</td>
        <td>
          <button className="btn btn-primary mx-3" onClick={() => approve(userPolicy[p])}>
            Approve
          </button>
          <button className="btn btn-danger mx-3" onClick={() => reject(userPolicy[p])}>
            Reject
          </button>
        </td>
      </tr>
    );
  }
});
  return (
    <>
      <div className="container my-2 text-align-center my-5">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>User Name</th>
              <th>Policy</th>
              <th>Amount</th>
              <th>limit</th>
              <th>Claim Amount</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{displayUP}</tbody>
        </table>
      </div>
    </>
  );
}
