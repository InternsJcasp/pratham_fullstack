export const HomePage = () => {
  return (
    <main className="py-12 md:py-20">
      <section className="px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {/* Left Content Column */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Welcome to Tech <span className="text-purple-500">Sphere</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            magnam eveniet itaque, similique quibusdam quae sequi error
            cupiditate impedit aspernatur perspiciatis tempora dolorem eum
            temporibus dignissimos, ea voluptatum beatae a minima! Ad, ratione
            laborum iste repellendus odio soluta ipsa dolores?
          </p>

          <div>
            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 active:scale-95">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_vector-1726258528632-f714c945c6a6?q=80&w=730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero section illustration showing modern technology concepts"
            className="w-full max-w-md h-auto object-cover"
          />
        </div>
      </section>
    </main>
  );
};
