import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="avatar/levente.jpg" alt="Developer avatar" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Levente Nagy</h1>
      <p>
        Full-stack web developer. Beyond coding, you'll often find me engrossed
        in a variety of passions, including engaging in exhilarating coding
        projects, immersing myself in the world of finance through extensive
        reading, staying at the forefront of technology with a keen interest in
        web3 technologies, and honing my physical and mental prowess through
        dedicated training sessions at the gym.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emojie="💪" color="orangered" />
      <Skill skill="JavaScript" emojie="💪" color="yellow" />
      <Skill skill="Web Design" emojie="💪" color="lightblue" />
      <Skill skill="Git + GitHub" emojie="👍" color="gray" />
      <Skill skill="React" emojie="👶" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emojie}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
