import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostForm from "./PostForm";
import Table from "./Table";
import { useAddPostMutation, useDeletePostMutation, useGetPostsQuery, useLikePostMutation, useUpdatePostMutation } from "./postApiSlice";
import { useGetUsersQuery } from "../users/userApiSlice";
import { getOperation, getSelectedPost, setOperation, setSelectedPost } from "./postReducer";

function Posts(props) {

  const userData = useGetUsersQuery().data;
  const { data, isError, isLoading, isSuccess } = useGetPostsQuery();
  
  const selectedPost = useSelector(getSelectedPost);
  const operation = useSelector(getOperation);
  const dispatch = useDispatch();

  const [addPost] = useAddPostMutation();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [likePost]= useLikePostMutation();
  


  let content;
  if(isLoading){
  content = `<h1>Loading please wait...</h1>`
  }else if(isSuccess){
    content = (<>
      <div className="container">
        <div className="row">
          <div className="col-5 justify-content-center">
            <PostForm
              users={userData.entities}
              userIds={userData.ids}
              handleAddPost={(obj) => handleAddPost(obj)}
              operation={operation}
              selectedPost={selectedPost}
              handleUpdatePost={(obj) => handleUpdatePost(obj)}
            />
          </div>
          <div className="col-7">
          {Object.values(data.entities).length > 0 ?
            <Table
              posts={data.entities}
              ids={data.ids}
              users={userData.entities}
              userIds={userData.ids}
              handleDelete={(pid) => handleDeletePost(pid)}
              handleEdit={(obj) => editPost(obj)}
              handleLikePost={(obj) => handleLikePost(obj)}
            /> : null }
          </div>
        </div>
      </div>
    </>)
  }else if(isError){
    content = (<>
      <h1>404 page not found</h1>
      <p>{isError}</p>
    </>)
  }


  const handleAddPost = (obj) => {
    var max = Math.max(...data.ids) + 1;
    var uid = Number.parseInt(obj.userName)
    var obj2 = {
      id : max,
      pid: max,
      uid: uid,
      title: obj.title,
      post: obj.post,
      likes: [],
    };
    addPost(obj2);
  };

  const handleDeletePost = (pid) => {
    deletePost(pid);
  };

  const editPost = (obj) => {
    
    dispatch(setSelectedPost(obj))
    dispatch(setOperation("update"))
  };

  const handleUpdatePost = (obj) => {
    
    updatePost(obj);
  };

  const handleLikePost = (obj) => {
    likePost(obj);
  };
  
  return (
    <>
      {content}
    </>
  );
}

export default Posts;