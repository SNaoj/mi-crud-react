// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="
        w-full max-w-2xl 
        bg-white/10 
        backdrop-blur-xl 
        border border-purple-400/20 
        rounded-xl 
        p-8 
        shadow-[0_0_25px_rgba(120,30,255,0.4)]
      ">
        
        <h2 className="text-2xl font-bold text-white mb-4 drop-shadow">
          Bienvenido al taller CRUD
        </h2>

        <p className="text-gray-300 mb-6">
          Proyecto de ejemplo para consumir la API en Docker.
        </p>

        <div className="flex gap-4">
          <Link 
            to="/users"
            className="px-4 py-2 rounded-lg font-semibold 
                       bg-gradient-to-r from-blue-500 to-purple-600 
                       hover:opacity-80 transition"
          >
            Ver usuarios
          </Link>

          <Link 
            to="/users/create"
            className="px-4 py-2 rounded-lg font-semibold 
                       bg-gradient-to-r from-green-500 to-emerald-600 
                       hover:opacity-80 transition"
          >
            Crear usuario
          </Link>
        </div>

      </div>
    </div>
  );
}

