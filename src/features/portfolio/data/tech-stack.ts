import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    key: "go",
    title: "Go",
    href: "https://go.dev/",
    categories: ["Language"],
  },
  // Runtime & Backend
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh/",
    categories: ["Runtime Environment"],
  },
  {
    key: "spring",
    title: "Spring",
    href: "https://spring.io/",
    categories: ["Framework"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    key: "django",
    title: "Django",
    href: "https://www.djangoproject.com/",
    categories: ["Framework"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    key: "nestjs",
    title: "NestJS",
    href: "https://nestjs.com/",
    categories: ["Framework"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  // Frontend
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  // Databases
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },
  {
    key: "postgres",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    key: "neo4j",
    title: "Neo4j",
    href: "https://neo4j.com/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg",
  },
  {
    key: "clickhouse",
    title: "ClickHouse",
    href: "https://clickhouse.com/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/clickhouse/clickhouse-original.svg",
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
  },
  {
    key: "oracle",
    title: "Oracle Database",
    href: "https://www.oracle.com/database/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
  },
  // Message Brokers & Streaming
  {
    key: "kafka",
    title: "Apache Kafka",
    href: "https://kafka.apache.org/",
    categories: ["Message Broker", "Streaming"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
  },
  // DevOps & Tools
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Cloud"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    key: "jira",
    title: "Jira",
    href: "https://www.atlassian.com/software/jira",
    categories: ["Project Management"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
  },
  // AI
  {
    key: "claude",
    title: "Claude",
    href: "https://claude.ai/",
    categories: ["Tools", "AI"],
    iconUrl:
      "https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/icons/claude.svg",
  },
];
