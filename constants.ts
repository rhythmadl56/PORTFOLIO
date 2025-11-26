import { ProfileData } from './types';

export const RESUME_DATA: ProfileData = {
  name: "Rhythm",
  tagline: "CSE Student | Graphic & UI Designer",
  summary: "I’m Rhythm, a Computer Science student with a strong interest in software development, problem-solving, and cybersecurity. I’m currently building my skills in Java, Data Structures & Algorithms, and Web Development, while exploring new technologies through personal projects. Beyond coding, I also enjoy graphic design, which helps me bring a creative perspective into my projects and makes me pay attention to detail in user interfaces and overall design. My goal is to keep sharpening my fundamentals, gain real-world experience through internships, and eventually grow into a skilled software engineer who builds solutions that matter.",
  contact: {
    email: "rhythmadl56@gmail.com",
    linkedin: "https://www.linkedin.com/in/rhythmadl",
    github: "https://github.com/rhythmadl56",
    location: "Chandigarh, India"
  },
  skills: [
    {
      title: "Technical Skills",
      skills: ["Java", "Data Structures & Algorithms", "Web Development", "Artificial Intelligence (AI)", "DBMS"]
    },
    {
      title: "Design & Tools",
      skills: ["Graphic Design", "UI Design", "PC & Mac Platforms"]
    }
  ],
  experience: [
    {
      company: "GeeksForGeeks Campus Body - CUIET",
      role: "Graphics Executive",
      duration: "October 2025 - Present (2 months)",
      location: "India",
      description: "Creating visual assets and managing graphic design requirements for the campus body."
    },
    {
      company: "DGIT Squad",
      role: "Graphic Design Artist",
      duration: "October 2025 - November 2025 (2 months)",
      location: "India"
    },
    {
      company: "Upwork",
      role: "Freelance Graphic Designer",
      duration: "August 2024 - January 2025 (6 months)",
      location: "India",
      description: "Delivering high-quality graphic design solutions for diverse clients."
    }
  ],
  education: [
    {
      institution: "Chitkara University, Punjab",
      degree: "Bachelor of Engineering - BE, Computer Science",
      duration: "2024 - 2028"
    },
    {
      institution: "Aggarsain Public School - India",
      degree: "High School, PCM",
      duration: ""
    }
  ],
  certifications: [
    { name: "Tata - Cybersecurity Analyst Job Simulation" },
    { name: "Introduction to Cybersecurity" },
    { name: "Mastercard - Cybersecurity Job Simulation" },
    { name: "Introduction to Modern AI" }
  ]
};

export const SYSTEM_INSTRUCTION = `You are an AI assistant for Rhythm's personal portfolio website. 
Your role is to answer questions about Rhythm professionally, based ONLY on the following resume data. 
Be concise, friendly, and helpful. If a user asks something not in the resume, politely say you don't have that information.

RESUME DATA:
${JSON.stringify(RESUME_DATA, null, 2)}
`;

export const SUGGESTED_QUESTIONS = [
  "What are Rhythm's technical skills?",
  "Tell me about his design experience",
  "Where is he studying?",
  "How can I contact Rhythm?"
];