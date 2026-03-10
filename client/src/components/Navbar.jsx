import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { logout } = useAuth();

  return (
    <header className="border-b border-zinc-800 bg-zinc-950">

      <div className="flex justify-between items-center px-8 py-4">

        <h2 className="text-lg font-semibold">
          Dashboard
        </h2>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-400"
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default Navbar;