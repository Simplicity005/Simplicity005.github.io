import React from "react";

const Work = () => {
  return (
    <section className="project-container" id="work">
      <div className="project-inner" id="project-inner">
        <h1 className="project-title">My Work</h1>
        <div className="carousel">
          <div className="card active">
            <div
              className="card-bg"
              style={{
                backgroundImage:
                  'url("../assets/images/Optimization_Modelling.png")',
              }}
            ></div>
            <div className="card-content">
              <img
                className="card-img"
                src="../assets/images/Optimization_Modelling.png"
                alt="Startup Hub Optimization"
              />
              <div className="text-content">
                <h2 className="card-title">Startup Hub Optimization</h2>
                <p className="card-details">
                  A multi-objective optimization research project using Python
                  and MATLAB to determine the most accessible and cost-effective
                  placements for startup hubs across Bangalore.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-bg"
              style={{
                backgroundImage:
                  'url("../assets/images/Probabilistic_Modelling.png")',
              }}
            ></div>
            <div className="card-content">
              <img
                className="card-img"
                src="../assets/images/Probabilistic_Modelling.png"
                alt="Fake News Propagation"
              />
              <div className="text-content">
                <h2 className="card-title">Fake News Propagation</h2>
                <p className="card-details">
                  Probability-based research modeling the spread of
                  misinformation in social networks using stochastic models and
                  branching processes.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-bg"
              style={{
                backgroundImage: 'url("../assets/images/ROS_Robotics.jpg")',
              }}
            ></div>
            <div className="card-content">
              <img
                className="card-img"
                src="../assets/images/ROS_Robotics.jpg"
                alt="IoT Automation"
              />
              <div className="text-content">
                <h2 className="card-title">IoT Automation Systems</h2>
                <p className="card-details">
                  Hardware hacking projects including a laser security grid,
                  automated parking systems, and sensor-driven logic using
                  Arduino and ESP32 microcontrollers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
