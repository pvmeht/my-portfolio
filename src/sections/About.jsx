import profile from '../data/profile';

const About = () => {
  const { introduction, education, experience } = profile.about;

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg opacity-80">
          {introduction}
        </p>
      </div>

      {/* ===== Education Timeline ===== */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-2xl font-semibold mb-10 text-center">
          Education Roadmap
        </h3>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Dotted line */}
          <div className="absolute md:top-1/2 md:left-0 md:right-0 md:h-0.5 border-t-2 border-dashed border-gray-400 dark:border-gray-600 hidden md:block" />

          {education
            .filter(item => item.show)
            .map((edu, idx) => (
              <div
                key={idx}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-64 text-center z-10"
              >
                {/* Dot */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900" />

                <h4 className="font-semibold text-lg">{edu.title}</h4>
                <p className="text-sm opacity-70">{edu.year}</p>
                <p className="text-sm mt-2">{edu.institute.name}</p>
                <p className="text-xs opacity-60 mt-1">{edu.grade}</p>
              </div>
            ))}
        </div>
      </div>

      {/* ===== Experience ===== */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-10 text-center">
          Professional Experience
        </h3>

        {experience
          .filter(exp => exp.show)
          .map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h4 className="text-xl font-bold">{exp.role}</h4>
                <span className="text-sm opacity-70">{exp.period}</span>
              </div>

              <p className="font-medium mb-4">
                {exp.companyName} · {exp.location}
              </p>

              <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default About;
