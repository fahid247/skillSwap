import React from "react";

const Card = ({ skill }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-[50%] object-cover"
      />
      <div className="p-2 sm:p-4">
        <h3 className="text-lg font-semibold text-black text-[min(3.5vw,18px)]">{skill.skillName}</h3>
        

        <div className="flex justify-between items-center mt-3 text-sm">
          <span className="font-medium text-blue-600 text-[min(2.8vw,14px)]">${skill.price}</span>
          <span className="text-yellow-500 text-[min(2.8vw,14px)]">⭐ {skill.rating}</span>
        </div>

        
      </div>
    </div>
  );
};

export default Card;
