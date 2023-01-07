import React from "react";

export default function Table(props) {
  const { posts, users, handleDelete, handleEdit, handleLikePost, ids } = props;
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
        {ids
          .map((p, i) => {
            return (
              <div className="card mb-3" key={i}>
                <div className="card-body">
                  <h5 className="card-title">{posts[p].title}</h5>
                  <small className="text-muted mx-1">
                    {" "}
                    from : {posts[p].userName}
                  </small>
                  <p className="card-text">{posts[p].post}</p>
                  <p className="card-text d-flex">
                    <i
                      className="fa fa-thumbs-up"
                      aria-hidden="true"
                      onClick={() => likePost(posts[p])}
                    >
                      {" "}
                      {posts[p].likes.length}
                    </i>
                    <label
                      className="fa fa-edit mx-5 align-item-right"
                      onClick={() => editPost(posts[p])}
                    ></label>
                    <label
                      className="fa fa-trash mx-5 align-item-right"
                      onClick={() => deletePost(p)}
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
