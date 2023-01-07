import React, { Component } from "react";

export class PolicyForm extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.amount = React.createRef();
    this.limit = React.createRef();
  }

  add = () => {
    const name = this.name.current.value;
    const amount = this.amount.current.value;
    const limit = this.limit.current.value;
    var obj = { name, amount, limit }
    this.props.handleAdd(obj);
    this.name.current.value = "";
  };

    update(pid){
        const name = this.name.current.value;
        const amount = this.amount.current.value;
        const limit = this.limit.current.value;
        var obj = {pid, name, amount, limit }

      this.props.handleUpdate(obj)
    }
  render() {
    const { selectedPolicy, operation } = this.props;
    let { pid, name, amount, limit } = selectedPolicy;
    // console.log(selectedUser, operation);

    if (operation === "update") {
      this.name.current.value = name;
      this.amount.current.value = amount;
      this.limit.current.value = limit;
    }
    return (
      <>
        <div className="container my-5">
          <h1>Policy Form</h1>
          <div className="form-group row">
            <div className="col-xs-4">
              <label htmlFor="ex3">Enter Policy Name : </label>
              <input className="form-control" ref={this.name} type="text" />
            </div>
            <div className="col-xs-4">
              <label htmlFor="ex3">Enter Amount : </label>
              <input className="form-control" ref={this.amount} type="number" />
            </div>
            <div className="col-xs-4">
              <label htmlFor="ex3">Enter Limit : </label>
              <input className="form-control" ref={this.limit} type="number" />
            </div>
            <div>
              <button
                className="btn btn-success mx-4 my-3"
                onClick={() => this.add()}
              >
                Add
              </button>

              <button
                className="btn btn-success mx-4 my-3"
                onClick={() => this.update(pid)}
              >
                update
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PolicyForm;
