export const TABS = [
  { id: 'all', label: 'All' },
  { id: 'personal', label: 'Personal' },
  { id: 'professional', label: 'Professional' },
]

export const PROJECTS = [
  {
    id: '1',
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'Open-source Next.js portfolio template. Optimized for SEO and performance, with dark/light theme and accent colors.',
    tags: ['Web Dev', 'Frontend', 'UI/UX'],
    category: 'personal',
    imageUrl: '/projects/leximind/project-leximind-1.jpg',
    liveUrl: null,
    images: [
      '/projects/leximind/project-leximind-1.jpg',
      '/projects/leximind/projectleximind2.jpg',
      '/projects/leximind/projectleximind3.jpg',
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    sections: [
      {
        title: 'Overview',
        content:
          'A modern portfolio template built with Next.js App Router. Focus on performance, SEO (sitemap, robots, metadata), and accessibility. Dark/light theme and multiple accent colors.',
      },
      {
        title: 'Features',
        content:
          'Responsive layout, contact form (Formspree), project and experience listings, skills section, maintenance mode, and PWA-ready manifest.',
      },
    ],
  },
  {
    id: '2',
    slug: 'project-two',
    title: 'Project Two',
    description:
      'Short description of your second project. Tech stack and impact can go here.',
    tags: ['Full Stack', 'Web Dev'],
    category: 'professional',
    imageUrl: '/projects/psikoloji/project-psy1.jpg',
    liveUrl: null,
    images: ['/projects/psikoloji/project-psy1.jpg', '/projects/psikoloji/project-psy2.jpg',],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL'],
    sections: [
      {
        title: 'Overview',
        content: 'Replace with a longer overview of the project and the problem it solves.',
      },
      {
        title: 'My role',
        content: 'Describe your responsibilities, key decisions, and outcomes.',
      },
    ],
  },
  {
    id: '3',
    slug: 'fitt-app',
    title: 'Fitt App',
    description:
      'Fitness and workout tracking mobile app. Track your exercises, set goals, and stay motivated.',
    tags: ['Mobile Dev', 'Fitness', 'React Native'],
    category: 'personal',
    imageUrl: '/projects/fitt-app/fitt-app-1.jpg',
    liveUrl: null,
    images: [
      '/projects/fitt-app/fitt-app-1.jpg',
      '/projects/fitt-app/fitt-app-2.jpg',
      '/projects/fitt-app/fitt-app-3.jpg',
      '/projects/fitt-app/fitt-app-4.jpg',
      '/projects/fitt-app/fitt-app-5.jpg',
      '/projects/fitt-app/fitt-app-6.jpg',
      '/projects/fitt-app/fitt-app-7.jpg',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript'],
    sections: [
      { title: 'Overview', content: 'Fitt App helps users track workouts and stay consistent with their fitness goals. Add your own description here.' },
    ],
  },
  {
    id: '4',
    slug: 'full-stack-app',
    title: 'Full Stack App',
    description:
      'Production-ready app with authentication, API, and modern UI. Built with Next.js and your preferred backend.',
    tags: ['Full Stack', 'Web Dev', 'UI/UX'],
    category: 'professional',
    imageUrl: '/projects/project-4.jpg',
    liveUrl: null,
    images: ['/projects/project-4.jpg'],
    techStack: ['Next.js', 'React', 'Supabase', 'Tailwind'],
    sections: [
      { title: 'Overview', content: 'Describe the app, target users, and main features.' },
      { title: 'Tech decisions', content: 'Why you chose this stack and how it performed.' },
    ],
  },
  {
    id: '5',
    slug: 'mobile-app',
    title: 'Mobile App',
    description:
      'Cross-platform mobile application. Add your tech stack and store links here.',
    tags: ['Mobile Dev', 'Full Stack'],
    category: 'personal',
    imageUrl: '/projects/project-5.jpg',
    liveUrl: null,
    images: ['/projects/project-5.jpg'],
    techStack: ['React Native', 'Expo', 'TypeScript'],
    sections: [
      { title: 'Overview', content: 'Describe the mobile app and its purpose.' },
    ],
  },
  {
    id: '6',
    slug: 'dashboard-tool',
    title: 'Dashboard / Tool',
    description:
      'Internal tool or dashboard. Describe the problem it solves and technologies used.',
    tags: ['Web Dev', 'Frontend'],
    category: 'professional',
    imageUrl: '/projects/project-6.jpg',
    liveUrl: null,
    images: ['/projects/project-6.jpg'],
    techStack: ['React', 'Chart.js', 'REST API'],
    sections: [
      { title: 'Overview', content: 'What the dashboard does and who uses it.' },
    ],
  },
]
