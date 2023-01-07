import React from "react";
import { connect } from "react-redux";
import { operation, selectedPost } from "./reducer";
import PostForm from "./PostForm";
import Table from "./Table";

function Posts(props) {
  const {
    posts,
    users,
    selectedPost,
    operation,
    setAddPost,
    setDeletePost,
    setSelectedPost,
    setOperation,
    setUpdatePost,
    setLikePost,
  } = props;

  const addPost = (obj) => {
    var id = posts.map(({ pid }) => {
      return pid;
    });
    var max = Math.max(...id) + 1;

    var uIndex = users.findIndex((i) => {
      return i.name === obj.userName;
    });
    var uid = users[uIndex].uid;
    var obj2 = {
      pid: max,
      uid: uid,
      title: obj.title,
      post: obj.post,
      likes: [],
    };
    setAddPost(obj2);
  };

  const deletePost = (pid) => {
    setDeletePost(pid);
  };

  const editPost = (obj) => {
    setSelectedPost(obj);
    setOperation("Update");
  };

  const updatePost = (obj) => {
    setUpdatePost(obj);
  };

  const likePost = (obj) => {
    setLikePost(obj);
  };
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5 justify-content-center">
            <PostForm
              users={users}
              handleAddPost={(obj) => addPost(obj)}
              operation={operation}
              selectedPost={selectedPost}
              handleUpdatePost={(obj) => updatePost(obj)}
            />
          </div>
          <div className="col-7">
            <Table
              posts={posts}
              users={users}
              handleDelete={(pid) => deletePost(pid)}
              handleEdit={(obj) => editPost(obj)}
              handleLikePost={(obj) => likePost(obj)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.rootReducer.userStore.users,
    posts: state.rootReducer.postStore.posts,
    selectedPost: state.rootReducer.postStore.selectedPost,
    operation: state.rootReducer.postStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
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
    setLikePost: (obj) => {
      dispatch({ type: "EVENT_LIKE_POST", payload: obj });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
