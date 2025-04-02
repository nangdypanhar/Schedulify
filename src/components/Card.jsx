import React from "react";
import { Link } from "react-router-dom";
const Card = ({gen,year,specialize }) => {
  return (
    <div className="w-[370px] h-[200px] shadow-md rounded-md p-4 relative hover:shadow-xl hover:border-2 hover:border-[#284BAD] transition-all duration-100">
      <p className="text-lg font-semibold">
        Generation: {gen}
      </p>

      <div className="flex items-center mt-1">
        <span className="text-lg font-medium">{specialize}</span>
      </div>

      <p className="font-medium text-lg">
        Year: <span className="font-normal">{year}</span>
      </p>
      <Link to="/schedule">
        <div className="absolute bottom-2 right-2 text-white bg-[#284BAD] font-bold px-3 py-1 rounded-md hover:bg-[#1a306f]">
          View
        </div>
      </Link>
    </div>
  );
};

export default Card;
