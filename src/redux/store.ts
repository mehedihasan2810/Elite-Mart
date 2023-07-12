import { configureStore } from '@reduxjs/toolkit'
import subMenuReducer from '@/redux/createSlices/subMenuSlice'

export const store = configureStore({
  reducer: {
    subMenu: subMenuReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch