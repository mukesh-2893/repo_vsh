import React, { useRef } from "react";

export default function PostForm(props) {
  const { users, selectedPost, operation, handleUpdatePost, handleAddPost, userIds } =
    props;
  const { pid, title, post } = selectedPost;
  
  const userNameRef = useRef("");
  const titleRef = useRef("");
  const postRef = useRef("");

  const addPost = (e) => {
    e.preventDefault();
    var userName = userNameRef.current.value;
    var title = titleRef.current.value;
    var post = postRef.current.value;
    var obj = { userName: userName, title: title, post: post };

    handleAddPost(obj);
    userNameRef.current.value = "";
    titleRef.current.value = "";
    postRef.current.value = "";
  };
  const updatePost = (e, pid) => {
    e.preventDefault();

    var title = titleRef.current.value;
    var post = postRef.current.value;
    var obj = { pid: pid, uid: selectedPost.uid, title: title, post: post };
    handleUpdatePost(obj);
  };

  if (operation === "Update") {
    titleRef.current.value = title;
    postRef.current.value = post;
  }
  const usersOptions = userIds.map((user, i) => (
    <option key={i} value={users[user].id}>
      {users[user].name}
    </option>
  ));
  return (
    <>
      <form className="position-sticky">
        <h3 className="form-outline mb-4">Add new post</h3>
        <div className="form-outline mb-4">
          <select id="postAuthor" ref={userNameRef}>
            <option value="">Select user...</option>
            {usersOptions}
          </select>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            ref={titleRef}
            placeholder="Enter title here..."
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Post</label>
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
            ref={postRef}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          onClick={(e) => addPost(e)}
        >
          Add Post
        </button>
        <button
          type="submit"
          className="btn btn-primary btn-block mb-4 mx-3"
          onClick={(e) => updatePost(e, pid)}
        >
          Update Post
        </button>
      </form>
    </>
  );
}
