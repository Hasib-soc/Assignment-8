"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return <div>{url}</div>;
}