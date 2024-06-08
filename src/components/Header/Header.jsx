import { logo } from "../../assets";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";
const Header = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className="flex w-full items-center gap-4 bg-amazon_blue px-4 py-3 text-white">
        {/* logo image  */}
        <div className="headerHover">
          <img className="mt-2 w-24" src={logo} alt="logo" />
        </div>
        {/* logo ends  */}
        {/* location icon  */}
        <div className="headerHover">
          <LocationOnIcon className="text-white" />
          <p className="flex flex-col text-sm font-light text-lightText">
            Deliver to{" "}
            <span className="-mt-1 text-sm font-semibold text-whiteText">
              India
            </span>
          </p>
        </div>
        {/* location icon ends here  */}
        {/* search bar starts */}
        <div className="relative flex h-10 flex-grow rounded-md">
          <span
            onClick={() => setShowAll((prev) => !prev)}
            className="flex h-full w-14 cursor-pointer items-center justify-center rounded-bl-md rounded-tl-md border-2 bg-gray-200 font-titleFont text-sm text-amazon_blue duration-300 hover:bg-gray-300"
          >
            All
            <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute left-0 top-10 z-50 h-80 w-56 flex-col gap-1 overflow-x-hidden overflow-y-scroll border-[1px] border-amazon_blue bg-white p-2 text-black">
                {/* <li className="cursor-pointer border-b-[1px] border-b-transparent font-titleFont text-sm tracking-wide duration-200 hover:border-b-amazon_blue">
                  All Department
                </li> */}
                {allItems.map((item) => (
                  <li
                    className="cursor-pointer border-b-[1px] border-b-transparent font-titleFont text-sm tracking-wide duration-200 hover:border-b-amazon_blue"
                    key={item.id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            className="h-full flex-grow border-none px-2 text-base text-amazon_blue outline-none"
          />
          <span className="flex h-full w-12 cursor-pointer items-center justify-center rounded-br-md rounded-tr-md bg-amazon_yellow text-amazon_blue duration-300 hover:bg-[#f3a847]">
            <SearchIcon />
          </span>
        </div>
        {/* search bar ends */}
        {/* signin starts here  */}
        <div className="headerHover flex flex-col items-start justify-center">
          <p className="text-xs font-light text-lightText">Hello, Sign in</p>
          <p className="-mt-1 text-sm font-semibold text-whiteText">
            Account & Lists{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </p>
        </div>
        {/* signin ends here */}
        {/* return and orders starts here */}
        <div className="headerHover flex flex-col items-start justify-center">
          <p className="text-xs font-light text-lightText">Returns</p>
          <p className="-mt-1 text-sm font-semibold text-whiteText">& Orders</p>
        </div>
        {/* return and orders ends here */}
        {/* cart icon starts here */}
        <div className="headerHover relative flex items-start justify-center">
          <ShoppingCartIcon />
          <p className="mt-3 text-xs font-semibold text-whiteText">
            Cart{" "}
            <span className="absolute -top-1 left-6 flex h-4 items-center justify-center rounded-full bg-[#f3a847] p-1 text-xs font-semibold text-amazon_blue">
              0
            </span>
          </p>
        </div>
        {/* cart icon ends here */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
