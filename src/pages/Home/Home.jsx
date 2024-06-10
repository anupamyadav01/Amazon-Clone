import Banner from "../../components/Home/Banner";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="-mt-36 w-full">
        <Products />
      </div>
    </div>
  );
};

export default Home;
