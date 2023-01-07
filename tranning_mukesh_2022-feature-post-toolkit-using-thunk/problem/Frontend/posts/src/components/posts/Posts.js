import React from "react";
import { connect } from "react-redux";
import { operation, selectedPost } from "./reducer";
import PostForm from "./PostForm";
import Table from "./Table";
import { addPostThunk, deletePostThunk, likePostThunk, updatePostThunk } from "./postService";

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
    userIds,
    ids
  } = props;

  const addPost = (obj) => {
    console.log(obj);
    var max = Math.max(...ids) + 1;
// console.log(ids);
    var uid = Number.parseInt(obj.userName)
    var obj2 = {
      id : max,
      pid: max,
      uid: uid,
      title: obj.title,
      post: obj.post,
      likes: [],
    };
    setAddPost(obj2);
    console.log(obj2);
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
              userIds={userIds}
              handleAddPost={(obj) => addPost(obj)}
              operation={operation}
              selectedPost={selectedPost}
              handleUpdatePost={(obj) => updatePost(obj)}
            />
          </div>
          <div className="col-7">
          {Object.values(posts).length > 0 ?
            <Table
              posts={posts}
              ids={ids}
              users={users}
              userIds={userIds}
              handleDelete={(pid) => deletePost(pid)}
              handleEdit={(obj) => editPost(obj)}
              handleLikePost={(obj) => likePost(obj)}
            /> : null }
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.rootReducer.userStore.entities,
    userIds: state.rootReducer.userStore.ids,
    posts: state.rootReducer.postStore.entities,
    ids: state.rootReducer.postStore.ids,
    selectedPost: state.rootReducer.postStore.selectedPost,
    operation: state.rootReducer.postStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddPost: (obj) => {
      dispatch(addPostThunk(obj));
    },
    setSelectedPost: (obj) => {
      dispatch(selectedPost(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdatePost: (obj) => {
      dispatch(updatePostThunk(obj));
    },
    setDeletePost: (id) => {
      dispatch(deletePostThunk(id));
    },
    setLikePost: (obj) => {
      dispatch(likePostThunk(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
