export const profile = {
  name: 'Manvith Kumar',
  role: 'Full-Stack Developer',
  tagline: 'I build secure, scalable, and high-performance applications with clean architecture and thoughtful engineering.',
  location: 'Mangalore, Karnataka, India',
  email: 'kumarmanvith0@gmail.com',
  social: {
    github: 'https://github.com/ManvithKumar',
    linkedin: 'https://linkedin.com/in/u-manvith-kumar-a3a7b521b',
    twitter: 'https://x.com',
  },
  stats: [
    { label: 'Years building', value: '3+' },
    { label: 'Projects shipped', value: '10+' },
    { label: 'Open source', value: '20' },
  ],
}

export const skills = [
  { name: 'Java / Spring Boot', level: 95 },
  { name: 'React / Angular', level: 92 },
  { name: 'Node.js', level: 88 },
  { name: 'GraphQL / SOAP / REST', level: 80 },
  { name: 'PostgreSQL / SQL', level: 85 },
  { name: 'Docker / Kubernetes', level: 78 },
  {name : 'VS Code / Intellij / Cursor' , level: 80}
]

export const projects = [
  {
    id: '1',
    title: 'WriteReview',
    description:
      'Freelance product review platform enabling customers to share authentic feedback on products discovered across e-commerce applications.',
    tags: ['React', 'Node.js', 'REST APIs'],
    year: '2023',
    accent: '#a855f7',
  },
  {
    id: '2',
    title: 'Warranty Management System',
    description:
      'Retail warranty management solution for creating, tracking, and managing customer service tickets throughout their lifecycle.',
    tags: ['React', 'Java', 'Spring Boot'],
    year: '2023',
    accent: '#c084fc',
  },
  {
    id: '3',
    title: 'Customer Onboarding Platform',
    description:
      'US-based digital banking onboarding platform integrating KYC verification, customer registration, and funding workflows.',
    tags: ['Angular', 'Java', 'Spring Boot', 'Node.js'],
    year: '2024–2025',
    accent: '#22c55e',
  },
  {
    id: '4',
    title: 'Credit Card Creation System',
    description:
      'Enterprise banking solution for credit card creation, powered by batch processing, backend integrations, and automated workflows.',
    tags: ['Java', 'Spring Boot', 'Spring Batch', 'Microservices'],
    year: '2026',
    accent: '#4ade80',
  },
];

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
