import { useEffect } from "react";
import { usePosts } from "../context/PostContext";
import { Link } from "react-router-dom";

function PostsPage() {

  const { getPosts, posts, deletePost } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);


  /* -------------------- ESTADO VACÍO -------------------- */

  if (posts.length === 0)
    return (
      <div className="flex flex-col h-[calc(100vh-120px)] items-center justify-center space-y-6 text-center px-4">

        <div className="rounded-full bg-zinc-900 border border-zinc-800 p-6">
          <svg
            className="w-12 h-12 text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            Tu feed está vacío
          </h1>

          <p className="text-zinc-400 mt-2 max-w-sm">
            Aún no hay contenido aquí. Comienza escribiendo tu primera
            publicación.
          </p>
        </div>

        <Link
          to="/add-post"
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Crear publicación
        </Link>

      </div>
    );


  /* -------------------- FEED -------------------- */

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-6">


      {/* HEADER */}

      <header className="mb-6">

        <h1 className="text-3xl font-bold text-white">
          Feed de publicaciones
        </h1>

        <p className="text-zinc-400">
          Comparte ideas y contenido con tu comunidad
        </p>

      </header>


      {/* CREAR POST */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            U
          </div>

          <Link
            to="/add-post"
            className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 px-4 py-2 rounded-full text-sm transition"
          >
            ¿En qué estás pensando?
          </Link>

        </div>

      </div>



      {/* POSTS */}

      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4"
        >

          {/* HEADER DEL POST */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                {post.title
                  ? post.title.charAt(0).toUpperCase()
                  : "P"}
              </div>

              <div>

                <h3 className="text-sm font-semibold text-white">
                  Usuario
                </h3>

                <p className="text-xs text-zinc-400">
                  Publicado recientemente
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">
              <Link
                to={`/posts/${post._id}`}
                className="text-zinc-400 hover:text-indigo-400 text-sm transition"
              >
                Editar
              </Link>

              <button
                onClick={() => deletePost(post._id)}
                className="text-zinc-400 hover:text-red-400 text-sm transition"
              >
                Eliminar
              </button>
            </div>

          </div>



          {/* CONTENIDO */}

          <div>

            <h2 className="text-lg font-bold text-white mb-2">
              {post.title}
            </h2>

            <p className="text-zinc-300 leading-relaxed">
              {post.description}
            </p>

          </div>



          {/* TAG */}

          <div className="text-xs text-indigo-400">
            #{post.type || "general"}
          </div>



          {/* DIVIDER */}

          <div className="border-t border-zinc-800"></div>



          {/* ACCIONES */}

          <div className="flex justify-between text-sm text-zinc-400">

            <button className="hover:text-indigo-400 transition">
              👍 Me gusta
            </button>

            <button className="hover:text-indigo-400 transition">
              💬 Comentar
            </button>

            <button className="hover:text-indigo-400 transition">
              ↗ Compartir
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

export default PostsPage;