const portfolioData = {
  personalInfo: {
    name: "Suryaprakash Manikandasamy",
    title: "Full Stack Developer & UI/UX Designer",
    titles: ["Full Stack Developer", "UI/UX Designer", "Software Engineer"],
    email: "suryaprakashmanikandan2107@gmail.com",
    phone: "+91 8344663489",
    location: "Pollachi, Tamil Nadu, India",
    bio: "I'm a passionate Full Stack Developer and UI/UX Designer with a keen eye for creating intuitive, user-centric digital experiences. With expertise in modern web technologies and a strong foundation in software engineering, I transform ideas into responsive, high-performance applications. I thrive on solving complex problems and continuously learning new technologies to deliver impactful solutions.",
    aboutMe: [
      "I am a highly motivated Full Stack Developer and UI/UX Designer with a strong foundation in software engineering.",
      "Currently pursuing my Master of Computer Applications at Dr. Mahalingam College of Engineering and Technology, Pollachi.",
      "I specialize in building modern web applications using cutting-edge technologies and creating seamless user experiences."
    ],
    resume: "/images/resume.pdf",
    profilePhoto: "/images/profile.jpg",
    avatar: "SP"
  },

  socialLinks: {
    github: "https://github.com/Surya-Manikandan",
    linkedin: "https://www.linkedin.com/in/suryaprakash-manikandasamy-467436296",
    email: "suryaprakashmanikandan2107@gmail.com"
  },

  education: [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
      year: "2025 – 2027",
      score: "CGPA – 7.4",
      icon: "graduation"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Information Technology",
      institution: "Nallamuthu Gounder Mahalingam College, Pollachi",
      year: "May 2025",
      score: "67%",
      icon: "graduation"
    },
    {
      id: 3,
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Vidya Nethrra Matric Hr. Sec. School, Gomangalampudhur, Pollachi",
      year: "May 2022",
      score: "352/59%",
      icon: "school"
    },
    {
      id: 4,
      degree: "SSLC (Secondary School Leaving Certificate)",
      institution: "Vidya Nethrra Matric Hr. Sec. School, Gomangalampudhur, Pollachi",
      year: "May 2020",
      score: "289/59%",
      icon: "school"
    }
  ],

  technicalSkills: [
    { name: "HTML", level: 85, category: "frontend" },
    { name: "CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 75, category: "frontend" },
    { name: "React", level: 70, category: "frontend" },
    { name: "Node.js", level: 65, category: "backend" },
    { name: "Express.js", level: 60, category: "backend" },
    { name: "MongoDB", level: 65, category: "backend" },
    { name: "MySQL", level: 70, category: "backend" },
    { name: "Python", level: 70, category: "language" },
    { name: "C Programming", level: 75, category: "language" },
    { name: "Java", level: 65, category: "language" }
  ],

  softSkills: [
    "Adaptability",
    "Creativity",
    "Communication",
    "Quick Learner",
    "Time Management",
    "Teamwork",
    "Problem Solving"
  ],

  toolsTechnologies: [
    "Figma",
    "Adobe Photoshop",
    "VS Code",
    "Git",
    "GitHub",
    "Power BI",
    "AWS"
  ],

  programmingLanguages: ["C", "Python", "Java", "JavaScript"],

  projects: [
    {
      id: 1,
      name: "Future Cancer Case Prediction and Visualization",
      description: "Developing a future cancer case prediction model using clinical data and integrating the results into Power BI for interactive data visualization and analysis. Enables easy comparison of patient data using dynamic charts and filters.",
      technologies: ["Machine Learning", "Power BI", "Python", "Data Visualization"],
      features: [
        "Predictive modeling using clinical data",
        "Interactive Power BI dashboards",
        "Dynamic chart and filter comparisons",
        "Data-driven insights for healthcare"
      ],
      github: "https://github.com/Surya-Manikandan",
      live: "",
      image: "/images/project-cancer.jpg",
      status: "Completed"
},
    {
      id: 2,
      name: "Poultry Management System",
      description: "A Windows-based application designed to automate and streamline poultry farm operations. Manages chick batch tracking, feed and medicine inventory, delivery weight calculation, and payment processing. Built with VB.NET and MS-SQL Server.",
      technologies: ["VB.NET", "MS-SQL Server", "ADO.NET", "Windows Forms"],
      features: [
        "Track batch details — chick breed, vaccinations, health status, growth tracking",
        "Feed and medicine issue management with stock tracking",
        "Delivery module with automated weight calculation and pricing",
        "Payment module with outstanding invoice tracking"
      ],
      github: "https://github.com/Surya-Manikandan",
      live: "",
      image: "",
      status: "Completed"
    },
  ],

  internship: {
    company: "NextSkill Technologies",
    location: "Coimbatore",
    
    duration: "2 Weeks",
    workDone: [
      "Worked on full stack web development projects using MERN stack",
      "Developed responsive frontend components with React.js",
      "Built RESTful APIs using Node.js and Express.js",
      "Managed databases using MongoDB",
      "Collaborated with team members on project development"
    ]
  },

  certifications: [
    {
      id: 1,
      title: "Cloud Foundations - Training Badge",
      issuer: "AWS Academy",
      date: "",
      image: "/images/cert-aws.jpg",
      link: ""
    },
    {
      id: 2,
      title: "Java with DSA",
      issuer: "GUVI",
      date: "",
      image: "/images/cert-java.jpg",
      link: ""
    },
    {
      id: 3,
      title: "GenAI & Prompt Engg for QA, Automation & Performance Testing",
      issuer: "Infosys Springboard",
      date: "",
      image: "/images/cert-genai.jpg",
      link: ""
    },
    {
      id: 4,
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      date: "July 29, 2026",
      image: "",
      link: "https://verify.onwingspan.com"
    }
  ],

  achievements: [
    {
      id: 1,
      title: "Overall Championship - Non-Technical Event",
      organization: "SNMV College",
      description: "Won Overall Championship in a non-technical event at SNMV College, as part of a team.",
      icon: "trophy"
    }
  ],

  extracurricular: [
    {
      title: "COMPYOUTH Member",
      description: "Serving as a member of COMPYOUTH, the MCA Department Association."
    }
  ],

  languages: [
    { name: "Tamil", level: "Native", proficiency: 100 },
    { name: "English", level: "Professional", proficiency: 80 }
  ],

  hobbies: ["Music", "Coding", "Movies","Playing", "Learning New Technologies"],

  areaOfInterest: [
    "UI & UX Designing (Figma)",
    "Web Development (Frontend, Web Framework)"
  ],

  theme: {
    primary: "#3b82f6",
    secondary: "#f59e0b",
    accent: "#8b5cf6",
    mode: "light",
    glassmorphism: true,
    gradientBackgrounds: true
  }
};

export default portfolioData;

