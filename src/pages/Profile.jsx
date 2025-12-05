// src/pages/Profile.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Perfil</h2>

      <p className="mb-2"><strong>Email:</strong> {user.email}</p>

      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
