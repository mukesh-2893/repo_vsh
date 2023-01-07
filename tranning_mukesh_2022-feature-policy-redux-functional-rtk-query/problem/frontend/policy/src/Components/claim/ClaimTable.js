import React from "react";

export default function ClaimTable(props) {
  const { userPolicy } = props;
  const claimData = userPolicy.filter((el) => el.status == "claim");

  const approve = (p) => {
    console.log(p);
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

  const displayUP = claimData.map((p, i) => {
    return (
      <tr key={i}>
        <td>{p.userName}</td>
        <td>{p.policyName}</td>
        <td>{p.amount}</td>
        <td>{p.limit}</td>
        <td>{p.camount}</td>
        <td>
          <button className="btn btn-primary mx-3" onClick={() => approve(p)}>
            Approve
          </button>
          <button className="btn btn-danger mx-3" onClick={() => reject(p)}>
            Reject
          </button>
        </td>
      </tr>
    );
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
