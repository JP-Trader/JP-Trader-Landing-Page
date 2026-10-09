import type { IconName } from '../components/Icon';

export const company = {
  name: 'JP Trader',
  website: 'https://jptrader.in/',
  email: 'info@jptrader.in',
  phone: '+91 73588 77767',
  phoneHref: 'tel:+917358877767',
  address: '26/C, Thangaraj Layout, East Shanmugapuran, Villupuram, Tamil Nadu, India.',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export interface Card {
  title: string;
  description: string;
  icon: IconName;
}

export const services: Card[] = [
  { title: 'Web Application Development', icon: 'web', description: 'Custom, scalable, secure web applications tailored to your business requirements.' },
  { title: 'iOS App Development', icon: 'apple', description: 'Native or cross-platform mobile applications for Apple iPhone and iPad.' },
  { title: 'Android App Development', icon: 'android', description: 'Modern Android applications with intuitive interfaces and reliable performance.' },
  { title: 'Application Deployment', icon: 'cloud', description: 'Build, configure, test and deploy to web servers, cloud infrastructure, the Apple App Store and Google Play Store.' },
  { title: 'Application Maintenance', icon: 'wrench', description: 'Bug fixes, security updates, performance optimization, version upgrades and ongoing technical support.' },
  { title: 'Trading Bot Development', icon: 'bot', description: 'Automated trading software with configurable strategies, API integrations, execution rules and risk-management controls.' },
  { title: 'Trading System Integration', icon: 'plug', description: 'Integration with supported third-party APIs, market data providers and other trading-related systems.' },
];

export const platforms: Card[] = [
  { title: 'Web', icon: 'web', description: 'Responsive web apps and dashboards.' },
  { title: 'iOS', icon: 'apple', description: 'iPhone and iPad, with App Store submission support.' },
  { title: 'Android', icon: 'android', description: 'Phones and tablets, with Google Play submission support.' },
  { title: 'Cloud Deployment', icon: 'cloud', description: 'Web servers and cloud infrastructure.' },
  { title: 'Trading APIs', icon: 'plug', description: 'Supported third-party broker, exchange and market data APIs.' },
];

export const processSteps = [
  { title: 'Requirements', description: 'We clarify goals, users, scope and constraints before any code is written.' },
  { title: 'UI/UX Design', description: 'Wireframes and interface designs that are clear, accessible and on-brand.' },
  { title: 'Development', description: 'Clean, modular, documented code built in reviewable increments.' },
  { title: 'Testing', description: 'Functional, security and device testing, including strategy testing for trading bots.' },
  { title: 'Deployment', description: 'Server, cloud and store releases that follow Apple and Google submission requirements.' },
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
  'Trading Bot',
  'Trading System Integration',
  'Other',
];
