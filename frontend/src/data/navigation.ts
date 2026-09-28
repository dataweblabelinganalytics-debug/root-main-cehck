import { NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { 
    label: 'Our Projects', 
    href: '/projects', 
    children: [
      { label: 'Kendrix Scheduling Software', href: '/projects/kendrix-scheduling' },
      { label: 'Kendrix AI Content Intelligence', href: '/projects/kendrix-content-intelligence' },
    ]
  },
  { label: 'Contact Us', href: '/contact' },
];
