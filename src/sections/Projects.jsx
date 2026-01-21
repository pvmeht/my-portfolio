import profile from '../data/profile';

const Projects = () => {
  const projects = profile.projects.filter(p => p.show);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="max-w-3xl mx-auto text-lg opacity-80">
          Real-world projects spanning full-stack development, enterprise systems,
          and Generative AI.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-sm opacity-70">{project.from}</p>
            </div>

            <p className="text-sm opacity-90 mb-6">
              {project.description}
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm mb-6 opacity-85">
              {project.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-sm text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
