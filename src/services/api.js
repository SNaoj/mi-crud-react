const API_URL = "http://localhost:8080/api/users";

async function request(url = "", options = {}) {
  const res = await fetch(`${API_URL}${url}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    let msg = await res.text();
    throw new Error(msg || "Error en la API");
  }

  return res.json();
}

export default {
  getUsers: () => request("/"),
  getUser: (id) => request(`/${id}`),
  createUser: (data) =>
    request("", { method: "POST", body: JSON.stringify(data) }),
  updateUser: (id, data) =>
    request(`/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  removeUser: (id) => request(`/${id}`, { method: "DELETE" }),
};



