import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, useError, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter new Username (current: ${user.getUsername()}`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-5 text-white  ">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-sky-200 underline  decoration-4 decoration-sky-500 uppercase italic hover:decoration-white hover:duration-200"
      >
        {" "}
        Change your username
      </button>
    </div>
  );
}

export default ChangeUsername;
