import React, { useRef, useState } from "react";

export default function Table(props) {
  const claimAmount = useRef(0);
  const [claim, setClaim] = useState(0);

  const deleteById = (obj) => {
    props.handleDelete(obj);
  };

  const edit = (obj) => {
    props.handleEdit(obj);
  };
  const change = (e) => {
    setClaim(e.target.value);
  };
  const claimBtn = (obj) => {
    // console.log(obj);
    let obj2 = {
      upid: obj.upid,
      status: "claim",
      camount: claim,
    };
    // console.log(obj2);
    props.handleClaim(obj2);
    setClaim(0);
  };
  const { tableHeader, showData } = props;
  const displayHeader = tableHeader.map((el, i) => {
    return (
      <th key={i} scope="col">
        {el}
      </th>
    );
  });

  const displayUP = showData.map((p, i) => {
    return (
      <tr key={i}>
        <td>{p.upid}</td>
        <td>{p.userName}</td>
        <td>{p.policyName}</td>
        <td>{p.amount}</td>
        <td>{p.limit}</td>
        <td>
          <button
            className="btn mx-3 fa-solid fa fa-edit"
            onClick={() => edit(p)}
          ></button>
          <button
            className="btn mx-3 fa fa-trash"
            onClick={() => {
              deleteById(p);
            }}
          ></button>
        </td>
        <td>
          <span className="fas fa-rupee-sign"></span>
          <input
            className="form-control"
            onChange={(e) => {
              change(e);
            }}
            type="number"
          />
        </td>
        <td>
          <button className="btn btn-primary my-2" onClick={() => claimBtn(p)}>
            Claim
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="container my-2 text-align-center">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>{displayHeader}</tr>
          </thead>
          <tbody>{displayUP}</tbody>
        </table>
      </div>
    </>
  );
}
