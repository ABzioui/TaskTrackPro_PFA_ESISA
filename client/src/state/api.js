import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Customers", "Geography", "Overview"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"], // Tags are used for caching and invalidation
      /* ags are a mechanism used by Redux Toolkit's query functionality to manage cached data 
        and ensure that it remains consistent and up-to-date with changes in the application state. 
        They play a crucial role in optimizing data fetching and caching in Redux-powered application */
    }),
    getUserByEmail: build.query({
      query: (email) => `general/user/${email}`,
      providesTags: ["User"],
    }),
    getUsers: build.query({
      query: () => "management/admin",
      providesTags: ["Customers"],
    }),
    getGeography: build.query({
      query: () => "management/geography",
      providesTags: ["Geography"],
    }),
    getOverview: build.query({
      query: () => "progress/overview",
      providesTags: ["Overview"],
    }),
  }),
});

export const {
  useGetOverviewQuery,
  useGetUserQuery,
  useGetUsersQuery,
  useGetGeographyQuery,
  useGetUserByEmailQuery,
} = api;
