import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <>
      <header className="border-b border-gray-400 py-5 bg-gray-100">
        <div className="flex items-center justify-between max-w-7xl px-4 md:px-2 mx-auto">
          <h1 className="text-xl md:text-2xl text-purple-400 font-extrabold font-mono">
            Employee-portal
          </h1>
          <Navbar />
          <div className="flex items-center  gap-5">
            <button className="px-4 py-2 active:scale-95 text-white cursor-pointer rounded-md bg-purple-400 text-base font-medium">
              Log In
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
