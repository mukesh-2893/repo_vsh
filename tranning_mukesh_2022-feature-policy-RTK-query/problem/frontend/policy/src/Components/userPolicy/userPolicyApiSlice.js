import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api";

const userPolicyAdapter = createEntityAdapter();
export const initialState = userPolicyAdapter.getInitialState({
  tableHeader: [
    "UPID",
    "User Name",
    "Policy Name",
    "Amount",
    "Limit",
    "Actions",
    "Req Amount",
    " ",
  ],
  userPolicy: [],
  selectedUserPolicy: {},
  operation: "Add",
});

export const userPolicyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserPolicy: builder.query({
      query: () => "/user.policy",
      transformResponse: (response) => {
        return userPolicyAdapter.setAll(initialState, response);
      },
      providesTags: ["UserPolicy"],
    }),
    addUserPolicy: builder.mutation({
      query: (data) => ({
        url: "/user.policy/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "UserPolicy" }],
    }),
    deleteUserPolicy: builder.mutation({
      query: (id) => ({
        url: `user.policy/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "UserPolicy" }],
    }),
    updateUserPolicy: builder.mutation({
      query: (data) => ({
        url: `user.policy/update/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "UserPolicy" }],
    }),
    claim : builder.mutation({
        query : (data)=>({
            url : "user.policy/claim.request",
            method : "POST",
            body : data,
        }),
        invalidatesTags : [{type : "UserPolicy"}]
    })
  }),
});
export const {
  useGetUserPolicyQuery,
  useAddUserPolicyMutation,
  useDeleteUserPolicyMutation,
  useUpdateUserPolicyMutation,
  useClaimMutation,
} = userPolicyApiSlice;
