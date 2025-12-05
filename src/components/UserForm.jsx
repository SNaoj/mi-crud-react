import React, { useState, useEffect } from "react";
import Alert from "./Alert";

export default function UserForm({
  initial,
  onSubmit,
  submitLabel,
  loading,
  apiError,
}) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm(initial);
  }, [initial]);

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "El nombre es obligatorio";
    if (form.name.length < 2) e.name = "Debe tener mínimo 2 caracteres";

    if (!form.email.trim()) e.email = "El email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email no válido";

    if (initial.password === "" && (form.password.length < 6 || !form.password))
      e.password = "Contraseña mínima de 6 caracteres";

    if (
      initial.password !== "" &&
      form.password &&
      form.password.length > 0 &&
      form.password.length < 6
    )
      e.password = "Si la cambias, deben ser mínimo 6 caracteres";

    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    await onSubmit(form);
  };

  return (
    <form
      className="
        bg-white/10 
        backdrop-blur-xl
        border border-purple-500/20
        shadow-[0_0_25px_rgba(128,0,255,0.35)]
        rounded-2xl 
        p-6 
        space-y-5
      "
      onSubmit={handleSubmit}
    >
      {apiError && <Alert type="error">{apiError}</Alert>}

      {/* NOMBRE */}
      <div>
        <label className="block mb-1 font-medium text-gray-200">Nombre</label>
        <input
          className="
            w-full p-3 rounded-lg 
            bg-white/5 text-gray-200 
            border border-purple-500/20
            focus:border-purple-500 
            focus:ring-2 focus:ring-purple-500/40
            outline-none transition
          "
          value={form.name}
          name="name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && (
          <p className="text-sm text-red-400 mt-1">{errors.name}</p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label className="block mb-1 font-medium text-gray-200">Email</label>
        <input
          className="
            w-full p-3 rounded-lg 
            bg-white/5 text-gray-200 
            border border-purple-500/20
            focus:border-purple-500 
            focus:ring-2 focus:ring-purple-500/40
            outline-none transition
          "
          value={form.email}
          name="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && (
          <p className="text-sm text-red-400 mt-1">{errors.email}</p>
        )}
      </div>

      {/* CONTRASEÑA */}
      <div>
        <label className="block mb-1 font-medium text-gray-200">
          Contraseña
        </label>
        <input
          type="password"
          className="
            w-full p-3 rounded-lg 
            bg-white/5 text-gray-200 
            border border-purple-500/20
            focus:border-purple-500 
            focus:ring-2 focus:ring-purple-500/40
            outline-none transition
          "
          value={form.password}
          name="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <p className="text-xs text-gray-400 mt-1">
          {initial.password === ""
            ? "Obligatoria (mínimo 6 caracteres)"
            : "Déjala vacía para no cambiarla"}
        </p>

        {errors.password && (
          <p className="text-sm text-red-400 mt-1">{errors.password}</p>
        )}
      </div>

      {/* BOTÓN */}
      <button
        disabled={loading}
        className="
          w-full py-3 rounded-lg font-bold text-white
          bg-gradient-to-r from-blue-500 to-purple-600
          hover:opacity-80 transition
          disabled:opacity-50
        "
      >
        {loading ? "Procesando..." : submitLabel}
      </button>
    </form>
  );
}


