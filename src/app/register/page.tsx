import Image from "next/image";
import RegistrationForm from "./RegistrationForm";


export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/reg-background.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        style={{ zIndex: -1 }}
      />

      <RegistrationForm />
    </div>
  );
}
