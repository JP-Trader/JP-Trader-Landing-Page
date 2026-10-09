import type { IconName } from '../components/Icon';

export const company = {
  name: 'JP Trader',
  website: 'https://jptrader.in/',
  email: 'info@jptrader.in',
  phone: '+91 99947 75475',
  phoneHref: 'tel:+919994775475',
  address: '26/C, Thangaraj Layout, East Shanmugapuran, Villupuram, Tamil Nadu, India.',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export interface Card {
  title: string;
  description: string;
  icon: IconName;
  /** Short label for compact places such as the hero orbit. */
  short?: string;
}

/** Order matters: the first three (what we build) sit on the hero's inner ring, the rest on the outer ring. */
export const services: Card[] = [
  { title: 'Web Application Development', short: 'Web Apps', icon: 'web', description: 'Custom, scalable, secure web applications tailored to your business requirements.' },
  { title: 'iOS App Development', short: 'iOS Apps', icon: 'apple', description: 'Native or cross-platform mobile applications for Apple iPhone and iPad.' },
  { title: 'Android App Development', short: 'Android Apps', icon: 'android', description: 'Modern Android applications with intuitive interfaces and reliable performance.' },
  { title: 'QA & Testing Solutions', short: 'QA & Testing', icon: 'qa', description: 'Manual and automated testing: functional, regression, API, performance and security testing with test automation frameworks and clear reports.' },
  { title: 'DevOps Solutions', short: 'DevOps', icon: 'devops', description: 'CI/CD pipelines, infrastructure as code, containerization, cloud setup and monitoring so releases are fast, repeatable and reliable.' },
  { title: 'AI Agent Integration & Automation', short: 'AI Agents', icon: 'ai', description: 'AI agents and LLM-powered assistants built into your apps and workflows, automating repetitive processes with human-in-the-loop controls.' },
  { title: 'Application Deployment', short: 'Deployment', icon: 'cloud', description: 'Build, configure, test and deploy to web servers, cloud infrastructure, the Apple App Store and Google Play Store.' },
  { title: 'Application Maintenance', short: 'Maintenance', icon: 'wrench', description: 'Bug fixes, security updates, performance optimization, version upgrades and ongoing technical support.' },
];

export interface StackGroup {
  title: string;
  icon: IconName;
  summary: string;
  tools: string[];
}

/** Tools we build with, grouped by layer. Edit freely; the section renders from this list. */
export const stack: StackGroup[] = [
  { title: 'Frontend', icon: 'web', summary: 'Fast, accessible interfaces.', tools: ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS'] },
  { title: 'Mobile', icon: 'apple', summary: 'Native and cross-platform apps.', tools: ['Swift', 'Kotlin', 'Flutter', 'React Native'] },
  { title: 'Backend & Data', icon: 'code', summary: 'APIs, services and storage.', tools: ['Node.js', 'Python', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { title: 'QA & Testing', icon: 'qa', summary: 'Automation at every level.', tools: ['Playwright', 'Selenium', 'Cypress', 'Appium', 'Postman', 'JMeter'] },
  { title: 'DevOps & Cloud', icon: 'devops', summary: 'Repeatable, observable delivery.', tools: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform', 'AWS', 'Azure'] },
  { title: 'AI & Automation', icon: 'ai', summary: 'Agents that do the busywork.', tools: ['Claude API', 'OpenAI API', 'LangChain', 'MCP', 'n8n', 'Python'] },
];

export const processSteps = [
  { title: 'Requirements', description: 'We clarify goals, users, scope and constraints before any code is written.' },
  { title: 'UI/UX Design', description: 'Wireframes and interface designs that are clear, accessible and on-brand.' },
  { title: 'Development', description: 'Clean, modular, documented code built in reviewable increments.' },
  { title: 'Testing', description: 'Functional, regression, security and device testing, automated wherever it pays off.' },
  { title: 'Deployment', description: 'Server, cloud and store releases through automated pipelines, following Apple and Google submission requirements.' },
  { title: 'Ongoing Support', description: 'Maintenance, updates and technical help after launch.' },
];

export const reasons: Card[] = [
  { title: 'Customized Solutions', icon: 'puzzle', description: 'Built around your workflow, not a one-size-fits-all template.' },
  { title: 'Maintainable Code', icon: 'code', description: 'Structured, documented code your team can extend.' },
  { title: 'Scalability', icon: 'layers', description: 'Architecture that can grow with your users and data.' },
  { title: 'Application Security', icon: 'shield', description: 'Secure coding practices, dependency updates and access controls.' },
  { title: 'Technical Support', icon: 'headset', description: 'Responsive help for fixes, upgrades and questions.' },
];

export const inquiryTopics = [
  'Web Application',
  'iOS App',
  'Android App',
  'Deployment',
  'Maintenance & Support',
  'QA & Testing',
  'DevOps',
  'AI Agents & Automation',
  'Other',
];
