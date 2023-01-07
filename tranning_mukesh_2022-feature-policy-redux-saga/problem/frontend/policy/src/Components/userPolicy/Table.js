import React, { Component } from "react";

export class Table extends Component {
  constructor(props) {
    super(props);
    this.claimAmount = React.createRef();

    this.state = {
      claimAmount: 0,
    };
  }

  deleteById(obj) {
    this.props.handleDelete(obj);
  }

  edit(obj) {
    this.props.handleEdit(obj);
  }
  change = (e) => {
    this.setState = {
      claimAmount: e.target.value,
    };
  };
  claim = (obj) => {
    // console.log(obj);
    let obj2 = {
      upid: obj.upid,
      status: "claim",
      camount: this.state.claimAmount,
    };
    // console.log(obj2);
    this.props.handleClaim(obj2);
    this.state.claimAmount = "";
  };

  render() {
    const { tableHeader, showData } = this.props;
    const displayHeader = tableHeader.map((el, i) => {
      return (
        <th key={i} scope="col">
          {el}
        </th>
      );
    });

    const displayUP = showData.map((p, i) => {
      return (
        <tr key={i}>
          <td>{p.upid}</td>
          <td>{p.userName}</td>
          <td>{p.policyName}</td>
          <td>{p.amount}</td>
          <td>{p.limit}</td>
          <td>
            <button
              className="btn mx-3 fa-solid fa fa-edit"
              onClick={() => this.edit(p)}
            ></button>
            <button
              className="btn mx-3 fa fa-trash"
              onClick={() => {
                this.deleteById(p);
              }}
            ></button>
          </td>
          <td>
            <span className="fas fa-rupee-sign"></span>
            <input
              className="form-control"
              onChange={(e) => {
                this.change(e);
              }}
              type="number"
            />
          </td>
          <td>
            <button
              className="btn btn-primary my-2"
              onClick={() => this.claim(p)}
            >
              Claim
            </button>
          </td>
        </tr>
      );
    });
    return (
      <>
        <div className="container my-2 text-align-center">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark">
              <tr>{displayHeader}</tr>
            </thead>
            <tbody>{displayUP}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Table;
