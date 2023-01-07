import React, { Component } from "react";

export class Table extends Component {

  deleteById(obj){
    this.props.handleDelete(obj)
  }

  edit(obj){
    this.props.handleEdit(obj)
  }

  render() {
    const { tableHeader, tableData , status , } = this.props;

    const displayHeader = tableHeader.map((el, i) => {

      return (
        <th key={i} scope="col">
          {el}
        </th>
      );
    });

    const displayData = tableData.map((el, i) => {
  
     let array = Object.values(el)

     if(array.length > 5){

      array = array.splice(0,3)
     }
      return (
        <tr key={i}>
          {array.map((el , j)=>{ 
            return   ( <td key={j} >{el}</td>)     
          })}
         
          <td>
          <button className="btn  fa fa-edit " onClick={()=>this.edit(el)}></button>
          <button className="btn mr-11 fa fa-trash" onClick={()=>{this.deleteById(el)}}></button>
          </td>
        </tr>
      ) 
        

    });

    return (
      <>
        <div>
          <table
            className="table container my-5 table-striped table-hover table-bordered"
            style={status === "user" ?{ width: "1000px", marginLeft: "0px" }:{ width: "1000px", marginLeft: "120px" }}
          >
            <thead className="table-dark">
              <tr>{displayHeader}</tr>
            </thead>
            <tbody>
              {displayData}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Table;




