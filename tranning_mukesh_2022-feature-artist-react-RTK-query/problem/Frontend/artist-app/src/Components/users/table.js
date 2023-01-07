import React from "react";

export default function table(props) {
  const { tableHeader, users, ids } = props;

  const displayHeader = tableHeader.map((el, i) => {
    return (
      <th key={i} scope="col">
        {el}
      </th>
    );
  });

  const displayUsers = ids.map((u, i) => {
    return (
      <tr key={i}>
        <td>{users[u].uid}</td>
        <td>{users[u].name}</td>
        <td>
          <button
            className="btn btn-primary mx-3 fa-solid fa fa-edit"
            onClick={() => edit(users[u])}
          ></button>
          <button
            className="btn btn-danger mx-3 fa fa-trash"
            onClick={() => {
              deleteById(u);
            }}
          ></button>
        </td>
      </tr>
    );
  });

  const deleteById = (obj) => {
    props.handleDelete(obj);
  };

  const edit = (obj) => {
    props.handleEdit(obj);
  };
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