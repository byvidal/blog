import { createContext, useContext, useState } from "react";
import { createPostRequest, getPostsRequest, deletePostRequest } from "../api/posts";

const PostContext = createContext();

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error("usePosts debe estar dentro de un PostProvider");
  return context;
};

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await getPostsRequest();
      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async (post) => {
    try {
      await createPostRequest(post);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const res = await deletePostRequest(id);
      if (res.status === 204) setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, getPosts, createPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
}