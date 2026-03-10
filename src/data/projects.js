export const TABS = [
  { id: 'all', label: 'All' },
  { id: 'personal', label: 'Personal' },
  { id: 'professional', label: 'Professional' },
]

export const PROJECTS = [
  {
    id: '1',
    slug: 'leximind',
    title: 'LexiMind (Internship)',
    description:
      'Internship project — a legal tech simulation interface for training and demos. Modern UI with workflow and scenario support.',
    tags: ['Mobile Dev', 'LegalTech', 'UI/UX'],
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
          'LexiMind provides a training and demonstration environment for legal workflows and scenarios. Built with a focus on clarity and usability.',
      },
      {
        title: 'Features',
        content:
          'Scenario-based simulations, workflow steps, and a clean interface for legal tech demos and training.',
      },
    ],
  },
  {
    id: '2',
    slug: 'dreamtales',
    title: 'DreamTales',
    description:
      'AI-driven generative storytelling and voice synthesis. Personalized narratives with real-time TTS for immersive audio experiences.',
    tags: ['Mobile Dev', 'Full Stack', 'AI Integration'],
    category: 'professional',
    imageUrl: '/projects/dream-tales/DreamTales.jpg',
    liveUrl: null,
    images: ['/projects/dream-tales/DreamTales.jpg'],
    techStack: ['Flutter', 'Supabase', 'LLM', 'TTS APIs'],
    sections: [
      {
        title: 'Overview',
        content:
          'DreamTales dynamically crafts personalized stories and converts them into natural-sounding audio using TTS.',
      },
      {
        title: 'Highlights',
        content:
          'Generative story engine, prompt orchestration, and audio playback for narrated experiences.',
      },
    ],
  },
  {
    id: '3',
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
      '/projects/fitt-app/fitt-app-8.jpg',
    ],
    techStack: ['React.js', 'JavaScript', 'Node.js', 'OpenAI','PostgreSQL'],
    sections: [
      { title: 'Overview', content: 'Fitt App helps users track workouts and stay consistent with their fitness goals. Get personalized workout plans and track your progress with AI integration.' },
    ],
  },
  {
    id: '4',
    slug: 'psychologist-website',
    title: 'Psychologist Website',
    description:
      'Website for a psychologist with services, about section, blog area, and a contact form.',
    tags: ['Web Dev', 'JavaScript', 'CSS'],
    category: 'personal',
    imageUrl: '/projects/psikoloji/project-psy1.jpg',
    liveUrl: null,
    images: ['/projects/psikoloji/project-psy1.jpg', '/projects/psikoloji/project-psy2.jpg'],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    sections: [
      { title: 'Overview', content: 'A clean, responsive website designed to present services and build trust with potential clients.' },
      { title: 'Features', content: 'Service pages, contact section, and content areas suitable for blog posts and announcements.' },
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
