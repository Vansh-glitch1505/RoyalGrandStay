import React from "react";
import img1 from "./food1.png";
import img2 from "./pasta.png";
import img3 from "./chicken.png";

const MassageRoom = () => {
  return (
    <section id = "Dining">
    <div className="flex flex-col md:flex-row bg-[#fdfdfd] min-h-screen items-center justify-between px-6 py-10 gap-10">
      
      {/* Left: Text Content */}
      <div className="md:w-1/2 w-full p-8 text-center md:text-left">
        <div className="mb-4">
          <h2 className="text-3xl md:text-4xl text-[#a28c5f] font-semibold tracking-wider mb-2">
            FINE DINING
          </h2>
          <p className="italic text-[#4b4b4b] text-lg mb-6">
            a taste of timeless luxury
          </p>
          <p className="text-gray-700 leading-relaxed">
            Savor an exquisite culinary experience where every bite is crafted with passion.
            From gourmet meals to local delicacies, our chefs bring flavors to life that leave a lasting impression.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Every dish is a celebration of taste, plated with elegance and precision.
            Whether you're dining indoors or under the stars, every moment is unforgettable.
          </p>
          <hr className="mt-6 border-t-2 border-[#a28c5f] w-24 mx-auto md:mx-0" />
        </div>
      </div>

      {/* Right: 3 Side-by-Side Images */}
      <div className="md:w-1/2 w-full flex gap-4">
        <img
          src={img1}
          alt="Massage 1"
          className="rounded-lg shadow-lg w-1/3 object-cover"
        />
        <img
          src={img2}
          alt="Massage 2"
          className="rounded-lg shadow-lg w-1/3 object-cover"
        />
        <img
          src={img3}
          alt="Massage 3"
          className="rounded-lg shadow-lg w-1/3 object-cover"
        />
      </div>
    </div>
    </section>
  );
};

export default MassageRoom;
