import React, { Component } from 'react'

export class artistForm extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
  }

  add= ()=>{
    var name = this.name.current.value;
    // console.log(name);
    this.props.handleAdd(name)
  }

  update = (aid) =>{
    let name = this.name.current.value;
    var obj = { aid, name }
    this.props.handleUpdate(obj)
  }

  render() {
    const { selectedArtist, operation } = this.props;
    let { aid, name } = selectedArtist;
    // console.log(selectedArtist);
    if(operation === "update"){
      this.name.current.value = name;
    }
    return (
      <>
      <p className="my-5 display-4 "> Artist Details</p>
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
          onClick={()=>this.update(aid)}>update</button>
        </div>
        
      </div>
    </>
    )
  }
}

export default artistForm
