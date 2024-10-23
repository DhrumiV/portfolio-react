import React from "react";
import project from "./data/projects.json";

const Projects = () => {
    return (
        <div className="container project " id="projects">
            <h2 style={{marginBottom:"70px", marginTop:"50px",textAlign:"left",backgroundColor:"black",padding:"20px"}}>PROJECTS</h2>
            <div className="row d-flex justify-content-center align-content-center mx-5" style={{width:"80%"}}>
                {project.map((data) => (
                    <div key={data.id} className="col-md-5 col-lg-5 col-sm-1 mx-5  my-4" >
                        <div className="card bg-dark text-light" style={{ width: "30rem", textAlign: "center" , border:"1px solid yellow", borderRadius:"15px", boxShadow:"2px 2px 30px 5px rgb(255, 255, 172)" }} data-aos="flip-right" data-duration="5000" >
                            <div className="img d-flex justify-content-center align-content-center p-3 ">
                                <img
                                    src={`/assets/${data.projectImage}`}
                                    className="card-img-top"
                                    alt={data.title} style={{ width: "250px", height: "200px",
                                        border:"2px solid rgb(115, 153, 99)", borderRadius:"20px"
                                     }} />
                            </div>
                            <h4>{data.projectName}</h4>
                            <div className="card-body  text-center  ">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.description}</p>
                                <p className="card-text">Technologies Used : <b><i>{data.technologiesUsed.join(" , ")}</i></b> </p>
                                <a href={data.projectLink} className="btn btn-warning">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
