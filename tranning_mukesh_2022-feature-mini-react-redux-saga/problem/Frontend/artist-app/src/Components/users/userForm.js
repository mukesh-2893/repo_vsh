
import React, { Component } from "react";

export class Userfrom extends Component {
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
    const { selectedUser, operation } = this.props;
    let { uid, name } = selectedUser;
    // console.log(operation);
    if(operation === "update"){
      this.name.current.value = name;
    }
    

    return (
      <>
        <p className="my-5 display-4 "> User Details</p>
        <div className="container mt-5 px-5 offset-2.5 fs-5">
          <div className="col-sm-10">
            <input
              type="text"
              ref={this.name}
              className="form-control"
            />
          </div>

          <div>
            <button className="btn btn-success mx-4 my-3"
            onClick={()=>this.add()}>Add</button>
          
            <button className="btn btn-success mx-4 my-3"
            onClick={()=>this.update(uid)}>update</button>
          </div>
          
        </div>
      </>
    );
  }
}

export default Userfrom;
