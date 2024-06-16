import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import { PostListContext } from "../store/post-list-store";
import NoPostMessage from "./NoPostMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const { fetching } = useContext(PostListContext);
  const postList = useLoaderData();
  return (
    <>
      {fetching && <LoadingSpinner />}
      {postList.length === 0 && <NoPostMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
