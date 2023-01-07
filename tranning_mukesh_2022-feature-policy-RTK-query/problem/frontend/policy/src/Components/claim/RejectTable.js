import React from "react";

export default function RejectTable(props) {
  const { userPolicy, ids } = props;
  
  const displayUP = ids.map((p, i) => {
    if(userPolicy[p].status == "Rejected"){
    return (
      <tr key={i}>
        <td>{userPolicy[p].userName}</td>
        <td>{userPolicy[p].policyName}</td>
        <td>{userPolicy[p].camount}</td>
      </tr>
    );
  }
});
  return (
    <>
      <div className="container my-2 text-align-center my-5">
        <div>
          {" "}
          <h4>Rejected Policies</h4>
        </div>

        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>User Name</th>
              <th>Policy</th>
              <th>Claim Amount</th>
            </tr>
          </thead>

          <tbody>{displayUP}</tbody>
        </table>
      </div>
    </>
  );
}
