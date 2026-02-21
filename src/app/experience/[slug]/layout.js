import { EXPERIENCES } from "@/data/experience";

export async function generateMetadata({ params }) {
  const { slug } = (await params) || {};
  const exp = EXPERIENCES.find((e) => e.slug === slug);

  if (!exp) {
    return { title: "Not found" };
  }

  const title = `${exp.title} at ${exp.company}`;
  const description =
    exp.description?.slice(0, 160) || `${exp.title} · ${exp.company} · ${exp.dates}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} — Barış Atala`,
      description,
    },
    alternates: { canonical: `/experience/${exp.slug}` },
  };
}

export default function ExperienceSlugLayout({ children }) {
  return children;
}
