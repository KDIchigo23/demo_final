import Banner from "src/component/Banner/Banner";
import ProductList from "src/component/ProductList/ProductList";
import Slide from "src/component/Slide/Slide";

const HomePage = () => {
  return (
    <main className="home-page">
      <Banner/>
      <Slide/>
      <ProductList/>
      <ProductList/>
      <ProductList/>
    </main>
  );
};

export default HomePage;
