// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // cargar usuario desde localStorage
    useEffect(() => {
      const saved = localStorage.getItem("authUser");
      if (saved) {
        // Diferir la actualización de estado para evitar render en cascada
        setTimeout(() => setUser(JSON.parse(saved)), 0);
      }
    }, []);


  // guardar en localStorage cuando cambie
  useEffect(() => {
    if (user) localStorage.setItem("authUser", JSON.stringify(user));
    else localStorage.removeItem("authUser");
  }, [user]);

const login = async (email, password) => {
  const res = await fetch("http://localhost:8080/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) return false;
  const data = await res.json();
  setUser(data.user);
  return true;
};


  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
