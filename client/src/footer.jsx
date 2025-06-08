import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-gray-700 px-6 py-10 mt-10">
        <section id = "Contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Hotel Info */}
        <div>
          <h2 className="text-xl font-semibold text-[#a28c5f] mb-4">Hotel Policies</h2>
          <ul className="space-y-2 text-sm">
            <li>• Check-in time: 2:00 PM</li>
            <li>• Check-out time: 11:00 AM</li>
            <li>• Early check-in & late check-out subject to availability</li>
            <li>• No smoking inside rooms</li>
            <li>• Pets are not allowed</li>
            <li>• Valid ID required at check-in</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-[#a28c5f] mb-4">Contact Us</h2>
          <p className="text-sm">
            Royal Avenue, 35 - TW345 ROYALTALE<br />
            Phone: +91 8219231<br />
            Email: royalgrand@hotel.com
          </p>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-500">
        &copy; {new Date().getFullYear()} Royal Grand Hotel. All rights reserved.
      </div>
      </section>
    </footer>
  );
};

export default Footer;
