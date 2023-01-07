import React from "react";

function Table(props) {
  const { tableHeader, policies } = props;

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

  const displayUsers = policies.map((p, i) => {
    return (
      <tr key={i}>
        <td>{p.pid}</td>
        <td>{p.name}</td>
        <td>{p.amount}</td>
        <td>{p.limit}</td>
        <td>
          <button
            className="btn btn-primary mx-3 fa-solid fa fa-edit"
            onClick={() => edit(p)}
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
