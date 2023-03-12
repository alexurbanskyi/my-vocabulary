import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wordsApi = createApi({
  reducerPath: "wordsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getWords: build.query({
      query: () => "words",
    }),
  }),
});

export const { useGetWordsQuery } = wordsApi;

