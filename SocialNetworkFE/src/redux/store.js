import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import friendsSlice from "./friendSlice";
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";
import mediaSlice from "./mediaSlice";
const store = configureStore({
    reducer : {
        auth : authSlice,
        friends: friendsSlice,
        comment: commentSlice,
        post: postSlice,
        media: mediaSlice,
    }
})
export default store;