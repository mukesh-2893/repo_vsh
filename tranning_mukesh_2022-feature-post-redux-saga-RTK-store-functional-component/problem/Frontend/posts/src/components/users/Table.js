import React from 'react'

export default function Table(props) {
  const { tableHeader, users, handleDelete, handleEdit }= props;
  
    const deleteById=(obj)=>{
        handleDelete(obj);
      }
    
      const edit=(obj)=>{
        handleEdit(obj);
      }

    const displayHeader = tableHeader.map((el, i) => {
        return (
          <th key={i} scope="col">
            {el}
          </th>
        );
      });

      const displayUsers = users.map((u, i)=>{
        return (
            <tr key={i}>
                <td>{u.uid}</td>
                <td>{u.name}</td>
                <td>
          <button className="btn btn-primary mx-3 fa-solid fa fa-edit" onClick={()=>edit(u)}></button>
          <button className="btn btn-danger mx-3 fa fa-trash" onClick={()=>{deleteById(u)}}></button>
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


// import React, { Component } from "react";

// export class Table extends Component {

//     deleteById(obj){
//         this.props.handleDelete(obj)
//       }
    
//       edit(obj){
//         this.props.handleEdit(obj)
//       }

//   render() {

//     const { tableHeader, users }= this.props;
//     const displayHeader = tableHeader.map((el, i) => {
//         return (
//           <th key={i} scope="col">
//             {el}
//           </th>
//         );
//       });

//       const displayUsers = users.map((u, i)=>{
//         return (
//             <tr key={i}>
//                 <td>{u.uid}</td>
//                 <td>{u.name}</td>
//                 <td>
//           <button className="btn btn-primary mx-3 fa-solid fa fa-edit" onClick={()=>this.edit(u)}></button>
//           <button className="btn btn-danger mx-3 fa fa-trash" onClick={()=>{this.deleteById(u)}}></button>
//           </td>
//             </tr>
//         )
//       })
//     return (
//       <>
//       <div className="container my-4 text-align-center">

//         <table className="table table-striped table-hover table-bordered">
//         <thead className="table-dark">
//               <tr>{displayHeader}</tr>
//             </thead>


//           <tbody>
//         {displayUsers}
//           </tbody>
//         </table>
//       </div>
//       </>
//     );
//   }
// }

// export default Table;