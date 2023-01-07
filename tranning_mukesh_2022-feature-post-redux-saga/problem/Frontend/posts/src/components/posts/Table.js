import React, { Component } from "react";

export class Table extends Component {
  deletePost(pid) {
    this.props.handleDelete(pid);
  }

  editPost(obj) {
    this.props.handleEdit(obj);
  }

  likePost(obj){
    this.props.handleLikePost(obj);
  }

  render() {
    const { posts, users } = this.props;
    posts.map((p) => {
      users.map((u) => {
        if (p.uid === u.uid) {
          Object.assign(p, { userName: u.name });
        }
        return p;
    });
    return p;
    });
    // console.log(posts);

    return (
      <>
        <div className="border border-dark">
        <h1>Posts</h1>
          {posts
            .map((p, i) => {
              return (
                <div className="card mb-3" key={i}>
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <small className="text-muted mx-1"> from : {p.userName}</small>
                    <p className="card-text">
                      {p.post}
                    </p>
                    <p className="card-text d-flex">
                      
                    <i className="fa fa-thumbs-up" aria-hidden="true" onClick={()=>this.likePost(p)}>  {p.likes.length}</i>
                    <label className="fa fa-edit mx-5 align-item-right" onClick={()=>this.editPost(p)}></label>
                    <label className="fa fa-trash mx-5 align-item-right" onClick={()=>this.deletePost(p.pid)}></label>
                    </p>
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
      </>
    );
  }
}

export default Table;
