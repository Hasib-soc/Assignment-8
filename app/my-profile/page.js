"use client";

import { useEffect, useState } from "react";

export default function MyProfile() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div>
      Current URL: {url}
    </div>
  );
}