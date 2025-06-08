import React from "react";
import Slider from "react-slick";
import bedRoom from './image.png';
import bedRoom2 from './image2.png';
import bedRoom3 from './image3.png';

const DeluxeRoom = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section id="Rooms">
      <div className="flex flex-col md:flex-row bg-[#fdfdfd] min-h-screen items-center justify-center px-6 py-10">
        
        {/* Left: Image Carousel */}
        <div className="md:w-1/2 w-full">
          <Slider {...settings}>
            <div>
              <img src={bedRoom} alt="Room 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
            <div>
              <img src={bedRoom2} alt="Room 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
            <div>
              <img src={bedRoom3} alt="Room 3" className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
          </Slider>
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 w-full p-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl text-[#a28c5f] font-semibold tracking-wider mb-2">
            DELUXE ROOM
          </h2>
          <p className="italic text-[#4b4b4b] text-lg mb-6">
            a sleeping beauty style
          </p>
          <p className="text-gray-700 leading-relaxed">
            Experience rare elegance and timeless comfort. Surrounded by graceful charm, our deluxe room is perfect for those seeking serenity and style. Every detail is crafted to offer a refined stay that leaves a lasting impression. Wake up to golden sunlight and the tranquil view of nature just beyond your window. Let each moment here become a memory of pure indulgence and calm.
          </p>
          <hr className="mt-6 border-t-2 border-[#a28c5f] w-24 mx-auto md:mx-0" />
        </div>
      </div>
    </section>
  );
};

export default DeluxeRoom;
