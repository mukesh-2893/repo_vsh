import React, { Component } from "react";

export class artistForm extends Component {
    constructor(props){
        super(props);
        this.name = React.createRef();
    }

    add=(id)=>{
        var name = this.name.current.value;
        this.props.handleAdd(name);
        this.name.current.value = ""
    }

    update = (id)=>{
      let name = this.name.current.value;
    console.log(name, id);

    var obj = { id, name }
    this.props.handleUpdate(obj)

    this.name.current.value = ""
    }
  render() {
    const { selectedArtist, operation } = this.props;
    var { aid, name } = selectedArtist;
    if(operation === "update"){
        this.name.current.value = selectedArtist.name;
    }
    return (
      <>
        <p className="my-5 display-4 "> Artist Details</p>
        <div className="container mt-5 px-5 offset-2.5 fs-5">
          <div className="col-sm-10">
            <input type="text" ref={this.name} className="form-control" />
          </div>

          <div>
            <button className="btn btn-success" onClick={() => this.add()}>
              Add
            </button>

            <button className="btn btn-success"
            onClick={()=>this.update(aid)}>update</button>
          </div>
        </div>
      </>
    );
  }
}

export default artistForm;
