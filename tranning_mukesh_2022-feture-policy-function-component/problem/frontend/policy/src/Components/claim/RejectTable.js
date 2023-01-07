import React from "react";

export default function RejectTable(props) {
  const { userPolicy } = props;
  const rejectPolicies = userPolicy.filter((el) => el.status == "Rejected");
  const displayUP = rejectPolicies.map((p, i) => {
    return (
      <tr key={i}>
        <td>{p.userName}</td>
        <td>{p.policyName}</td>
        <td>{p.camount}</td>
      </tr>
    );
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
