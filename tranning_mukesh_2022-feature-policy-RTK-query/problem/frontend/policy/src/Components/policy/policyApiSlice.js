import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api";

const policyAdapter = createEntityAdapter();

export const initialState = policyAdapter.getInitialState({
  tableHeader: ["Id ", "Policy Name", "Amount", "Max Limit", "Actions"],
  policy: [],
  selectedPolicy: {},
  operation: "Add",
});

export const policyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPolicies: builder.query({
      query: () => "/policy",
      transformResponse: (response) => {
        return policyAdapter.setAll(initialState, response);
      },
      providesTags: ["Policy"],
    }),
    addPolicy: builder.mutation({
      query: (data) => ({
        url: "/policy/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Policy" }],
    }),
    deletePolicy: builder.mutation({
      query: (id) => ({
        url: `policy/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Policy" }],
    }),
    updatePolicy: builder.mutation({
      query: (data) => ({
        url: `policy/update/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Policy" }],
    }),
  }),
});
export const {
  useGetPoliciesQuery,
  useAddPolicyMutation,
  useDeletePolicyMutation,
  useUpdatePolicyMutation,
} = policyApiSlice;
