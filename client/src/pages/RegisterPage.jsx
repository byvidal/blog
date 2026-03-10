import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/posts");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-120px)] items-center justify-center">
      <div className="bg-zinc-900 border border-zinc-800 max-w-md w-full p-10 rounded-2xl shadow-2xl">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-center mb-4 font-medium" key={i}>
            {error}
          </div>
        ))}
        
        <h1 className="text-3xl font-bold text-white mb-6 text-center tracking-tight">Crear Cuenta</h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full bg-zinc-950/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-500"
              placeholder="Nombre de usuario"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">El usuario es requerido</p>}
          </div>
          
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-950/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-500"
              placeholder="Correo electrónico"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">El correo es requerido</p>}
          </div>
          
          <div>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="w-full bg-zinc-950/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-zinc-500"
              placeholder="Contraseña"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">Mínimo 6 caracteres</p>}
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-all active:scale-[0.98] shadow-md mt-2">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;