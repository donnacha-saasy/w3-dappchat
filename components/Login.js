import Image from "next/image";
import { useMoralis } from "react-moralis";
import Geo from "./Geo";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative ">
      <div className="w-full h-screen">
        <Geo />
        <h1>Login Screen</h1>
        <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
          {/* Logo */}
          <Image
            className="object-cover "
            src="/D-logo.webp"
            height={200}
            width={200}
          />

          {/* Login Button */}
          <button
            onClick={authenticate}
            className="bg-purple-400 rounded-lg p-5 font-bold animate-pulse"
          >
            {" "}
            Login to DappChat
          </button>
        </div>
        {/* Image */}
      </div>
    </div>
  );
}

export default Login;
