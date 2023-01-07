import React from "react";

export default function Table(props) {
  const { tableHeader, tableData, ids } = props;
  

  const displayHeader = tableHeader.map((el, i) => {
    return (
      <th key={i} scope="col">
        {el}
      </th>
    );
  });

  const displayAlbum = ids.map((u, i) => {
    return (
      <tr key={i}>
        <td>{tableData[u].id}</td>
        <td>{tableData[u].artistName}</td>
        <td>{tableData[u].albumName}</td>
        <td>
          <button
            className="btn btn-primary mx-3 fa-solid fa fa-edit"
            onClick={() => edit(tableData[u])}
          ></button>
          <button
            className="btn btn-danger mx-3 fa fa-trash"
            onClick={() => {
              deleteById(tableData[u].id);
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
          <tbody>{displayAlbum}</tbody>
        </table>
      </div>
    </>
  );
}