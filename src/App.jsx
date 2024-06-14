import { productData } from "./api/api";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Signin from "./pages/Authentication/Signin";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productData}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Route>,
    ),
  );
  return (
    <div className="bg-gray-100 font-bodyFont">
      <RouterProvider router={router} loader />
    </div>
  );
};

export default App;
