import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  setFetching: () => {},
  deletePost: () => {},
  fetching: false,
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (posts) => {
    const addAction = {
      type: "ADD_POST",
      payload: posts,
    };
    dispatchPostList(addAction);
  };
  const addInitialPosts = (posts) => {
    const addInitialAction = {
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    };
    dispatchPostList(addInitialAction);
  };
  const deletePost = (postId) => {
    const deleteAction = {
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    };
    dispatchPostList(deleteAction);
  };
  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts: addInitialPosts,
        setFetching: setFetching,
        fetching: fetching,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
