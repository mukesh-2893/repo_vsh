import React from "react";

export default function Table(props) {
  const { tableHeader, tableData, status, ids } = props;
// console.log(tableData);
  const deleteById = (obj) => {
    props.handleDelete(obj);
  };

  const edit = (obj) => {
    console.log(obj);
    props.handleEdit(obj);
  };

  const displayHeader = tableHeader.map((el, i) => {
    return (
      <th key={i} scope="col">
        {el}
      </th>
    );
  });

  const displayData = ids.map((el, i) => {
    let array = Object.values(tableData[el]);
    // if (array.length > 5) {
      array = array.splice(1, 3);
    // }
    
    return (
      <tr key={i}>
        {array.map((el, j) => {
          return <td key={j}>{el}</td>;
        })}

        <td>
          <button
            className="btn btn-primary mx-3 fa-solid fa fa-edit"
            onClick={() => edit(tableData[el])}
          ></button>
          <button
            className="btn btn-danger mx-3 fa fa-trash"
            onClick={() => {
              deleteById(el);
            }}
          ></button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <table
          className="table container my-5 table-striped table-hover table-bordered"
          style={
            status === "user"
              ? { width: "1000px", marginLeft: "0px" }
              : { width: "1000px", marginLeft: "120px" }
          }
        >
          <thead className="table-dark">
            <tr>{displayHeader}</tr>
          </thead>
          <tbody>{displayData}</tbody>
        </table>
      </div>
    </>
  );
}
