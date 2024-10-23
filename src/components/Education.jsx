import React from "react";
import education from "./data/education.json";

const Education = () => {
  return (
    <>
      <div className="container educ" id="education">
        <h2 style={{marginBottom:"70px", textAlign:"left",backgroundColor:"black",padding:"20px"}}>Education</h2>
        {education.map((data) => {
          return (
            <>
              <div key={data.id} className="edu-item" data-aos="zoom-in-up" data-duration="1000">
                <div className="left">
                  <img src={`/assets/${data.imageUrl}`} alt="university logo" />
                </div>
                <div className="right">
                  <h3>
                    {data.degree} from <i>{data.institution}</i>
                  </h3>
                  <h5>Year : {data.year} </h5>
                  <h4>
                    CPGA :{" "}
                    <i>
                      {" "}
                      <b>{data.CGPA}</b>
                    </i>
                  </h4>
                  <h5><b><i>{data.extradata}</i></b></h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;
