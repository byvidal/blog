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
    <div className="flex items-center justify-center h-screen">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Título"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <textarea
            rows="3"
            placeholder="Descripción"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          <input
            type="text"
            placeholder="Tipo (ej. Tecnología)"
            {...register("type")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <button className="bg-indigo-500 px-3 py-2 rounded-md text-white">
            Guardar Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostFormPage;