import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/PostContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPages from "./pages/LoginPages";
import PostsPage from "./pages/PostsPage";
import PostFormPage from "./pages/PostFormPage";

import ProtectedRutes from "./ProtectedRutes";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <AuthProvider>
      <PostProvider>

        <BrowserRouter>

          <div className="min-h-screen bg-zinc-950 text-white">

            <Routes>

              {/* Rutas públicas */}

              <Route path="/" element={<h1 className="text-4xl font-bold p-10">Home</h1>} />

              <Route path="/login" element={<LoginPages />} />

              <Route path="/register" element={<RegisterPage />} />



              {/* Rutas protegidas con layout dashboard */}

              <Route element={<ProtectedRutes />}>

                <Route
                  path="/posts"
                  element={
                    <DashboardLayout>
                      <PostsPage />
                    </DashboardLayout>
                  }
                />

                <Route
                  path="/add-post"
                  element={
                    <DashboardLayout>
                      <PostFormPage />
                    </DashboardLayout>
                  }
                />

                <Route
                  path="/posts/:id"
                  element={
                    <DashboardLayout>
                      <PostFormPage />
                    </DashboardLayout>
                  }
                />

              </Route>

            </Routes>

          </div>

        </BrowserRouter>

      </PostProvider>
    </AuthProvider>
  );
}

export default App;