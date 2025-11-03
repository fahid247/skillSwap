import React, { useEffect, useState } from "react";
import SkillCard from "./skillCard";


const SkillCards = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-500">Loading skills...</div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
      {skills.map((skill) => (
        <SkillCard key={skill.skillId} skill={skill} />
      ))}
    </div>
  );
};

export default SkillCards;
