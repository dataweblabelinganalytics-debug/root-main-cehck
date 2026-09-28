export type PageMeta = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
};

export function getPageMeta(page: string): PageMeta {
  const baseTitle = 'Kendrix | AI, Automation & Intelligent Software';
  
  const metaData: Record<string, PageMeta> = {
    home: {
      title: baseTitle,
      description: 'Kendrix builds intelligent software, AI solutions, and automation platforms to transform modern businesses.',
    },
    about: {
      title: `About Us | ${baseTitle}`,
      description: 'Learn about Kendrix, our mission, vision, and the team building next-generation intelligent software.',
    },
    projects: {
      title: `Our Projects | ${baseTitle}`,
      description: 'Explore the innovative software solutions and platforms currently being developed by Kendrix.',
    },
    'kendrix-scheduling': {
      title: `Kendrix Scheduling Software | ${baseTitle}`,
      description: 'Intelligent scheduling and resource management platform with multi-channel booking and automated workflows.',
    },
    'kendrix-content-intelligence': {
      title: `AI Content Intelligence | ${baseTitle}`,
      description: 'Advanced AI platform that analyzes content, adapts to creator voice, and grounds generation in reliable sources.',
    },
    contact: {
      title: `Contact Us | ${baseTitle}`,
      description: 'Get in touch with Kendrix to discuss partnerships, projects, or learn more about our solutions.',
    },
    privacy: {
      title: `Privacy Policy | ${baseTitle}`,
      description: 'Privacy Policy and data handling practices for Kendrix.',
    },
    terms: {
      title: `Terms of Service | ${baseTitle}`,
      description: 'Terms of Service for using Kendrix platforms and solutions.',
    },
    notfound: {
      title: `Page Not Found | ${baseTitle}`,
      description: 'The requested page could not be found.',
    }
  };

  return metaData[page] || metaData.home;
}
