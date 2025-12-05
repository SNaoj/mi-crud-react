// src/pages/Users.jsx
import React, { useState } from "react";
import useUsers from "../hooks/useUsers";
import UserList from "../components/UserList";
import Alert from "../components/Alert";

export default function Users() {
  const { users, loading, error, remove, load } = useUsers();
  const [apiError, setApiError] = useState(null);

  const handleDelete = async (id) => {
    try {
      setApiError(null);
      await remove(id);
    } catch (err) {
      setApiError(err?.data?.message || err.message);
    }
  };

  return (
    <div className="py-10">

      {/* Título */}
      <h2 className="text-3xl font-bold text-white mb-6 drop-shadow">
        Usuarios
      </h2>

      {/* Panel gamer */}
      <div className="
        bg-white/10 
        backdrop-blur-xl 
        border border-purple-500/20 
        shadow-[0_0_35px_rgba(128,0,255,0.4)]
        rounded-2xl 
        p-6
      ">
        {/* Botón Refrescar */}
        <div className="flex justify-end mb-4">
          <button
            onClick={load}
            className="px-4 py-2 rounded-md text-sm font-semibold
                       bg-gradient-to-r from-blue-500 to-purple-600
                       hover:opacity-80 transition"
          >
            Refrescar
          </button>
        </div>

        {error && <Alert type="error">{error.message}</Alert>}
        {apiError && <Alert type="error">{apiError}</Alert>}

        {/* Tabla */}
        <UserList users={users} onDelete={handleDelete} loading={loading} />
      </div>
    </div>
  );
}



