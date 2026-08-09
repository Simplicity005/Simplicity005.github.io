import optimizationImage from "../assets/images/Optimization_Modelling.png";
import probabilisticImage from "../assets/images/Probabilistic_Modelling.png";
import roboticsImage from "../assets/images/ROS_Robotics.jpg";

export const projects = [
  {
    id: 1,
    title: "Startup Hub Optimization",
    description:
      "A multi-objective optimization research project using Python and MATLAB to determine the most accessible and cost-effective placements for startup hubs across Bangalore.",
    image: optimizationImage,
    tags: ["Python", "MATLAB", "Optimization"],
  },
  {
    id: 2,
    title: "Fake News Propagation",
    description:
      "Probability-based research modeling the spread of misinformation in social networks using stochastic models and branching processes.",
    image: probabilisticImage,
    tags: ["Probability", "Stochastic Models", "Research"],
  },
  {
    id: 3,
    title: "IoT Automation Systems",
    description:
      "Hardware hacking projects including a laser security grid, automated parking systems, and sensor-driven logic using Arduino and ESP32 microcontrollers.",
    image: roboticsImage,
    tags: ["Arduino", "ESP32", "IoT"],
  },
];
