import React, { Component } from 'react'

export class UserSelect extends Component {
    constructor(props){
        super(props)
        this.userName = React.createRef();
    }

    change = (e) => {
        this.props.handleChange(e)
      };
  render() {
    const { users } = this.props;
        
        this.showSelect = users.map((e, i) => {
            return (
              <option value={e.uid} key={i}>
                {e.name}
              </option>
            );
          });
      
    return (
        <>
            <div className="container mt-5 px-5 offset-2.5 fs-5">
            <div className="col-sm-10">
              <div>
                <select
                  ref={this.userName}
                  className="selectpicker"
                  onChange={(e) => this.change(e.target.value)}
                >
                  <option defaultValue={"null"}>Select user</option>
                  {this.showSelect}
                </select>
            </div>
          </div>
        </div>    
        </>
    )
  }
}

export default UserSelect
