// import { defineStore } from 'pinia';    
// import { ref } from 'vue';
// export const useSkillsStore = defineStore('skills', () => {
//   const skills = ref([
//     { name: 'JavaScript', level: 'Advanced' },
//     { name: 'Vue.js', level: 'Intermediate' },
//     { name: 'HTML & CSS', level: 'Advanced' },
//     { name: 'Node.js', level: 'Intermediate' },
//     { name: 'Python', level: 'Beginner' },
//   ]);

//   function addSkill(skill) {
//     skills.value.push(skill);
//   }

//   function removeSkill(skillName) {
//     skills.value = skills.value.filter(skill => skill.name !== skillName);
//   }

//   return {
//     skills,
//     addSkill,
//     removeSkill,
//   };
// });

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePortfolioStore = defineStore('portfolio', () => {
  // Personal Info
  const personalInfo = ref({
    name: 'Sathvik REDDY',
    email: 'sathvik@example.com',
    phone: '+1 123 456 7890',
    linkedin: 'https://linkedin.com/in/sathvikreddy',
    github: 'https://github.com/sathvikreddy',
    location: 'United States'
  });

  // Summary
  const summary = ref(
    "Software Engineer with 1 year experience in Java Full Stack development. Skilled in Spring Boot, Vue.js, AWS, and cloud technologies. Passionate about building scalable web apps and AI integration."
  );

  // Skills
  const skills = ref([
     { name: 'Java', level: 'Advanced' },
    { name: 'Spring Boot', level: 'Advanced' },
    { name: 'Hibernate', level: 'Intermediate' },
    { name: 'Microservices', level: 'Advanced' },
    { name: 'REST APIs', level: 'Advanced' },
    { name: 'JWT Authentication', level: 'Intermediate' },
    { name: 'Apache Kafka & JMS', level: 'Intermediate' },
    { name: 'HTML, CSS, JavaScript', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Angular', level: 'Intermediate' },
    { name: 'React.js', level: 'Intermediate' },
    { name: 'Vue.js', level: 'Intermediate' },
    { name: 'MySQL', level: 'Advanced' },
    { name: 'PostgreSQL', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'AWS (EC2, S3, RDS)', level: 'Intermediate' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'Jenkins', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'JIRA & Postman', level: 'Intermediate' },
  ]);

  // Projects
  const projects = ref([
    {
      title: 'Cloud-based Web Application',
      tech: ['AWS', 'EC2', 'S3', 'Lambda', 'DynamoDB'],
      duration: '4 months',
      description: 'Developed a scalable web application deployed on AWS with serverless backend.',
      role: 'Full Stack Developer',
      features: [
        'User authentication with JWT',
        'File upload to S3',
        'Serverless backend using Lambda',
        'NoSQL data storage with DynamoDB'
      ],
      link: "https://github.com/SathvikReddyKamidi/spring_final_project_CNM_2024.git"
    },
    {
      title: 'Java Full Stack Project',
      tech: ['Java', 'Spring Boot', 'Angular', 'Microservices','MySQL'],
      duration: '3 months',
      description: 'Created a full-stack app with REST APIs and responsive frontend.',
      role: 'Backend Developer',
      features: [
        'Login and registration system',
        'Dashboard for Store Management',
        'Responsive UI',
        'CRUD APIs'
      ],
      link: "https://github.com/SathvikReddyKamidi/Shop-For-Home.git"
    }
  ]);

  // Education
  const education = ref([
    { degree: 'Master of Technology in Computer Science', university: 'JNTU', year: '2024' },
    { degree: 'Bachelor of Technology in Computer Science', university: 'JNTU', year: '2022' }
  ]);

  // Experience
  const experience = ref([
    {
      role: 'Software Engineer',
      company: 'Wipro',
      duration: '1 year',
      details: [
        'Developed Java Full Stack applications',
        'Worked on cloud-based solutions using AWS',
        'Implemented REST APIs and database integration'
      ]
    },
    {
      role: 'Java Full Stack Developer Intern',
      company: 'Wipro',
      duration: '3 months',
      details: [
        'Developed features in Java and Vue.js',
        'Participated in code reviews and testing'
      ]
    }
  ]);

  // You can add methods to update or manipulate these if needed
  function addSkill(skill) {
    skills.value.push(skill);
  }

  function removeSkill(skillName) {
    skills.value = skills.value.filter(skill => skill.name !== skillName);
  }

  return {
    personalInfo,
    summary,
    skills,
    projects,
    education,
    experience,
    addSkill,
    removeSkill
  };
});
