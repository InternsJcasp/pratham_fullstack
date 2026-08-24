import { ProductPage } from "./product";
import { ProductDetailsPage } from "./productDetail";

export const Home = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 sm:p-10  border border-slate-100 space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Welcome to my application
        </h2>

        {/* Paragraph */}
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error
          harum voluptatem impedit molestiae ullam fugit adipisci, ex nesciunt
          repudiandae molestias quam optio animi illum quo. Ullam quidem
          similique nulla minus dicta, maxime quibusdam officia repellendus
          beatae maiores itaque veniam dolor numquam et? Est omnis facere dolor
          voluptatem id ad ipsam vero consectetur. Officiis quae repellat
          aliquam earum quos ut iure. Laudantium velit, vero eligendi fuga a non
          fugiat quaerat quasi. Ad necessitatibus quas eum sequi, praesentium
          vero quasi nihil esse eveniet, sint fuga quo minus at assumenda in
          magni omnis aut nesciunt ipsa dolorum? Reprehenderit voluptatibus
          nihil unde ipsam.
        </p>

        {/* Image Container */}
        <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt="Workspace preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <h2>Product Section</h2>
        <ProductPage />
        <div>
          <h2>Product Details page</h2>
          <ProductDetailsPage />
        </div>
      </div>
    </main>
  );
};
