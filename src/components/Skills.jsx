import React from "react";
import skills from "./data/skill.json";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h2  style={{marginBottom:"70px", marginTop:"50px",textAlign:"left",backgroundColor:"black",padding:"20px"}}>SKILLS</h2>

      {/* Soft Skills Section */}
      <div className="skills-section">
        <h2>Soft Skills</h2>
        <div className="items" >
          {skills.softSkills.map((data) => (
            <div className="item" key={data.id} data-aos="flip-right" data-duration="1000">
              <img src={`./assets/${data.imageUrl}`} alt={data.name} />
              <h3>{data.name}</h3>
            </div>
          ))}
        </div>
      </div>


      <div className="skills-section">
        <h2>Technical Skills</h2>
        <div className="items" data-aos="flip-right" data-duration="1000">
          {skills.technicalSkills.map((data) => (
            <div className="item" key={data.id}>
              <img src={`./assets/${data.imageUrl}`} alt={data.name} />
              <h3>{data.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
