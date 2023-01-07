import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.userName = React.createRef();
    this.policyName = React.createRef();
    this.amount = React.createRef();
    this.limit = React.createRef();
  }

    add = () => {
      const userName = this.userName.current.value;
      const policyName = this.policyName.current.value;
      const amount = this.amount.current.value;
      const limit = this.limit.current.value;
      var obj = { userName, policyName, amount, limit }
      // console.log(obj);
      this.props.handleAdd(obj);
      this.userName.current.value = "select user";
      this.policyName.current.value = "select policy";
      this.amount.current.value = "";
      this.limit.current.value = "";
    };

      update(upid){
          const userName = this.userName.current.value;
          const policyName = this.policyName.current.value;
          const amount = this.amount.current.value;
          const limit = this.limit.current.value;
          var obj = {upid, userName, policyName, amount, limit }

        this.props.handleUpdate(obj)
      }

  render() {
    const { selectedUP, operation, userPolicy, users, policies } = this.props;
    let { upid, uid, pid, userName, policyName, amount, limit } = selectedUP;
    // console.log(selectedUser, operation);

    if (operation === "update") {
      this.userName.current.value = userName;
      this.policyName.current.value = policyName;
      this.amount.current.value = amount;
      this.limit.current.value = limit;
    }
    this.change = (e) => {
      console.log(e);
      var index = userPolicy.findIndex((i) => {
        return i.policyName == e;
      });
      console.log(index);
      this.amount.current.value = userPolicy[index].amount;
      this.limit.current.value = userPolicy[index].limit;
    };
    this.userShow = users.map((e, i) => {
      return <option key={i}>{e.name}</option>;
    });
    this.showPolicy = policies.map((e, i) => {
      return <option key={i}>{e.name}</option>;
    });
    return (
      <>
        <div className="container my-5">
          <h1>User Policy Form</h1>

          <div className="form-group row">
            <select
              className="form-select mx-5"
              aria-label="Default select example"
              ref={this.userName}
            >
              <option defaultValue={null}>select User</option>
              {this.userShow}
            </select>
            <select
              className="form-select my-1 mx-5"
              aria-label="Default select example"
              ref={this.policyName}
              onChange={(e) => this.change(e.target.value)}
            >
              <option defaultValue={null}>select Policy</option>
              {this.showPolicy}
            </select>

            <div className="col-xs-4 my-1 mx-5">
              <input className="form-control" ref={this.amount} type="number" />
            </div>
            <div className="col-xs-4 my-1 mx-5">
              {/* <label for="ex3">Limit : </label> */}
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
                onClick={() => this.update(upid)}
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

export default Form;
