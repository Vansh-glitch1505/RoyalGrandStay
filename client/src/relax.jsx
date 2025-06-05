import React from "react";
import massage from './massage.png';

const Relax = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#fdfdfd] min-h-screen items-center justify-center px-6 py-10">
      
      {/* Left: Image */}
      <div className="md:w-1/2 w-full">
        <img src={massage} alt="Room" className="w-full h-auto object-cover" />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 w-full p-8 text-center md:text-left">
        <div className="mb-4">
          <h2 className="text-3xl md:text-4xl text-[#a28c5f] font-semibold tracking-wider mb-2">
            RELAX ROOM
          </h2>
          <p className="italic text-[#4b4b4b] text-lg mb-6">
            a signature treatment to yourself
          </p>
          <p className="text-gray-700 leading-relaxed">
            Step into serenity. Our massage room offers a calming escape designed to rejuvenate your body, mind, and soul. Let the gentle ambiance and expert touch melt away every trace of stress.Unwind in our peaceful massage sanctuary where each moment is crafted for your comfort. Breathe in calm, breathe out stress.
          </p>

          <hr className="mt-6 border-t-2 border-[#a28c5f] w-24 mx-auto md:mx-0" />
        </div>
      </div>
    </div>
  );
};

export default Relax;
