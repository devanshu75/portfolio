import React from "react";
import { FaBolt, FaCode, FaMobileAlt, FaHeart } from "react-icons/fa";

const ChooseMe = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto bg-[#f8fafc]">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">
        Why Choose Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition border-t-4 border-[#146ef5]">
          <FaBolt className="text-[#146ef5] text-3xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Fast Delivery
          </h3>
          <p className="text-gray-600 text-sm">
            I deliver high-quality code with quick turnaround time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition border-t-4 border-[#146ef5]">
          <FaCode className="text-[#146ef5] text-3xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Clean Code
          </h3>
          <p className="text-gray-600 text-sm">
            Write maintainable, readable, and scalable code.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition border-t-4 border-[#146ef5]">
          <FaMobileAlt className="text-[#146ef5] text-3xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Responsive Design
          </h3>
          <p className="text-gray-600 text-sm">
            Looks great on all screen sizes and devices.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition border-t-4 border-[#146ef5]">
          <FaHeart className="text-[#146ef5] text-3xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Dedicated Support
          </h3>
          <p className="text-gray-600 text-sm">
            I care about your project even after delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseMe;
