import { Navbar } from "./navbar";

export const Footer = () => {
  return (
    <footer className=" w-full  text-center border-t bg-gray-100">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-2">
        <div className="text-start max-w-2xl space-y-5">
          <h2 className="text-2xl md:text-5xl font-extrabold text-purple-400">
            Team <span className="text-gray-400">Sphere</span>
          </h2>
          <p className="text-gray-500 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa
            reiciendis officia modi vel eaque accusamus maxime, sint explicabo!
            Dolores.
          </p>
        </div>
        <Navbar />
      </div>
      <div className="py-4 border-t border-gray-200">
        <h2 className="font-medium text-gray-600">
          Copyright@2026 | www.teamSphere.com | pratham suthar
        </h2>
      </div>
    </footer>
  );
};
