
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="text-center mt-20">
      <h2>Login</h2>

      <button
        className="btn mt-4"
        onClick={() => {
          localStorage.setItem("user", "ok");
          router.push("/");
        }}
      >
        Login
      </button>
    </div>
  );
}