import AddressInfo from "../AddressInfo/AddressInfo";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Services from "./../Services/Services";
import PopularProducts from "../PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <AddressInfo />
      <PopularProducts />
    </div>
  );
};

export default Home;
