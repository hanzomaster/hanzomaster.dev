import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "mb-bank",
    companyName: "MB Bank",
    positions: [
      {
        id: "mb-bank-specialist",
        title: "Specialist",
        employmentPeriod: {
          start: "12.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Designing and developing services for a real-time marketing automation system targeting 35 million bank customers
- Queried 3 billion user records using Oracle, ClickHouse, and Kafka to detect behavior patterns for real-time engagement
- Collaborates within Agile teams to ensure alignment between product, development, QA, and operations`,
        skills: ["Oracle", "ClickHouse", "Kafka", "Real-time Systems", "Agile"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "rikkeisoft",
    companyName: "Rikkeisoft",
    positions: [
      {
        id: "rikkeisoft-backend-developer",
        title: "Backend Developer",
        employmentPeriod: {
          start: "06.2024",
          end: "12.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Participated in developing an internal management project for FPT based on Spotify Backstage using Express.js
- Worked on-site at Viettel Digital to develop features and maintain Viettel Money back-end system
- Participated in building a new base code template using Spring Boot 3, Java 17, and Hexagonal Architecture
- Collaborated with front-end team to develop an authentication model using Keycloak for internal tools`,
        skills: [
          "Express.js",
          "Spring Boot",
          "Java",
          "Hexagonal Architecture",
          "Keycloak",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "savis",
    companyName: "SAVIS",
    positions: [
      {
        id: "savis-java-developer",
        title: "Java Developer",
        employmentPeriod: {
          start: "11.2023",
          end: "06.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Engaged in building an open banking platform for NAPAS from the inception stage
- Supported consulting documents including architecture consulting, authentication flow, and API specifications
- Handled communication, English interpretation, and coordination during international and domestic meetings
- Supported API design specifications for the pilot phase using Spring Boot and WSO2
- Possess a good understanding of OAuth 2.0 flow`,
        skills: [
          "Spring Boot",
          "WSO2",
          "OAuth 2.0",
          "API Design",
          "Open Banking",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "metis",
    companyName: "Metis",
    positions: [
      {
        id: "metis-backend-developer",
        title: "Backend Developer",
        employmentPeriod: {
          start: "06.2022",
          end: "11.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Participated in design and development of a system for managing citations and scientific articles
- Leveraged Spring Boot to develop a search system for over 100 million articles from Google Scholar, Scopus, and ISI
- Collected, analyzed, and synthesized data using Node.js from PubMed and Scopus
- Worked with ClickHouse and Neo4j for cleaning and analyzing big data`,
        skills: ["Spring Boot", "Node.js", "ClickHouse", "Neo4j", "Big Data"],
        isExpanded: false,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "vnu-uet",
        title: "VNU University of Engineering and Technology",
        employmentPeriod: {
          start: "09.2020",
          end: "06.2024",
        },
        icon: "education",
        description: `- Bachelor's of Information Technology
- GPA: 3.34`,
        skills: [],
        isExpanded: false,
      },
    ],
  },
];
