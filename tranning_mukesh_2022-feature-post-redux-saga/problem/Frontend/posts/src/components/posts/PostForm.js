import React, { Component } from "react";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.userName = React.createRef();
    this.title = React.createRef();
    this.post = React.createRef();
    this.button = React.createRef();
  }

  addPost = (e) => {
    e.preventDefault();
    var userName = this.userName.current.value;
    var title = this.title.current.value;
    var post = this.post.current.value;
    var obj = { userName : userName, title : title, post : post};

    this.props.handleAddPost(obj);

    this.userName.current.value = "";
    this.title.current.value = "";
    this.post.current.value = ""
  };
  updatePost = (e, pid) => {
    e.preventDefault();

    var title = this.title.current.value;
    var post = this.post.current.value;
    var obj = {  pid : pid, uid : this.props.selectedPost.uid, title : title, post : post};
    this.props.handleUpdatePost(obj);
  };

  render() {
    const { users, selectedPost, operation } = this.props;
    const {pid, uid, title, post, userName }= selectedPost;

    if(operation == "Update"){
      this.title.current.value = title;
      this.post.current.value = post;

    }
    const usersOptions = users.map((user, i ) => (
      <option key={i} value={user.id}>
        {user.name}
      </option>
    ));
    return (
      <>
        <form className="position-sticky">
        <h3  className="form-outline mb-4">Add new post</h3>
          <div className="form-outline mb-4">
          {/* <label className="form-label mx-2">
              Name
            </label> */}
            <select id="postAuthor" ref={this.userName}>
          <option value="">Select user...</option>
          {usersOptions}
        </select>
            
          </div>

          <div className="form-outline mb-4">
          <label className="form-label">
              Title
            </label>
            <input type="text" className="form-control" ref={this.title} placeholder="Enter title here..."/>
            
          </div>

          <div className="form-outline mb-4">
          <label className="form-label">
              Post
            </label>
            <textarea
              className="form-control"
              id="form4Example3"
              rows="4"
              ref={this.post}
            ></textarea>
            
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4" ref={this.button} onClick={(e)=>this.addPost(e)}>
            Add Post
          </button>
          <button type="submit" className="btn btn-primary btn-block mb-4 mx-3" ref={this.button} onClick={(e)=>this.updatePost(e, pid)}>
            Update Post
          </button>
        </form>
      </>
    );
  }
}

export default PostForm;
