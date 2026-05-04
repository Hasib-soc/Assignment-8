

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UpdateProfile() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    photo: ""
  });

  const handleUpdate = () => {
    let user = JSON.parse(localStorage.getItem("user") || "{}");

    user.name = form.name || user.name;
    user.photo = form.photo || user.photo;

    localStorage.setItem("user", JSON.stringify(user));

    router.push("/my-profile");
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl">Update Profile</h2>

      <input placeholder="New Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input placeholder="New Photo URL"
        onChange={(e) => setForm({ ...form, photo: e.target.value })}
      />

      <button className="btn mt-4" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}