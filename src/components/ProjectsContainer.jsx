import commerce from "../images/commerce.png";
import commerceLogo from "../images/commerceLogo.svg";
import linkedin from "../images/linkedin.png";
import linkedinLogo from "../images/linkedin.svg";
import world from "../images/world.png";
import worldLogo from "../images/worldLogo.svg";
import note from "../images/note.png";
import noteLogo from "../images/noteLogo.svg";
import Project from "./Project";
const projucts = [
  {
    title: "E-commerce",
    description:
      "Exclusive E-Commerce is a modern and responsive web application designed for an exceptional online shopping experience. Built with React.js and Firebase, it offers advanced functionalities like user authentication, wishlist management, and a dynamic shopping cart system.",
    projectImage: `${commerce}`,
    logo: `${commerceLogo}`,
    demo: "https://exclusive-e-commerce-dce6f.web.app/",
    git: "https://github.com/Ali-Fadel-profile/e-commerce",
  },
  {
    title: "Social media Platform",
    description:
      "LinkedIn Clone is a sociel media platform inspired by LinkedIn. Built with React.js, Redux and Firebase, the app supports features like secure user login and registration, create new posts with images and video links. The app also come with a responsive design for all secreens.",
    projectImage: `${linkedin}`,
    logo: `${linkedinLogo}`,
    demo: "https://linkedin-clone-16676.web.app/",
    git: "https://github.com/Ali-Fadel-profile/Linkedin-clone",
  },
  {
    title: "Around the world",
    description:
      "Around-The-World is a responsive web application built using React.js and Tailwind CSS. It fetches data from the REST Countries API to display comprehensive information about countries worldwide. The app offers a sleek design, supports light and dark themes, and is optimized for all device types.",
    projectImage: `${world}`,
    logo: `${worldLogo}`,
    demo: "https://worldlyways.netlify.app/",
    git: "https://github.com/Ali-Fadel-profile/around-the-world",
  },
  {
    title: "Note App",
    description:
      "The Note Application is a lightweight, feature-rich tool designed to help you organize your thoughts and tasks effortlessly. With a simple and intuitive interface, it allows users to add, edit, and delete notes seamlessly. The app also features smooth animations to enhance the user experience, making it both functional and visually appealing.",
    projectImage: `${note}`,
    logo: `${noteLogo}`,
    demo: "https://ali-fadel-profile.github.io/NoteApp/",
    git: "https://github.com/Ali-Fadel-profile/NoteApp",
  },
];

function ProjectsContainer() {
  return (
    <section id="projects" className="container px-4 py-20">
      <h2 className="text-center text-[44px] lg:text-heading-m">
        Featured Projects
      </h2>
      <p className="mb-10 text-center text-body-m">
        Here are some of the selected projects that showcase my passion for
        front-end development.{" "}
      </p>{" "}
      {projucts.map((project, index) => (
        <Project key={index} index={index} project={project} />
      ))}
      <a
        target="_blank"
        className="bg-soft-blue hover:bg-soft-blue-hover m-auto block w-60 rounded-3xl px-8 py-4 text-body-l text-white transition-colors duration-300 dark:bg-main dark:text-black dark:hover:bg-main-hover lg:mt-10"
        href="https://github.com/Ali-Fadel-profile?tab=repositories"
      >
        View All Projects &#129141;
      </a>
    </section>
  );
}

export default ProjectsContainer;
