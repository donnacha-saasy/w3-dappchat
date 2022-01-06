import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import Geo from "./Geo";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black bg-opacity-20 shadow-lg shadow-sky-500/50 text-sky-500 border-double border-b-2 border-cyan-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image className="object-cover " src="/D-logo.webp" layout="fill" />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-sky-500 border-8 rounded-full">
            {/* Avatar */}
            <Avatar logoutOnPress />
          </div>

          {/* Welcome */}
          <h1 className="text-3xl">Welcome to DappChatt</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          {/* Username */}

          {/* Change user name */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
