// src/data/profile.js

import myPhoto from '../assets/my-photo.png';
import resume from '../assets/resume.pdf';

const profile = {
  firstName: 'Pankaj',
  lastName: 'Mehta',
  fullName: 'Pankaj Vinod Mehta',

  tagline: [
    'Full Stack Developer',
    'Creative Coder',
    'Lifelong Learner',
    'Team Leader',
  ],

  photo: myPhoto,

  summary:
    'Passionate and results-driven Software Engineer with hands-on experience in full-stack development, cloud platforms, and Generative AI. Skilled in React.js, ASP.NET Core, Node.js, and Python, with a strong academic background. Proven ability to lead projects, build scalable applications, and quickly learn new technologies.',

 

  
  /* -------------------- ABOUT -------------------- */
  about: {
    introduction:
      'Enthusiastic engineer with strong ability in full-stack development, cloud, and AI. Adept at building scalable apps, collaborating with teams, and quickly mastering new technologies.',

     
    /* -------------------- About Timeline -------------------- */
    timeline: [
    {
      show: true,
      type: 'education',
      label: 'HSC',
      year: '2020',
      ref: '12th',
    },
    {
      show: true,
      type: 'education',
      label: 'B.Sc',
      year: '2023',
      ref: 'B.Sc. Computer Science',
    },
    {
      show: true,
      type: 'experience',
      label: 'Trainee',
      year: '2024',
      ref: 'PureSoftSolutions',
    },
    {
      show: true,
      type: 'education',
      label: 'M.Sc',
      year: '2025',
      ref: 'M.Sc. Computer Science',
    },
    {
      show: true,
      type: 'future',
      label: 'Next',
      year: 'Ongoing',
      description: 'Open to Full Stack / AI roles',
    },
    ],

    education: [
      {
        show: true,
        title: 'M.Sc. Computer Science',
        institute: {
          name: 'MIT Arts Commerce & Science College, Alandi, Pune',
          location: 'https://maps.app.goo.gl/dnkGatKKbbqdPqtb9',
          contact: '8055350000',
          site: 'https://mitacsc.ac.in/',
        },
        university: 'Pune University',
        year: '2023 - 2025',
        grade: 'CGPA: 9.47 / 10',
      },
      {
        show: true,
        title: 'B.Sc. Computer Science',
        institute: {
          name: 'MIT Arts Commerce & Science College, Alandi, Pune',
          location: 'https://maps.app.goo.gl/dnkGatKKbbqdPqtb9',
          contact: '8055350000',
          site: 'https://mitacsc.ac.in/',
        },
        university: 'Pune University',
        year: '2020 - 2023',
        grade: 'CGPA: 9.53 / 10',
      },
      {
        show: true,
        title: '12th',
        institute: {
          name: 'Hutatma Rajguru Arts, Science & Commerce College',
          location: 'https://maps.app.goo.gl/CMzYjM5JxeHvEepcA',
          contact: '02135222099',
          site: 'http://www.hrmrajgurunagar.ac.in/',
        },
        university: 'Pune',
        year: '2020',
        grade: '67%',
      },
      {
        show: false, // hidden by default
        title: '10th',
        institute: {
          name: 'Nav Maharashtra Vidyalaya, Kharabwadi, Chakan, Pune',
          location: 'https://maps.app.goo.gl/zmVjfeAZgBqj8ze7A',
        },
        university: 'Pune',
        year: '2018',
        grade: '67%',
      },
    ],

    experience: [
      {
        show: true,
        companyName: 'PureSoftSolutions',
        location: 'Chikhli, Pune 412105',
        role: 'Associate Software Engineer Trainee',
        period: 'March 2024 - June 2025',
        responsibilities: [
          'Developed full-stack applications using React.js, ASP.NET Core, MongoDB, SQL, and Generative AI.',
          'Built responsive UIs with React + Tailwind CSS and Node.js backend services.',
          'Created APIs, stored procedures, and document generation modules.',
          'Handled deployment on IIS and production support.',
          'Led end-to-end development and acted as technical lead for a team.',
        ],
        skills: [
          'React.js',
          'ASP.NET Core',
          'MERN Stack',
          'SQL',
          'Generative AI',
          'Tailwind CSS',
        ],
      },
    ],
  },

  /* -------------------- PROJECTS -------------------- */
  projects: [
    {
      show: true,
      name: 'Shagun Suncryst',
      from: 'PureSoftSolutions',
      description:
        'Enterprise real-estate management system focusing on reports, APIs, and data-driven UI components.',
      responsibilities: [
        'Report and API creation using ASP.NET Core and SSMS',
        'Stored procedure binding and data rendering on UI',
        'Bug fixing, cross-browser compatibility, authentication handling',
        'Deployment on IIS server',
      ],
      technologies: ['ASP.NET Core', 'SSMS', 'React.js'],
    },

    {
      show: true,
      name: 'Ryngmo',
      from: 'PureSoftSolutions',
      description:
        'AI-powered calling agent platform integrating Twilio with ElevensLab.',
      responsibilities: [
        'UI development using React and Tailwind CSS',
        'Twilio integration for calling workflows',
        'Backend coordination using Node.js and Python services',
      ],
      technologies: [
        'React.js',
        'TailwindCSS',
        'Node.js',
        'Python',
        'Twilio',
        'ElevensLab',
      ],
    },

    {
      show: true,
      name: 'MeBot Platform',
      from: 'PureSoftSolutions',
      description:
        'Conversational AI assistant with document-aware responses using RAG architecture.',
      responsibilities: [
        'Designed full-stack chatbot system',
        'Integrated FastAPI with OpenAI APIs',
        'Implemented RAG for document-based querying',
        'Optimized prompts and preprocessing pipelines',
      ],
      technologies: [
        'Python',
        'FastAPI',
        'Node.js',
        'React.js',
        'Docker',
        'Postman',
      ],
    },

    {
      show: true,
      name: 'LocalM',
      from: 'Personal Project',
      description:
        'Local GenAI system for document QA and image generation using open-source LLMs.',
      responsibilities: [
        'Architected local LLM pipeline (TinyLlama & LLaMA-2)',
        'Implemented embeddings and retrieval with ChromaDB',
        'Optimized CPU inference and evaluated latency & accuracy',
      ],
      technologies: [
        'Python',
        'TinyLlama-3.2',
        'ChromaDB',
        'HuggingFace',
        'Kaggle',
      ],
      github: 'https://github.com/pvmeht/LocalM',
    },
  ],

  /* -------------------- CONTACT -------------------- */
  resume,
  email: 'pvmehta9511pm@gmail.com',
  phone: '+919511984028',
  location: 'Chakan, Pune 410501',

  socials: {
    github: 'https://github.com/pvmeht',
    linkedin: 'https://linkedin.com/in/pankaj-mehta-3339551b9',
  },

  contactDetails: {
    gmapEmbedLink:
      'https://www.google.com/maps?q=Chakan,+Pune+410501&output=embed',
    showForm: true,
  },
};

export default profile;
