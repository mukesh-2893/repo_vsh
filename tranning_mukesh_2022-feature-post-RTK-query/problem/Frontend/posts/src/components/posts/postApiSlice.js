import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api";

const postAdapter = createEntityAdapter();

export const initialState = postAdapter.getInitialState({
    posts: [],
    selectedPost: {},
    operation: "Add",
});

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      transformResponse: (response) => {
        return postAdapter.setAll(initialState, response);
      },
      providesTags: ["Post"],
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: "/posts/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Post" }],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Post" }],
    }),
    updatePost: builder.mutation({
      query: (data) => ({
        url: `posts/update/${data.pid}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Post" }],
    }),
    likePost : builder.mutation({
        query : (data)=>({
            url : "posts/like",
            method : "POST",
            body : data,
        }),
        invalidatesTags : [{type : "Post"}]
    })
  }),
});
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useLikePostMutation,
} = postApiSlice;