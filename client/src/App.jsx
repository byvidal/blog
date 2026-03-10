import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/PostContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPages from "./pages/LoginPages";
import PostsPage from "./pages/PostsPage";
import PostFormPage from "./pages/PostFormPage";
import ProtectedRutes from "./ProtectedRutes";
import Navbar from "./components/Navbar"; // Importa el Navbar

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <main className="container mx-auto px-10">
          <BrowserRouter>
            <Navbar /> {/* Colócalo aquí */}
            <Routes>
              <Route path="/" element={<h1 className="text-white text-4xl font-bold">Home Page</h1>} />
              <Route path="/login" element={<LoginPages />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRutes />}>
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/add-post" element={<PostFormPage />} />
                <Route path="/posts/:id" element={<PostFormPage />} />
                <Route path="/profile" element={<h1 className="text-white">Profile</h1>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </main>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;