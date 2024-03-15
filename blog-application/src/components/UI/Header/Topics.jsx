import {FaBookOpenReader} from "react-icons/fa6";
import Topic from "./Topic.jsx";

const techTopics = [
    "Artificial Intelligence in Healthcare",
    "Quantum Computing Applications",
    "Blockchain Technology in Supply Chain Management",
    "Augmented Reality in Education",
    "Internet of Things (IoT) Security Challenges",
    "5G Network Evolution",
    "Cloud Computing Trends",
    "Cybersecurity Threats and Mitigation Strategies",
    "Data Science in Marketing Analytics",
    "Robotics and Automation in Manufacturing",
    "Virtual Reality Entertainment Experiences",
    "Edge Computing for IoT Devices",
    "Machine Learning Algorithms",
    "Cryptocurrency Regulations",
    "Big Data Analytics in Retail",
    "Biometric Authentication Systems",
    "Autonomous Vehicles Technology",
    "Natural Language Processing Applications",
    "Wearable Technology Innovations",
    "E-commerce Platforms and Innovations",
    "Mobile App Development Trends",
    "Open Source Software Communities",
    "Genetic Algorithms in Optimization Problems",
    "Deep Learning Frameworks Comparison",
    "3D Printing in Prototyping",
    "Human-Computer Interaction Principles",
    "Renewable Energy Technologies",
    "Internet Privacy Concerns",
    "Graph Databases for Social Networks",
    "Space Exploration Technologies",
    "Remote Work Collaboration Tools",
    "Neural Networks in Image Recognition",
    "Virtual Assistants in Daily Life",
    "Dark Web and Cybercrime",
    "Self-Driving Cars Safety Challenges",
    "Augmented Reality for Retail Shopping",
    "Quantum Cryptography Advancements",
    "Artificial General Intelligence Prospects",
    "Cloud Gaming Platforms",
    "IoT in Agriculture",
    "Health Tech Innovations",
    "Blockchain for Digital Identity Management",
    "Chatbot Applications in Customer Service",
    "Machine Translation Technologies",
    "Data Visualization Tools",
    "Biotechnology Breakthroughs",
    "Smart Cities Infrastructure",
    "Cybersecurity in Smart Homes",
    "Augmented Reality in Architecture",
    "Speech Recognition Systems"
];

function Topics() {
    return (
        <div className={"w-full h-full flex flex-col gap-y-4 overflow-auto border-b-2"}>
            <p className={"flex flex-row items-center xl:text-xl lg:text-lg md:text-md sm:text-sm gap-x-4 px-2"}>
                <FaBookOpenReader/> Available topics
            </p>
            <div className={"w-full h-full overflow-auto"}>
                {techTopics.map(t => <Topic name={t} key={t}/>)}
            </div>
        </div>
    );
}

export default Topics;