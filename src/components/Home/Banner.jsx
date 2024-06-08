import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive,
} from "../../assets/index";
import { useState } from "react";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setDotActive(next),
  };
  (settings.appendDots = (dots) => (
    <div
      style={{
        position: "absolute",
        top: "70%",
        left: "45%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <ul
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {" "}
        {dots}{" "}
      </ul>
    </div>
  )),
    (settings.customPaging = (i) => (
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: dotActive === i ? "#fff" : "rgba(0,0,0,0.4)",
          cursor: "pointer",
          backgroundColor: dotActive === i ? "#000" : "#fff",
          transition: "all .3s ease",
          opacity: dotActive === i ? "1" : "0.4",
          zIndex: dotActive === i ? "1" : "0",
        }}
      >
        {i + 1}
      </div>
    ));
  return (
    <div className="w-full">
      <div className="relative h-full w-full">
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="" />
          </div>
          <div>
            <img src={bannerImgTwo} alt="" />
          </div>
          <div>
            <img src={bannerImgThree} alt="" />
          </div>
          <div>
            <img src={bannerImgFour} alt="" />
          </div>
          <div>
            <img src={bannerImgFive} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
