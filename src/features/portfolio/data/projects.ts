import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "thinkmath",
    title: "ThinkMath",
    period: {
      start: "01.2025",
    },
    link: "https://thinkmath.com.vn",
    skills: ["Spring Boot", "PostgreSQL", "Docker", "AWS"],
    description: `Lead Backend Developer for an LMS targeting primary and secondary school students
- Helped design and develop system and infrastructure
- Managed PR reviews, bug fixes, and coordinated release scheduling
- Ensured security of the online testing environment
- Integrated web-based assessment authoring with automation tools for LaTeX-based question creation`,
    isExpanded: true,
  },
  {
    id: "amsterdam-news-portal",
    title: "Amsterdam News Portal",
    period: {
      start: "07.2024",
    },
    link: "https://hnams.edu.vn",
    skills: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    description: `Lead Backend Developer for school information portal
- Designed and developed school information portal with news/events publishing and media management
- Used Next.js and Tailwind CSS for front-end and Next.js for back-end`,
    isExpanded: false,
  },
]
