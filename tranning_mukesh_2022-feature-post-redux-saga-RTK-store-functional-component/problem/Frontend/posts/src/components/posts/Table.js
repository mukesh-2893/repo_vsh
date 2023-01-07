import React from "react";

export default function Table(props) {
  const { posts, users, handleDelete, handleEdit, handleLikePost } = props;
  // console.log(posts);
  const deletePost = (pid) => {
    handleDelete(pid);
  };

  const editPost = (obj) => {
    handleEdit(obj);
  };

  const likePost = (obj) => {
    handleLikePost(obj);
  };

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
                  <small className="text-muted mx-1">
                    {" "}
                    from : {p.userName}
                  </small>
                  <p className="card-text">{p.post}</p>
                  <p className="card-text d-flex">
                    <i
                      className="fa fa-thumbs-up"
                      aria-hidden="true"
                      onClick={() => likePost(p)}
                    >
                      {" "}
                      {p.likes.length}
                    </i>
                    <label
                      className="fa fa-edit mx-5 align-item-right"
                      onClick={() => editPost(p)}
                    ></label>
                    <label
                      className="fa fa-trash mx-5 align-item-right"
                      onClick={() => deletePost(p.pid)}
                    ></label>
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
