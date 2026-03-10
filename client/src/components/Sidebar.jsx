import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950">

      <div className="p-6 border-b border-zinc-800">

        <h1 className="text-xl font-bold">
          DevBlog
        </h1>

      </div>

      <nav className="p-4 space-y-2">

        <Link
          to="/posts"
          className="block px-4 py-2 rounded-lg hover:bg-zinc-800 transition"
        >
          Publicaciones
        </Link>

        <Link
          to="/add-post"
          className="block px-4 py-2 rounded-lg hover:bg-zinc-800 transition"
        >
          Crear Post
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;