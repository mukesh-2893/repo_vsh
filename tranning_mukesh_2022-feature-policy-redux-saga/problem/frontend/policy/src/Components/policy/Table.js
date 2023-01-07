import React, { Component } from 'react'

export class Table extends Component {
  deleteById(obj){
    this.props.handleDelete(obj)
  }

  edit(obj){
    this.props.handleEdit(obj)
  }
  
  render() {
    const { tableHeader, policies }= this.props;
    const displayHeader = tableHeader.map((el, i) => {
        return (
          <th key={i} scope="col">
            {el}
          </th>
        );
      });

      const displayUsers = policies.map((p, i)=>{
        return (
            <tr key={i}>
                <td>{p.pid}</td>
                <td>{p.name}</td>
                <td>{p.amount}</td>
                <td>{p.limit}</td>
                <td>
          <button className="btn btn-primary mx-3 fa-solid fa fa-edit" onClick={()=>this.edit(p)}></button>
          <button className="btn btn-danger mx-3 fa fa-trash" onClick={()=>{this.deleteById(p)}}></button>
          </td>
            </tr>
        )
      })
    return (
      <>
      <div className="container my-4 text-align-center">

        <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
              <tr>{displayHeader}</tr>
            </thead>


          <tbody>
        {displayUsers}
          </tbody>
        </table>
      </div>
      </>
    );
  }
}

export default Table
