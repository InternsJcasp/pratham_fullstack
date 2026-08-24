export const Navbar = () => {
  return (
    <>
      <header className="bg-transparent border-b border-gray-400 py-5 ">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl text-purple-400 font-bold font-mono">
            Fusion
          </h1>
          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center  gap-5">
            <button className="px-4 py-2 bg-purple-400 text-base font-medium">
              Log In
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
