import { useState } from "react";
import phool from "./PHOOL.png";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/bookings", {
        name,
        email,
        checkIn,
        checkOut,
      });
      alert(res.data.message); 
      setName("");
      setEmail("");
      setCheckIn("");
      setCheckOut("");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Booking failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#eaeaea] flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 bg-[#eaeaea] relative">
        <div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-light text-[#a28c5f] mb-2 tracking-widest">
              CONTACT
            </h1>
            <p className="text-gray-700">
              Royal Avenue, 35 -TW345 ROYALTALE
              <br />
              T 91 - 8219231
            </p>
          </div>

          <h2 className="mt-10 mb-6 text-xl font-semibold text-black">
            BOOK YOUR STAY
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#a28c5f]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#a28c5f]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative">
              <label className="absolute text-gray-500 text-sm left-3 top-1">
                Check-in Date
              </label>
              <input
                type="date"
                className="w-full p-3 pt-6 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a28c5f]"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label className="absolute text-gray-500 text-sm left-3 top-1">
                Check-out Date
              </label>
              <input
                type="date"
                className="w-full p-3 pt-6 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a28c5f]"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#a28c5f] text-white p-3 rounded-md hover:bg-[#8c7b4a] transition"
            >
              Book Now
            </button>
          </form>
        </div>

        <img
          src={phool}
          alt="Decoration"
          className="absolute top-0 right-0 w-48 md:w-64 pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

export default Contact;
