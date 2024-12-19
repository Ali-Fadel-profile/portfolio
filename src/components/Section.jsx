import { useInView } from "react-intersection-observer";

const Section = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`w-full transition-opacity duration-[1500ms] ${
        inView ? "animate-fadeIn opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
