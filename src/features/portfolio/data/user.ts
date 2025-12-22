import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Thịnh",
  lastName: "Trần",
  displayName: "Thinh Tran",
  username: "hanzomaster",
  gender: "male",
  pronouns: "he/him",
  bio: "Building realtime, high throughput systems.",
  flipSentences: [
    "Building realtime, high throughput systems.",
    "Backend Engineer",
    "4+ years of experience",
  ],
  address: "Hanoi, Viet Nam",
  phoneNumber: "Kzg0MzYzODg4ODEx", // E.164 format, base64 encoded
  email: "dGhpbmhyb20xMUBnbWFpbC5jb20=", // base64 encoded
  website: "https://hanzomaster.dev",
  jobTitle: "Software Engineer",
  jobs: [
    // TODO: Add your current job(s) here
    // {
    //   title: "Backend Engineer",
    //   company: "Company Name",
    //   website: "https://company.com",
    // },
  ],
  about: `
- **Backend Engineer** with **4+ years of experience**, specializing in designing and implementing realtime, high throughput systems.
- Passionate about building scalable, reliable backend infrastructure.
`,
  avatar:
    "https://ui-avatars.com/api/?name=Thinh+Tran&size=200&background=09090b&color=fff",
  // TODO: Replace with your OG image URL (S3)
  ogImage:
    "https://ui-avatars.com/api/?name=Thinh+Tran&size=1200&background=09090b&color=fff",
  namePronunciationUrl: "", // TODO: Add pronunciation audio if desired
  timeZone: "Asia/Ho_Chi_Minh",
  keywords: [
    "hanzomaster",
    "thinh tran",
    "tran thinh",
    "thịnh trần",
    "trần thịnh",
    "backend engineer",
    "software engineer",
  ],
  dateCreated: "2025-12-08", // YYYY-MM-DD
};
