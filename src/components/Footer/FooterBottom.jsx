import { footerBottomItem } from "../../constants";

const FooterBottom = () => {
  return (
    <div className="bg-footerBottom w-full py-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid w-full grid-cols-7 place-content-center gap-3 text-gray-400">
          {footerBottomItem.map((item) => {
            return (
              <div className="group cursor-pointer" key={item._id}>
                <h3 className="group-hover: mb-[2px] w-24 text-[12px] font-semibold uppercase leading-3 text-[#ddd]">
                  {item.title}
                </h3>
                <p className="w-24 text-[12px] leading-3 tracking-tight text-[#999] group-hover:underline">
                  {item.des}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
