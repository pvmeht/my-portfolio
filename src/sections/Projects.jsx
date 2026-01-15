const projects = [
  {
    name: "Shagun Suncryst",
    org: "PureSoftSolutions",
    description:
      "Enterprise real-estate management system focused on reports, APIs, and backend-heavy workflows.",
    points: [
      "Designed and implemented APIs using ASP.NET Core.",
      "Created complex reports using SQL Server Stored Procedures.",
      "Bound backend data to UI components and optimized queries.",
      "Handled bug fixes, deployment on IIS, and production support.",
      "Worked on cross-browser compatibility and authentication handling.",
    ],
    tech: ["ASP.NET Core", "SSMS", "React.js", "IIS"],
  },
  {
    name: "Ryngmo",
    org: "PureSoftSolutions",
    description:
      "AI-powered calling agent platform integrating telephony with conversational intelligence.",
    points: [
      "Built responsive UI using React and Tailwind CSS.",
      "Integrated Twilio for voice calling workflows.",
      "Connected ElevensLab for AI-driven call handling.",
      "Collaborated across frontend and backend services.",
    ],
    tech: ["React.js", "TailwindCSS", "Node.js", "Python", "Twilio", "ElevensLab"],
  },
  {
    name: "MeBot Platform",
    org: "PureSoftSolutions",
    description:
      "Conversational AI platform enabling document-based question answering with contextual memory.",
    points: [
      "Designed and developed an AI assistant using FastAPI and OpenAI APIs.",
      "Implemented RAG (Retrieval-Augmented Generation) for accurate document querying.",
      "Optimized text preprocessing pipelines and prompt templates.",
      "Built and tested APIs using Swagger and Postman.",
      "Dockerized services and managed source control with GitHub.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Node.js",
      "React.js",
      "Docker",
      "Postman",
      "GitHub",
    ],
  },
  {
    name: "LocalM",
    org: "Personal Project",
    description:
      "Local GenAI system for document-based QA and content generation using open-source LLMs.",
    points: [
      "Architected a local LLM pipeline using TinyLlama-3.2B and LLaMA-2-7B.",
      "Integrated ChromaDB for embeddings and semantic retrieval.",
      "Implemented CPU-optimized inference pipelines.",
      "Evaluated performance for response latency and accuracy.",
    ],
    tech: ["Python", "TinyLlama-3.2", "ChromaDB", "HuggingFace", "Kaggle"],
    github: "https://github.com/pvmeht/LocalM",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-white dark:bg-gray-950"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
          Real-world projects spanning full-stack development, enterprise
          systems, and Generative AI applications.
        </p>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800"
          >
            {/* Title */}
            <div className="mb-3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                {project.org}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Responsibilities */}
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-4">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub */}
            {project.github && (
              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
