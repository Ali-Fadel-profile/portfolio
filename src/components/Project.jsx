import { useInView } from "react-intersection-observer";

function Project({ project, index }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className="mb-10 flex flex-col items-center gap-8 lg:flex-row lg:gap-16"
    >
      <div
        className={`${
          inView
            ? index % 2 === 0
              ? "animate-slideInRight"
              : "animate-slideInLeft"
            : ""
        } bg-light-gray rounded-md px-5 py-10 transition-all duration-1000 dark:bg-very-dark-gray lg:w-1/2 ${
          index % 2 === 0 ? "lg:order-1" : ""
        }`}
      >
        <img
          src={project.projectImage}
          alt="project Image"
          className="mx-auto max-w-full rounded-md lg:max-w-md"
        />
      </div>
      <div
        className={`${
          inView
            ? index % 2 === 0
              ? "animate-slideInLeft"
              : "animate-slideInRight"
            : ""
        } mb-16 transition-all duration-1000 lg:w-1/2`}
      >
        <div className="flex items-center gap-4">
          {" "}
          <img src={project.logo} alt="project logo" className="h-8 w-8" />{" "}
          <h2 className="text-heading-s">{project.title}</h2>
        </div>
        <p className="my-4 text-body-l">{project.description}</p>
        <div className="flex items-center gap-4">
          <a
            href={project.demo}
            target="_blank"
            className="text-soft-blue hover:text-soft-blue-hover text-body-m underline dark:text-main dark:hover:text-main-hover"
          >
            Live Demo &#129141;
          </a>
          <a
            target="_blank"
            href={project.git}
            className="text-soft-blue hover:text-soft-blue-hover flex items-center gap-2 text-body-m underline dark:text-main dark:hover:text-main-hover"
          >
            View on Github &#129141;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
