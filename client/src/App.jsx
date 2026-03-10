import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1 className="text-white">Home Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* RUTAS PRIVADAS */}
          <Route element={<ProtectedRoute />}>
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/add-post" element={<PostFormPage />} />
            <Route path="/posts" element={<h1 className="text-white">Posts Page</h1>} />
            <Route path="/add-post" element={<h1 className="text-white">New Post</h1>} />
            <Route path="/posts/:id" element={<h1 className="text-white">Update Post</h1>} />
            <Route path="/profile" element={<h1 className="text-white">Profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
