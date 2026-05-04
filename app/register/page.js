"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: ""
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    router.push("/login");
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold">Register</h2>

      <input placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input placeholder="Photo URL"
        onChange={(e) => setForm({ ...form, photo: e.target.value })}
      />

      <input type="password" placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="btn mt-4" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}