export const TABS = [
  { id: 'all', label: 'All' },
  { id: 'personal', label: 'Personal' },
  { id: 'professional', label: 'Professional' },
]

export const PROJECTS = [
  {
    id: '1',
    slug: 'legaltech-simulation-interface',
    title: 'LegalTech Simulation Interface',
    description:
      'Legal tech simulation interface for training and demos. Modern UI with workflow and scenario support.',
    tags: ['Mobile Dev', 'React Native', 'LegalTech', 'UI/UX'],
    category: 'professional',
    imageUrl: '/projects/leximind/project-leximind-1.jpg',
    liveUrl: null,
    images: [
      '/projects/leximind/project-leximind-1.jpg',
      '/projects/leximind/projectleximind2.jpg',
      '/projects/leximind/projectleximind3.jpg',
    ],
    techStack: ['Node.js', 'React Native','NativeWind(Tailwind)', 'Supabase'],
    sections: [
      {
        title: 'Overview',
        content:
          'LegalTech Simulation Interface provides a training and demonstration environment for legal workflows and scenarios. Built with a focus on clarity and usability.',
      },
      {
        title: 'Features',
        content:
          'Scenario-based simulations, workflow steps, and a clean interface for legal tech demos and training.',
      },
    ],
  },
  {
    id: '3',
    slug: 'psychology-website',
    title: 'Psychology Website',
    description:
      'Psychology website for a psychologist. It includes a blog, a contact form, and a about section.',
    tags: ['CSS','JavaScript', 'Web Dev'],
    category: 'personal',
    imageUrl: '/projects/psikoloji/project-psy1.jpg',
    liveUrl: null,
    images: ['/projects/psikoloji/project-psy1.jpg', '/projects/psikoloji/project-psy2.jpg',],
    techStack: ['CSS', 'JavaScript.js'],
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
    id: '2',
    slug: 'fitt-app',
    title: 'Fitt App',
    description:
      'Fitness and workout tracking mobile app. Track your exercises, set goals, and stay motivated.',
    tags: ['Web Dev', 'Fitness', 'AI integration'],
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
    techStack: ['React.js', 'JavaScript', 'Node.js', 'OpenAI','PostgreSQL'],
    sections: [
      { title: 'Overview', content: 'Fitt App helps users track workouts and stay consistent with their fitness goals. Get personalized workout plans and track your progress with AI integration.' },
    ],
  },
  {
    id: '4',
    slug: 'dream-tales-app',
    title: 'AI-Driven Generative Storytelling & Voice Synthesis Engine',
    description:
      'An innovative mobile platform that leverages generative artificial intelligence to dynamically craft personalized narratives. Integrated with advanced Text-to-Speech (TTS) models, the architecture seamlessly converts dynamically generated text into natural, immersive audio experiences in real-time.',
    tags: ['Mobile Dev', 'Full Stack', 'AI Integration'],
    category: 'professional',
    imageUrl: '/projects/dream-tales/DreamTales.jpg',
    liveUrl: null,
    images: ['/projects/dream-tales/DreamTales.jpg',],
    techStack: ['Next.js', 'Flutter', 'Supabase', 'LLM', 'Tailwind','TTS APIs'],
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
