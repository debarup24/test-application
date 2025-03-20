import { createSlice } from "@reduxjs/toolkit";
import { PostData } from "../utils/PostData";

const savePosts = (posts) => {
  localStorage.setItem("posts", JSON.stringify(posts));
};

const loadPosts = () => {
  const storedPosts = localStorage.getItem("posts");
  return storedPosts ? JSON.parse(storedPosts) : PostData;
};

const postSlice = createSlice({
  name: "post",
  initialState: {
    items: loadPosts(),
  },
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload);
      savePosts(state.items);
    },
    updatePost: (state, action) => {
      const { id, userName, postBody, image, hashtags } = action.payload;

      const updatingPost = state.items.find((post) => post.id == id);

      if (updatingPost) {
        updatingPost.userName = userName;
        updatingPost.postBody = postBody;
        updatingPost.hashtags = hashtags;
        updatingPost.image = image;
        savePosts(state.items);
      }
    },

    removePost: (state, action) => {
      const idToDelete = action.payload;
      state.items = state.items.filter((post) => post.id !== idToDelete);
      savePosts(state.items);
    },
  },
});

export const { addPost, removePost, updatePost } = postSlice.actions;

export default postSlice.reducer;
