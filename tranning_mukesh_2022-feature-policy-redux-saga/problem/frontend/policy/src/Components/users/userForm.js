import React, { Component } from "react";

export class UserForm extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
      }
    
      add = ()=>{
        console.log("user Add");
        const name = this.name.current.value;
        this.props.handleAdd(name);
        this.name.current.value = ""
      }
    
      update(uid){
        let name = this.name.current.value;
        console.log(name, uid);
    
        var obj = { uid, name }
        this.props.handleUpdate(obj)
    
        name = "";
        
      }
  render() {
    const {selectedUser, operation }= this.props
    let { uid, name } = selectedUser;
    // console.log(selectedUser, operation);

    if(operation === "update"){
        this.name.current.value = name;
      }
    return (
      <>
        <div className="container my-5">
          <h1>User Form</h1>
          <div className="form-group row">
            <div className="col-xs-4">
              <label htmlFor="ex3">Enter User Name : </label>
              <input className="form-control" ref={this.name} type="text" />
            </div>
            <div>
            <button className="btn btn-success mx-4 my-3"
            onClick={()=>this.add()}>Add</button>
          
            <button className="btn btn-success mx-4 my-3"
            onClick={()=>this.update(uid)}>update</button>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserForm;
