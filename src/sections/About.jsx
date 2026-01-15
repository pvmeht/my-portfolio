import { FaGraduationCap, FaBriefcase, FaRocket } from "react-icons/fa";

const timeline = [
  {
    year: "2020 – 2023",
    title: "B.Sc. Computer Science",
    place: "MIT ACS College, Pune",
    description: "Strong foundation in programming, databases, and core CS concepts.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2023 – 2025",
    title: "M.Sc. Computer Science",
    place: "MIT ACS College, Pune",
    description: "Advanced CS, software engineering, AI & system design focus.",
    icon: <FaGraduationCap />,
  },
  {
    year: "Mar 2024 – Jun 2025",
    title: "Associate Software Engineer",
    place: "PureSoftSolutions",
    description:
      "Built full-stack apps using React, ASP.NET Core & SQL. Worked on SaaS products, APIs, deployments, and production support.",
    icon: <FaBriefcase />,
  },
  {
    year: "Now",
    title: "Growing Engineer",
    place: "AI • Full-Stack • Scalable Systems",
    description:
      "Exploring Generative AI, RAG, LLMs, and building real-world products with clean architecture.",
    icon: <FaRocket />,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
          Software Engineer with hands-on experience in full-stack development,
          SaaS products, and modern web technologies. I enjoy building scalable
          systems and exploring AI-driven solutions.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Dotted line */}
        <div className="absolute top-6 left-0 right-0 border-t-2 border-dashed border-gray-400 dark:border-gray-600" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {timeline.map((item, index) => (
            <div key={index} className="text-center relative">
              {/* Dot */}
              <div className="mx-auto w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 flex items-center justify-center text-blue-500 shadow-md">
                {item.icon}
              </div>

              {/* Card */}
              <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg">
                <span className="text-sm text-blue-500 font-semibold">
                  {item.year}
                </span>
                <h3 className="mt-2 font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.place}
                </p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
