import { useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Cart = () => {
  const products = useSelector((state) => state.amazomReducer.products);
  console.log(products);
  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="container mx-auto grid h-auto grid-cols-5 gap-4">
        <div className="col-span-4 h-full w-full bg-white px-4">
          <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 py-3 font-titleFont">
            <h2 className="text-3xl font-medium">Shopping Cart</h2>
            <h4 className="text-2xl font-medium">Subtitle</h4>
          </div>
          {/* proudcts starts here */}
          <div>
            {products.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex w-full items-center gap-6 border-b-[1px] border-b-gray-300 p-4"
                >
                  <div className="flex w-full items-center gap-6">
                    <div className="w-1/5">
                      <img
                        className="h-44 w-full object-contain"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="w-3/5">
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <h2 className="pr-10 text-sm">
                        {item.description.substring(0, 200)}....
                      </h2>
                      <p className="text-base">
                        Unit Price:{" "}
                        <span className="font-semibold">${item.price}</span>
                      </p>
                      <div className="flex w-24 items-center justify-center gap-1 rounded-md bg-[#f0f2f2] py-1 text-center drop-shadow-lg">
                        <p>Qty:</p>
                        <p className="cursor-pointer rounded-md bg-gray-200 px-1 duration-300 hover:bg-gray-400">
                          -
                        </p>
                        <p>{item.quantity}</p>
                        <p className="cursor-pointer rounded-md bg-gray-200 px-1 duration-300 hover:bg-gray-400">
                          +
                        </p>
                      </div>
                      <button className="mt-2 w-36 rounded-lg bg-red-500 py-1 text-white duration-300 hover:bg-red-700 active:bg-red-900">
                        Delete Item
                      </button>
                    </div>
                    <div>
                      <p className="font-titleFont text-lg font-semibold">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 h-full w-full bg-white px-4">
          <div>
            <p className="col-span-1 flex h-full w-full flex-col items-center bg-white p-4">
              <span>
                <CheckCircleIcon className="rounded-full bg-white text-green-500" />
              </span>
              Your order qualifies for FREE Shipping Choose this option at
              Checkout. See details...
            </p>
          </div>
          <div>
            <p className="flex items-center justify-center px-10 font-semibold">
              Total: <span className="text-lg font-bold">$0</span>
            </p>
          </div>
          <button className="to mt-3 w-full rounded-md border border-yellow-500 bg-gradient-to-tr from-yellow-400 to-yellow-200 py-1.5 font-titleFont text-base font-medium duration-200 hover:border-yellow-700 hover:from-yellow-300 hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
