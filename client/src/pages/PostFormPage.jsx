import { useForm } from "react-hook-form";
import { usePosts } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

function PostFormPage() {
  const { register, handleSubmit } = useForm();
  const { createPost } = usePosts();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createPost(data);
    navigate("/posts");
  });

  return (
    <div className="flex h-[calc(100vh-120px)] items-center justify-center">
      <div className="bg-zinc-900 border border-zinc-800 max-w-lg w-full p-10 rounded-2xl shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 tracking-tight">Crear Nueva Publicación</h1>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Título</label>
            <input
              type="text"
              placeholder="Ej. Mi primer blog"
              {...register("title", { required: true })}
              className="w-full bg-zinc-950/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-600"
              autoFocus
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Descripción</label>
            <textarea
              rows="4"
              placeholder="Escribe el contenido aquí..."
              {...register("description")}
              className="w-full bg-zinc-950/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-600 resize-none"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Categoría</label>
            <input
              type="text"
              placeholder="Ej. Tecnología"
              {...register("type")}
              className="w-full bg-zinc-950/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-600"
            />
          </div>
          
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-all active:scale-[0.98] shadow-md mt-4">
            Guardar Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostFormPage;