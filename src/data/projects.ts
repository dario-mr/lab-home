import type { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'Ichiro Family Tree',
    icon: '/icons/ichiro-family-tree.png',
    path: '/ichiro-family-tree/',
    healthPath: '/ichiro-family-tree/actuator/health',
    infoPath: '/ichiro-family-tree/actuator/info',
  },
  {
    name: 'Ichiro Walks',
    icon: '/icons/ichiro-walks.png',
    path: '/ichiro-walks/today',
    healthPath: '/ichiro-walks/actuator/health',
    infoPath: '/ichiro-walks/actuator/info',
  },
  {
    name: 'Shortly',
    icon: '/icons/shortly.png',
    path: '/shortly/',
    healthPath: '/shortly/actuator/health',
    infoPath: '/shortly/actuator/info',
  },
  {
    name: 'API Stress Test',
    icon: '/icons/api-stress-test.png',
    path: '/api-stress-test/',
    healthPath: '/api-stress-test/actuator/health',
    infoPath: '/api-stress-test/actuator/info',
  },
  {
    name: 'Portainer',
    icon: '/icons/portainer.svg',
    path: '/portainer/',
    healthPath: '/portainer/api/system/status',
    infoPath: '/portainer/api/system/status',
  },
  {
    name: 'Grafana',
    icon: '/icons/grafana.svg',
    path: '/grafana/',
    healthPath: '/grafana/api/health',
    infoPath: '/grafana/api/health',
  },
];
