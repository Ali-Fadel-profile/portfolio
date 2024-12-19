import image from "../images/personalImage.png";

function About() {
  return (
    <div
      id="about"
      className="container mx-auto mb-20 mt-36 flex flex-col-reverse items-center justify-between gap-8 px-4 lg:flex-row"
    >
      {/* Left Section */}
      <div className="flex flex-col items-start space-y-6 text-center lg:w-1/2 lg:text-start">
        <h1 className="mx-auto text-[30px] md:text-heading-l lg:mx-0">
          I'm A Passionate <br /> Frontend Developer{" "}
        </h1>
        <p className="trans normal-case sm:text-body-l">
          My name is Ali Fadel a passionate React Developer with over 30
          successful projects,My focus is on delivering high-performance,
          visually appealing, and fully responsive web applications that
          maximize ROI and provide exceptional user experiences for business
          owners.
        </p>
        <div className="flex w-full items-center justify-center space-x-4 lg:justify-start">
          <a
            href="/puplic/Ali-Fadel-Resume.pdf"
            download="Ali-Fadel-Resume.pdf"
            className="flex items-center rounded-3xl bg-soft-blue px-6 py-2 text-white transition-colors duration-300 hover:bg-soft-blue-hover dark:bg-main dark:text-black dark:hover:bg-main-hover"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-soft-blue-hover dark:hover:text-main-hover"
          >
            Say Hi
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-10/12 items-center justify-end sm:w-auto lg:w-1/2">
        <img src={image} alt="Ali Fadel" className="rounded-full" />
      </div>
    </div>
  );
}

export default About;
