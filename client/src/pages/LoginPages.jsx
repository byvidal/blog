import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginPage() {

  const { register, handleSubmit, formState:{ errors } } = useForm();
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [darkMode,setDarkMode] = useState(true);

  const toggleTheme = () =>{
    setDarkMode(!darkMode);
  }

  const onSubmit = handleSubmit((data)=>{
    signin(data);
  });

  useEffect(()=>{
    if(isAuthenticated) navigate("/posts");
  },[isAuthenticated,navigate]);

  return (

    <div className={`
      min-h-screen w-full flex items-center justify-center
      transition-colors duration-300
      ${darkMode ? "bg-zinc-950" : "bg-gray-100"}
    `}>

      {/* Botón tema */}

      <div className="absolute top-6 right-6">
        <button
          onClick={toggleTheme}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium transition
            ${darkMode
              ? "bg-zinc-800 text-white hover:bg-zinc-700"
              : "bg-white border text-gray-700 hover:bg-gray-200"}
          `}
        >
          {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </div>

      {/* Card */}

      <div className={`
        w-full max-w-md p-10 rounded-2xl shadow-2xl border
        transition-colors duration-300
        ${darkMode
          ? "bg-zinc-900 border-zinc-800"
          : "bg-white border-gray-200"}
      `}>

        {loginErrors.map((error,i)=>(
          <div
            key={i}
            className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-center mb-4"
          >
            {error}
          </div>
        ))}

        <h1 className={`
          text-3xl font-bold text-center mb-6
          ${darkMode ? "text-white" : "text-gray-800"}
        `}>
          Iniciar sesión
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">

          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("email",{required:true})}
              className={`
                w-full px-4 py-3 rounded-lg border outline-none transition
                ${darkMode
                  ? "bg-zinc-950 border-zinc-700 text-white placeholder-zinc-500 focus:border-indigo-500"
                  : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-indigo-500"}
              `}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                El correo es requerido
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password",{required:true})}
              className={`
                w-full px-4 py-3 rounded-lg border outline-none transition
                ${darkMode
                  ? "bg-zinc-950 border-zinc-700 text-white placeholder-zinc-500 focus:border-indigo-500"
                  : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-indigo-500"}
              `}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                La contraseña es requerida
              </p>
            )}
          </div>

          <div className="text-right -mt-1">
            <button
              type="button"
              onClick={() => alert("Próximamente: recuperación de contraseña por correo")}
              className="text-sm text-indigo-400 hover:text-indigo-300 transition"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition active:scale-95 shadow-md"
          >
            Ingresar
          </button>

        </form>

        <p className={`
          text-center mt-6
          ${darkMode ? "text-zinc-400" : "text-gray-600"}
        `}>
          ¿No tienes cuenta?{" "}
          <Link
            to="/register"
            className="text-indigo-500 hover:text-indigo-400 font-medium"
          >
            Regístrate
          </Link>
        </p>

      </div>

    </div>
  );
}

export default LoginPage;