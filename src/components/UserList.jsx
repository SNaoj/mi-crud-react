import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export default function UserList({ users, onDelete, loading }) {
  if (loading) return <Loader />;

  return (
    <div className="bg-[#0f0f24]/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 shadow-[0_0_25px_rgba(147,51,234,0.4)]">
      {users.length === 0 ? (
        <p className="text-center text-gray-500 py-6">
          No hay usuarios registrados.
        </p>
      ) : (
        <table className="w-full border-separate border-spacing-y-2">
  <thead>
    <tr className="bg-white/10 backdrop-blur-md text-gray-200">
      <th className="py-3 px-3">ID</th>
      <th className="py-3 px-3">Nombre</th>
      <th className="py-3 px-3">Email</th>
      <th className="py-3 px-3 text-center">Acciones</th>
    </tr>
  </thead>

  <tbody>
    {users.map(u => (
      <tr 
        key={u.id}
        className="bg-white/5 hover:bg-white/10 transition text-gray-200 rounded-lg"
      >
        <td className="py-3 px-3">{u.id}</td>
        <td className="py-3 px-3 font-semibold">{u.name}</td>
        <td className="py-3 px-3">{u.email}</td>

        <td className="py-3 px-3">
          <div className="flex gap-2 justify-center">
            <Link
              to={`/users/edit/${u.id}`}
              className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 
                         text-white rounded-md text-sm hover:opacity-80 transition"
            >
              Editar
            </Link>

            <button
              onClick={() => confirm("¿Eliminar usuario?") && onDelete(u.id)}
              className="px-3 py-1 bg-gradient-to-r from-red-500 to-rose-600 
                         text-white rounded-md text-sm hover:opacity-80 transition"
            >
              Eliminar
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      )}
    </div>
  );
}


