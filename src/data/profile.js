// src/data/profile.js

import myPhoto from '../assets/my-photo.png'; // Place your actual photo here
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
    "Passionate and results-driven Software Engineer with hands-on experience in full-stack development, cloud platforms, and Generative AI. Skilled in React.js, ASP.NET Core, Node.js, and Python, with a strong academic background. Proven ability to lead projects, build scalable applications, and quickly learn new technologies. Enthusiastic about solving real-world problems through innovative and efficient software solutions.",
  about: {
    introduction:
      "Enthusiastic engineer with strong ability in full-stack development, cloud, and AI. Adept at building scalable apps, collaborating with teams, and quickly mastering new technologies.",
    education: [
      {
        title: 'M.Sc. Computer Science',
        institute: {name:'MIT Arts Commerce & Science College, Alandi, Pune',
          location:'https://maps.app.goo.gl/dnkGatKKbbqdPqtb9',
          contact:'8055350000',
          site: 'https://mitacsc.ac.in/'
        },
        university: 'Pune University',
        year: '2023-2025',
        grade: 'CGPA: 9.47 / 10',
      },
      {
        title: 'B.Sc. Computer Science',
        institute: {name:'MIT Arts Commerce & Science College, Alandi, Pune',
          location:'https://maps.app.goo.gl/dnkGatKKbbqdPqtb9',
          contact:'8055350000',
          site: 'https://mitacsc.ac.in/'
        },
        university: 'Pune University',
        year: '2020-2023',
        grade: 'CGPA: 9.53 / 10',
      },
      {
        title: '12th',
        institute: {name:'Hutatma Rajguru Arts, Science & Commerce College',
          location:'https://maps.app.goo.gl/CMzYjM5JxeHvEepcA',
          contact:'02135222099',
          site: 'http://www.hrmrajgurunagar.ac.in/'
        },
        university: 'Pune',
        year: '2020', 
        grade: '67%',
      },
      {
        title: '10th',
        institute: {name:'Nav Maharashtra Vidyalaya, Kharabwadi, Chakan, Pune ',
          location:'https://maps.app.goo.gl/zmVjfeAZgBqj8ze7A',
          contact:'',
          site: ''
        },
        university: 'Pune',
        year: '2018', 
        grade: '67%',
      },
    ],
    experience: [
      {
        companyName: 'PureSoftSolutions',
        location: 'Chikhli, Pune 412105',
        role: 'Associate Software Engineer Trainee',
        period: 'March 2024 - June 2025',
        responsibilities: [
          'Developed full-stack applications using React.js, ASP.NET Core, MongoDB, SQL, and Generative AI.',
          'Built responsive UIs with React + Tailwind CSS and set up Node.js backend servers.',
          'Wrote APIs, stored procedures, and implemented Excel/Doc generation via backend code (ASP .Net).',
          'Handled deployment and maintained production-ready code.',
          'Led the end-to-end dev cycle and acted as Technical Lead for a team, ensuring timely delivery and team coordination.',
        ],
        skills: [
          'React.js',
          'ASP.NET Core',
          'Node.js',
          'MongoDB',
          'SQL',
          'Generative AI',
          'Tailwind CSS',
          'API Development',
          'Deployment',
        ],
      },
    ],
    skills: {
      languages: ['C', 'C++', 'Java', 'Python', 'PHP', 'JavaScript'],
      web: ['HTML', 'CSS', 'Sass', 'Tailwind CSS', 'Bootstrap'],
      frameworks: ['Node.js', 'React.js', 'ASP.NET Core'],
      databases: ['SQL Server', 'MySQL', 'MongoDB', 'Neo4j', 'Firebase'],
      api_and_integration: ['REST APIs', 'Twilio', 'Postman'],
      cloud_and_tools: [
        'Docker',
        'Git',
        'GitHub',
        'GitHub Actions',
        'n8n',
        'AWS',
        'GCP',
        'Visual Studio 2022',
        'VS Code',
        'Figma',
      ],
      ai: [
        'Generative AI',
        'Hugging Face (Transformers)',
        'Local LLM Setup',
      ],
    },
    certifications: [
      'Udemy Certificate: JAVA and JavaScript',
      'Developer Experience Virtual Program',
      'Basic Knowledge Certificates: C, CPP, HTML, Arduino, Latex, Linux',
      'Python and Machine Learning',
      'Basic Web Development With HTML, CSS, JS',
      'Fundamentals of Cyber Security',
    ],
  },
  projects: [
    {
      name: 'Ryngmo',
      from: 'PureSoftSolutions',
      description:
        'Created Frontend Pages and integrated Twilio with ElevensLab to build a Calling Agent.',
      responsibilities: [
        'Frontend development in React',
        'Twilio integration for calling features',
        'Worked with ElevensLab platform',
      ],
      technologies: ['React.js', 'TailwindCSS', 'Node.js', 'Python', 'ElevensLab', 'Twilio'],
    },
    {
      name: 'Shagun Suncryst',
      from: 'PureSoftSolutions',
      description:
        'Worked on report/API creation using ASP .NET + SSMS, binding stored procedures and displaying records on UI.',
      responsibilities: [
        'API Creation',
        'Frontend changes',
        'Bug fixing',
        'Deployment on IIS',
      ],
      technologies: ['ASP.NET Core', 'SSMS', 'React.js'],
    },
    {
      name: 'MeBot Platform',
      from: 'PureSoftSolutions',
      description:
        'Developed a fullstack AI chatbot platform, integrating RAG and ChatGPT via FastAPI and Swagger.',
      responsibilities: [
        'Frontend and backend design',
        'API binding and integration',
        'Implemented RAG via Swagger FastAPI',
      ],
      technologies: [
        'Python',
        'Express.js',
        'Node.js',
        'React.js',
        'Postman',
        'GitHub',
        'Docker',
      ],
    },
    {
      name: 'LocalM',
      from: 'Personal Project',
      description:
        'Built a GenAI app for students—document QA and image generation. Integrated RAG pipeline for document QA/image captioning and support for LLMs.',
      responsibilities: [
        'Backend development with FastAPI',
        'LLM integration (TinyLlama, LLaMA-2)',
        'Set up ChromaDB, HuggingFace, and document processing flows',
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
  resume: resume,
  email: 'pvmehta9511pm@gmail.com',
  phone: '9511984028',
  location: 'Chakan, Pune 410501',
  socials: {
    github: 'https://github.com/pvmeht',
    linkedin: 'https://linkedin.com/in/pankaj-mehta-3339551b9',
  },
  contactDetails: {
    gmapEmbedLink:
      'https://www.google.com/maps?q=Chakan,+Pune+410501&output=embed', // for iframe src
    showForm: true,
    smtpService: 'YOUR_SMTP_SERVICE', // e.g., EmailJS/Nodemailer config
  },
};

export default profile;
