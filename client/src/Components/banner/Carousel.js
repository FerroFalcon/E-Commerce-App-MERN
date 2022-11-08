import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/2211651-bbpl-staples_460_Bangalore.jpg"
              class="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460-221107.png"
              class="block w-full"
              alt="Camera"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
