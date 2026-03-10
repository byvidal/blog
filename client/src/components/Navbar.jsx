import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-900 border border-zinc-800 my-4 flex justify-between items-center py-4 px-8 rounded-xl shadow-lg">
      <Link to={isAuthenticated ? "/posts" : "/"}>
        <h1 className="text-2xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors">
          Gestión de Posts
        </h1>
      </Link>
      <ul className="flex items-center gap-x-4">
        {isAuthenticated ? (
          <>
            <li className="text-zinc-300 font-medium">
              Hola, <span className="text-white">{user?.username}</span>
            </li>
            <li>
              <Link to="/add-post" className="bg-indigo-600 hover:bg-indigo-500 transition-colors px-4 py-2 rounded-lg text-white font-medium shadow-sm">
                Nuevo Post
              </Link>
            </li>
            <li>
              <Link 
                to="/" 
                onClick={() => logout()}
                className="bg-red-600 hover:bg-red-500 transition-colors px-4 py-2 rounded-lg text-white font-medium shadow-sm"
              >
                Salir
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="text-zinc-300 hover:text-white transition-colors font-medium px-4 py-2">
                Ingresar
              </Link>
            </li>
            <li>
              <Link to="/register" className="bg-indigo-600 hover:bg-indigo-500 transition-colors px-4 py-2 rounded-lg text-white font-medium shadow-sm">
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;