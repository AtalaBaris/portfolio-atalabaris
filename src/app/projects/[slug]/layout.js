import { PROJECTS } from '@/data/projects'

export async function generateMetadata({ params }) {
  const { slug } = (await params) || {}
  const project = PROJECTS.find((p) => p.slug === slug || p.id === slug)

  if (!project) {
    return { title: 'Project not found' }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Barış Atala`,
      description: project.description,
    },
    alternates: { canonical: `/projects/${project.slug}` },
  }
}

export default function ProjectSlugLayout({ children }) {
  return children
}
