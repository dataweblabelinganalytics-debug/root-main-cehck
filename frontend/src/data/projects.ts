import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'kendrix-scheduling',
    name: 'Kendrix Scheduling Software',
    shortName: 'Kendrix Scheduling',
    category: 'Business Automation • SaaS • Scheduling • Queue Management',
    tagline: 'Intelligent scheduling and resource management for modern businesses.',
    description: 'A comprehensive platform designed to streamline appointments, manage staff effectively, and provide seamless multi-channel booking experiences for your clients.',
    features: [
      'Scheduling',
      'Queue Management',
      'WhatsApp Integration',
      'Staff Management',
      'Resource Allocation',
      'Analytics',
      'Billing',
      'Multi-Channel Booking'
    ],
    status: 'In Development',
    route: '/projects/kendrix-scheduling',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets'],
    highlightColor: '#2563EB'
  },
  {
    slug: 'kendrix-content-intelligence',
    name: 'Kendrix AI Content Intelligence',
    shortName: 'Content Intelligence',
    category: 'Artificial Intelligence • Content Intelligence • Automation',
    tagline: 'Elevate your content strategy with AI-driven insights and automated workflows.',
    description: 'An advanced AI platform that analyzes content, adapts to creator voice, and grounds generation in reliable sources to ensure high-quality output across platforms.',
    features: [
      'Content Intelligence',
      'AI Analysis',
      'Creator Voice',
      'Source Grounding',
      'Platform Adaptation',
      'Automated Scoring',
      'Version Control'
    ],
    status: 'In Development',
    route: '/projects/kendrix-content-intelligence',
    technologies: ['React', 'Python', 'LLMs', 'Vector DB', 'FastAPI'],
    highlightColor: '#06B6D4'
  }
];
