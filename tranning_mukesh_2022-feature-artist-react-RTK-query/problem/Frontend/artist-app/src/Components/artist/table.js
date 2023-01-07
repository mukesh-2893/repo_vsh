import React from "react";

export default function table(props) {
  const { tableHeader, artist, ids } = props;

  const displayHeader = tableHeader.map((el, i) => {
    return (
      <th key={i} scope="col">
        {el}
      </th>
    );
  });

  const displayArtist = ids.map((u, i) => {
    return (
      <tr key={i}>
        <td>{artist[u].aid}</td>
        <td>{artist[u].name}</td>
        <td>
          <button
            className="btn btn-primary mx-3 fa-solid fa fa-edit"
            onClick={() => edit(artist[u])}
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
          <tbody>{displayArtist}</tbody>
        </table>
      </div>
    </>
  );
}
