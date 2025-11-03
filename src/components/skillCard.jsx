import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-48 object-cover"
      />
      <div className="p-2 sm:p-4">
        <h3 className="text-lg font-semibold text-black text-[min(3.5vw,18px)]">{skill.skillName}</h3>
        <p className="text-gray-600 text-sm mt-1 text-[min(3.2vw,16px)]">{skill.category}</p>
        <p className="text-gray-700 text-sm mt-2 line-clamp-2 text-[min(2.8vw,14px)]">
          {skill.description}
        </p>

        <div className="flex justify-between items-center mt-3 text-sm">
          <span className="font-medium text-blue-600 text-[min(2.8vw,14px)]">${skill.price}</span>
          <span className="text-yellow-500 text-[min(2.8vw,14px)]">⭐ {skill.rating}</span>
        </div>

        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
          <span>By {skill.providerName}</span>
          <span>{skill.slotsAvailable} slots</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
