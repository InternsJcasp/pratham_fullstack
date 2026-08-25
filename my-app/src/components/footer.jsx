export const Footer = () => {
  return (
    <footer className=" w-full bg-background py-4 text-center border-t bg-gray-100">
      <div className=" flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-7xl font-bold text-purple-400">Fusion</h1>
        <nav>
          <ul className="leading-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-gray-300 pt-5">
        <h2>Copyright@2026 | Made By Pratham Suthar</h2>
      </div>
    </footer>
  );
};
