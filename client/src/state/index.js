import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  reviews: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFollowers: (state, action) => {
      if (state.user) {
        state.user.followers = action.payload.followers;
      } else {
        console.error("user followers non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload.reviews;
    },
    setReview: (state, action) => {
      const updatedReviews = state.reviews.map((review) => {
        if (review._idRev === action.payload.review._idRev) return action.payload.review;
        return review;
      });
      state.reviews = updatedReviews;
    },
  },
},
);

export const { setMode, setLogin, setLogout, setFollowers, setPosts, setPost,setReviews ,setReview } =
  authSlice.actions;
export default authSlice.reducer;
