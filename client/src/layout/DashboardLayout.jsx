import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main className="p-8 max-w-6xl w-full mx-auto">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;