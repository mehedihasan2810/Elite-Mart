import { configureStore } from "@reduxjs/toolkit";
import eliteMartReducer from "@/redux/createSlices/createSlice";
import { dataApi } from "./createApi/createApi";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    eliteMart: eliteMartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
