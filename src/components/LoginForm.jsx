import { useRef, useContext } from "react";
import { UserList } from "../store/UserData";

const LoginForm = () => {
  const { Authentication } = useContext(UserList);

  const emailElement = useRef();
  const passwordElement = useRef();

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = emailElement.current.value;
    const password = passwordElement.current.value;
    Authentication(email, password);
  };

  return (
    <>
      <form
        className="max-w-[80%] mx-auto p-4 space-y-6 bg-white mt-[30%]"
        onSubmit={handleSignIn}
      >
        <div>
          <label className="text-2xl font-bold block mb-5">Welcome Back</label>
          <label htmlFor="email" className="block text-base font-medium ">
            Email
          </label>
          <input
            type="email"
            ref={emailElement}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-base mb-1 font-medium"
          >
            Password
          </label>
          <input
            type="password"
            ref={passwordElement}
            placeholder="••••••••••"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center">
          <input
            id="check"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="check" className="ml-2 block text-sm text-gray-400">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Sign in
        </button>
      </form>
      <div className="mt-[25%]">
        <p className="text-gray-500 text-center ">© 2024 tentwenty</p>
      </div>
    </>
  );
};

export default LoginForm;
