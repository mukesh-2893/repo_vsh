import React, { Component } from "react";
import { connect } from "react-redux";
import { operation, selectedPost } from "./actions";
import PostForm from "./PostForm";
import Table from "./Table";

export class Posts extends Component {
  addPost = (obj) => {
    var id = this.props.posts.map(({ pid }) => {
      return pid;
    });
    var max = Math.max(...id) + 1;

    var uIndex = this.props.users.findIndex((i) => {
      return i.name == obj.userName;
    });
    var uid = this.props.users[uIndex].uid;
    var obj2 = { pid: max, uid: uid, title: obj.title, post: obj.post, likes : [] };
    // console.log(obj2);
    this.props.setAddPost(obj2);
  };

  deletePost(pid) {
    this.props.setDeletePost(pid);
  }

  editPost(obj) {
    this.props.setSelectedPost(obj);
    this.props.setOperation("Update");
  }

  updatePost(obj){
    this.props.setUpdatePost(obj);
  }

  likePost(obj){
    console.log(obj);
    this.props.setLikePost(obj);
  }

  render() {
    const { posts, users, selectedPost, operation } = this.props;
    
    return (
      <>
        
        <div className="container">
          <div className="row">
            <div className="col-5 justify-content-center">
              <PostForm
                users={users}
                handleAddPost={(obj) => this.addPost(obj)}
                operation={operation}
                selectedPost={selectedPost}
                handleUpdatePost={(obj)=>this.updatePost(obj)}
              />
            </div>
            <div className="col-7">
              <Table
                posts={posts}
                users={users}
                handleDelete={(pid) => this.deletePost(pid)}
                handleEdit={(obj)=>this.editPost(obj)}
                handleLikePost={(obj)=>this.likePost(obj)}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userStore.users,
    posts: state.postStore.posts,
    selectedPost: state.postStore.selectedPost,
    operation: state.postStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("mapdispatch" , dispatch)
  return {
    setAddPost: (obj) => {
      dispatch({ type: "EVENT_ADD_POST", payload: obj });
    },
    setSelectedPost: (obj) => {
        dispatch(selectedPost(obj));
      },
      setOperation: (obj) => {
        dispatch(operation(obj));
      },
      setUpdatePost: (obj) => {
        dispatch({ type: "EVENT_UPDATE_POST", payload: obj });
      },
    setDeletePost: (id) => {
      dispatch({ type: "EVENT_DELETE_POST", payload: id });
    },
    setLikePost : (obj) => {
      dispatch({type : "EVENT_LIKE_POST", payload : obj })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
