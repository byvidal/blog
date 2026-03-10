import { useEffect } from "react";
import { usePosts } from "../context/PostContext";

function PostsPage() {
  const { getPosts, posts, deletePost } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  if (posts.length === 0) return (<h1 className="text-white">No hay publicaciones</h1>);

  return (
    <div className="grid grid-cols-3 gap-2 p-10">
      {posts.map((post) => (
        <div key={post._id} className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
          <h1 className="text-2xl font-bold text-white">{post.title}</h1>
          <p className="text-slate-300">{post.description}</p>
          <p className="text-slate-400 text-sm">{post.type}</p>
          <button 
            className="bg-red-500 px-2 py-1 text-white rounded-md mt-4"
            onClick={() => deletePost(post._id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostsPage;