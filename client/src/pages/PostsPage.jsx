import { useEffect } from "react";
import { usePosts } from "../context/PostContext";
import { Link } from "react-router-dom";

function PostsPage() {
  const { getPosts, posts, deletePost } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  // Estado vacío moderno y diseñado para la conversión
  if (posts.length === 0) return (
    <div className="flex flex-col h-[calc(100vh-120px)] items-center justify-center space-y-5 text-center px-4">
      <div className="rounded-full bg-zinc-900 border border-zinc-800 p-6 shadow-2xl">
        <svg className="w-12 h-12 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
        </svg>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Tu feed está vacío</h1>
        <p className="text-zinc-400 mt-2 max-w-sm mx-auto">Aún no hay contenido aquí. Comienza a escribir tu primera publicación para darle vida a este espacio.</p>
      </div>
      <Link to="/add-post" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-500 hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-indigo-500/25">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Crear Publicación
      </Link>
    </div>
  );

  return (
    <div className="py-8 animate-fade-in">
      {/* Cabecera de la página */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 tracking-tight">
            Tus Publicaciones
          </h1>
          <p className="text-zinc-400 mt-1">Gestiona y administra el contenido de tu plataforma.</p>
        </div>
        <Link to="/add-post" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors bg-indigo-500/10 hover:bg-indigo-500/20 px-4 py-2 rounded-lg border border-indigo-500/20">
          Redactar nuevo
        </Link>
      </header>

      {/* Grid de tarjetas moderno */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div 
            key={post._id} 
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            {/* Resplandor decorativo interno */}
            <div className="absolute -inset-x-4 -top-4 z-0 h-24 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            
            <div className="relative z-10">
              {/* Metadatos (Autor falso / Fecha) */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-inner">
                  {post.title ? post.title.charAt(0).toUpperCase() : 'P'}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-300 leading-none">Anónimo</h3>
                  <p className="text-[11px] text-zinc-500 mt-1">Publicado recientemente</p>
                </div>
              </div>
              
              {/* Contenido principal */}
              <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-zinc-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                {post.description}
              </p>
            </div>
            
            {/* Pie de la tarjeta */}
            <div className="relative z-10 flex items-center justify-between border-t border-zinc-800/50 pt-4 mt-auto">
               <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-800">
                 <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                 {post.type || 'General'}
               </span>
               
               {/* El botón de eliminar solo aparece con opacidad total al hacer hover en la tarjeta */}
               <button 
                className="opacity-0 group-hover:opacity-100 flex items-center gap-1.5 text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1.5 rounded-lg transition-all focus:opacity-100"
                onClick={() => deletePost(post._id)}
                title="Eliminar publicación"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="hidden sm:inline">Eliminar</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;