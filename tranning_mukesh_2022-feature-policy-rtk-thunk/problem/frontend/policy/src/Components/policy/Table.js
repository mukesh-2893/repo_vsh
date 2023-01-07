import React from "react";

function Table(props) {
  const { tableHeader, policies, ids } = props;

  const deleteById = (obj) => {
    props.handleDelete(obj);
  };

  const edit = (obj) => {
    props.handleEdit(obj);
  };

  const displayHeader = tableHeader.map((el, i) => {
    return (
      <th key={i} scope="col">
        {el}
      </th>
    );
  });

  const displayUsers = ids.map((p, i) => {
    return (
      <tr key={i}>
        <td>{policies[p].pid}</td>
        <td>{policies[p].name}</td>
        <td>{policies[p].amount}</td>
        <td>{policies[p].limit}</td>
        <td>
          <button
            className="btn btn-primary mx-3 fa-solid fa fa-edit"
            onClick={() => edit(policies[p])}
          ></button>
          <button
            className="btn btn-danger mx-3 fa fa-trash"
            onClick={() => {
              deleteById(p);
            }}
          ></button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="container my-4 text-align-center">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>{displayHeader}</tr>
          </thead>

          <tbody>{displayUsers}</tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
