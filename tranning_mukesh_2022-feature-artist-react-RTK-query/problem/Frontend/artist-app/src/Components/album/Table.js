import React from "react";

export default function Table(props) {
  const { tableHeader, album, ids } = props;
  

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
        <td>{album[u].id}</td>
        <td>{album[u].artistName}</td>
        <td>{album[u].albumName}</td>
        <td>
          <button
            className="btn btn-primary mx-3 fa-solid fa fa-edit"
            onClick={() => edit(album[u])}
          ></button>
          <button
            className="btn btn-danger mx-3 fa fa-trash"
            onClick={() => {
              deleteById(album[u].id);
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