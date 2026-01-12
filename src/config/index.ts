import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Abang Njure Emmanuel — Front-end Developer",
  author: "Abang Njure Emmanuel",
  description:
    "Front-end developer & Computer Science undergraduate focused on responsive UI, accessibility, and performant web experiences.",
  lang: "en",
  siteLogo: "/src/assets/emmanuelbig.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Website", href: "https://njure-vercel.app" },
    { text: "Email", href: "mailto:emmanuelabang2000@gmail.com" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-abang-902794236//" },
    { text: "Github", href: "https://github.com/iexwr" },
    { text: "Instagram", href: "https://www.instagram.com/house_of_njay_/?hl=en/" },
  ],
  socialImage: "/src/assets/emmanuelbig.jpg",
  canonicalURL: "https://njure-vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: { 
    name: "Abang Njure Emmanuel",
    specialty: "Front-end Developer & Computer Science Undergraduate",
    summary:
      "An experienced and well nurtured front-end developer with a core foundation in computer science principles and a proven ability to enhance systems performance. Known for driving measurable improvements in user experience, application speed, and code quality while maintaining a strong attention to detail and best engineering practices.",
    email: "emmanuelabang2000@gmail.com",
  },
  experience: [
    {
      company: "Freelance",
      position: "Frontend Developer & Junior Mobile UI Designer",
      startDate: "2022",
      endDate: "2025",
      summary: [
        "Delivered frontend solutions and mobile UI designs for client projects, focusing on clean UI implementation, responsive design, and user-centered experiences.",
        "Worked closely with stakeholders to refine designs and ensure seamless handoff between design and development.",
      ],
    },
    {
      company: "Frances Computer Company - Benin",
      position: "Graduate Intern (Onsite)",
      startDate: "2020",
      endDate: "2021",
      summary: [
        "Contributed to front-end features and testing for customer-facing web applications.",
        "Gained practical experience in real-world product development and deployment workflows.",
      ],
    },
    {
      company: "AgriChain Services",
      position: "Contributor",
      startDate: "2021",
      endDate: "2022",
      summary: [
        "Worked on agricultural service web features and integrations.",
      ],
    },
  ],
  projects: [
    {
      name: "Dementia AI Chatbot",
      summary:
        "Mobile-first AI chatbot to support dementia patients through intuitive UX, conversational assistance, and haptic feedback interactions. Runner-up at National Hackathon - Nigeria.",
      linkPreview: "https://github.com/d3vobed/conversational-ai/releases/",
      linkSource: "https://github.com/d3vobed/conversational-ai/",
      image: "/src/assets/image.png",
    },
    {
      name: "Web3 Integration",
      summary:
        "Integrated a full blockchain network with functional web3 calls using Alchemy and Supabase to enable transactions and state management in a web UI.",
      linkPreview: "https://agrichain-frontend.vercel.app/",
      linkSource: "https://github.com/chainNG/agrichain-frontend",
      image: "/src/assets/pic.png",
    },
  ],
  about: {
    description: `
      An experienced and well nurtured front-end developer with a strong foundation in computer science and a proven ability to design and build performant, accessible web applications. I focus on enhancing user experience, application speed, and code quality while following best engineering practices.

      I have completed formal studies in Computer Science, gaining solid skills in algorithms, system design, and application development. I enjoy solving UI problems, improving accessibility, and building products that make a measurable difference for users.
    `,
    image: "/src/assets/emmanuelbig.jpg",
  },
};

// #5755ff
