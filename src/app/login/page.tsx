import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/log-background.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        style={{ zIndex: -1 }}
      />

      <LoginForm />
    </div>
  );
}
