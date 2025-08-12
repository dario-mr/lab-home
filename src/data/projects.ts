import type { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'Ichiro Family Tree',
    icon: '/icons/ichiro-family-tree.png',
    path: '/ichiro-family-tree/',
    health: '/ichiro-family-tree/actuator/health',
  },
  {
    name: 'Ichiro Walks',
    icon: '/icons/ichiro-walks.png',
    path: '/ichiro-walks/today',
    health: '/ichiro-walks/actuator/health',
  },
  {
    name: 'Shortly',
    icon: '/icons/shortly.png',
    path: '/shortly/',
    health: '/shortly/actuator/health',
  },
  {
    name: 'API Stress Test',
    icon: '/icons/api-stress-test.png',
    path: '/api-stress-test/',
    health: '/api-stress-test/actuator/health',
  },
];
