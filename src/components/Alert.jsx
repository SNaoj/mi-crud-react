import React from "react";

export default function Alert({ type = "error", children }) {
  const styles = {
    error: "bg-red-100 text-red-700 border border-red-300",
    success: "bg-green-100 text-green-700 border border-green-300",
  };

  return (
    <div className={`px-3 py-2 rounded mb-4 ${styles[type]}`}>
      {children}
    </div>
  );
}
