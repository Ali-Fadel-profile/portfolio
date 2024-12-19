import js from "../images/javascript.svg";
import git from "../images/git.svg";
import firebase from "../images/firebase.svg";
import vite from "../images/vite.svg";
import figma from "../images/figma.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import sass from "../images/icon-sass.svg";
import tailwind from "../images/icon-tailwindcss.svg";
import react from "../images/react.svg";
import material from "../images/material-ui.svg";
import redux from "../images/redux.svg";
function Skills() {
  const skills = [
    { name: "Html", image: `${html}` },
    { name: "Css", image: `${css}` },
    { name: "JavaScript", image: `${js}` },
    { name: "React", image: `${react}` },
    { name: "Redux", image: `${redux}` },
    { name: "Firebase", image: `${firebase}` },
    { name: "Vite", image: `${vite}` },
    { name: "Tailwindcss", image: `${tailwind}` },
    { name: "Sass", image: `${sass}` },
    { name: "Material-Ui", image: `${material}` },
    { name: "GitHub", image: `${git}` },
    { name: "Figma", image: `${figma}` },
  ];

  return (
    <div id="skills" className="container mx-auto p-4 py-20">
      {/* Section Title */}
      <h2 className="text-center text-heading-m">Skills</h2>
      <p className="text-center text-body-m">
        A list of my technical expertise in front-end development.
      </p>

      {/* Skills Grid */}
      <div className="mt-10 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="teext-center rounded-md bg-white p-4 dark:bg-very-dark-gray"
          >
            <div>
              {" "}
              <img
                src={skill.image}
                alt="skill image"
                className="mx-auto h-16 w-16 md:h-24 md:w-24"
              />
            </div>{" "}
            <h3 className="mt-4 text-body-l">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
