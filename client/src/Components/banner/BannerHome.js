import React from "react";
import Slider from "react-slick";

function BannerHome() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className="h-10">
      <Slider {...settings}>
        <div className="">
          <img
            className=""
            src="https://www.bigbasket.com/media/uploads/banner_images/2211651-bbpl-staples_460_Bangalore.jpg"
            alt=""
          />
        </div>
        <div className="">
          <img
            className=""
            src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460-221107.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default BannerHome;
