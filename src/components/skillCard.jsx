import React from "react";
import { useNavigate } from "react-router";


const SkillCard = ({ skill }) => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate(`detailedSkill/${skill.skillId}`)
    }
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-48 object-cover"
      />
      <div className="p-2 sm:p-4">
        <h3 className="text-lg font-semibold text-black text-[min(3.5vw,18px)]">{skill.skillName}</h3>
        

        <div className="flex justify-between items-center mt-3 text-sm">
          <span className="font-medium text-blue-600 text-[min(2.8vw,14px)]">${skill.price}</span>
          <span className="text-yellow-500 text-[min(2.8vw,14px)]">⭐ {skill.rating}</span>
        </div>

        <div className="flex items-center mt-2">
            <button onClick={handleClick} className="btn bg-[#ffd793] text-[#703B3B] border-none text-[min(3vw,14px)] ">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
