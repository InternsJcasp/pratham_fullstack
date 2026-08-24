import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HomePage } from "./pages/homePage";

export const App = () => {
  return (
    <div>
      <Header />
      <HomePage/>
      <Footer />
    </div>
  );
};
