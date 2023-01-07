import React, { Component } from 'react'

export class RejectTable extends Component {
  render() {
    const { userPolicy }= this.props;
    const claimData = userPolicy.filter((el)=> el.status == "Rejected");

    console.log(userPolicy);
    console.log(claimData);
  
    const displayUP = claimData.map((p, i)=>{
      return (
          <tr key={i}>
              <td>{p.userName}</td>
              <td>{p.policyName}</td>
              <td>{p.camount}</td>        
          </tr>
      )
    })
  return (
    <>
    <div className="container my-2 text-align-center my-5">
    <div> <h4>Rejected Policies</h4></div>

      <table className="table table-striped table-hover table-bordered">
      <thead className="table-dark">
            <tr>
            <th>User Name</th>
            <th>Policy</th>
            <th>Claim Amount</th>
            </tr>
          </thead>


        <tbody>
      {displayUP}
        </tbody>
      </table>
    </div>
    </>
  );
  }
}

export default RejectTable
