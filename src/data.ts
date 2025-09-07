export const experienceData: {
  jobTitle: string;
  organization: string;
  joiningYear: string;
  leavingYear: string;
  description: string[];
}[] = [
  {
    jobTitle: "AI Engineer Intern",
    organization: "ControlShift AI",
    joiningYear: "Jul 2025",
    leavingYear: "",
    description: [
      "Built backend services for AI voice and chat agents using Python (FastAPI)",
      "Integrated LangChain and custom LLM workflows for intelligent automation",
      "Developed scalable APIs for lead generation, appointment booking, and customer support",
    ],
  },
  {
    jobTitle: "Research Software Engineer Intern (Data)",
    organization: "Walter and Eliza Hall Institute of Medical Research",
    joiningYear: "Mar 2025",
    leavingYear: "May 2025",
    description: [
      "Implemented scalable demo environment for research data management in 4-member team",
      "Generated synthetic whole-genome sequencing datasets and built ingestion pipelines",
      "Accelerated dependent data processing by ~20% through optimized pipelines",
      "Launched data portals on non-expiring VMs ensuring 24/7 researcher accessibility",
      "Reduced cross-project miscommunication by 30% through weekly alignment meetings",
    ],
  },
  {
    jobTitle: "Data Engineer (Solution Engineer)",
    organization: "IBS Software Private Limited",
    joiningYear: "Sep 2022",
    leavingYear: "Oct 2023",
    description: [
      "Part of 35-member team serving 170+ clients including 7 of top 10 airlines",
      "Drafted PySpark code templates reducing redundant scripting and saving 1,000+ man hours",
      "Migrated 50+ legacy pipelines to AWS Glue, improving ETL performance by 20%",
      "Designed 15+ Redshift tables with queries executing in <1 minute",
      "Co-authored 10+ design documents cutting onboarding time by 15%",
    ],
  },
];

export const resume =
  "https://drive.google.com/file/d/1Ge1qoEPn-dWh1clGJ3VO_Y2DgcumvNBr/view?usp=sharing";

import type { ReactNode } from "react";
import TripPlanner from "./assets/photos/trip_panner_background.avif";
import Cinemanor from "./assets/photos/cinemanor.png";

export const projects: {
  projectName: string;
  techsUsed: string[];
  story: string;
  description?: string;
  pathLink: string;
  bannerImage: string;
  video?: ReactNode;
}[] = [
  {
    projectName: "AI Trip Planner",
    techsUsed: [
      "LangGraph",
      "LangChain",
      "Agentic AI",
      "Streamlit",
      "Fast API",
    ],
    story:
      "Imagine planning a trip where you have to juggle weather forecasts, find the best places to visit, convert currencies, and manage expenses - all while ensuring everything fits your budget and schedule. This project solves that exact problem by creating an intelligent AI agent that orchestrates multiple tools seamlessly.",
    pathLink: "https://github.com/ebythomas23/AI-Trip-Planner",
    bannerImage: TripPlanner,
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/OfBay6k4Z9s?si=ZJwf6cLVyeznlAVf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    projectName: "Enterprise RAG Chatbot",
    techsUsed: [],
    story:
      "Companies often struggle with employees spending hours searching through internal documents, policies, and procedures. This chatbot transforms that experience by providing instant, accurate answers from company knowledge bases, saving countless hours and improving productivity.",
    pathLink: "https://github.com/ebythomas23/enterprise-rag-chatbot",
    bannerImage: Cinemanor,
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/OfBay6k4Z9s?si=ZJwf6cLVyeznlAVf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    projectName: "Multimodal RAG",
    techsUsed: [],
    story:
      "Traditional search systems can only handle text, but real-world documents often contain images, charts, and complex layouts. This project breaks that barrier by enabling AI to understand and answer questions from any type of document, making information retrieval truly universal.",
    pathLink: "https://github.com/ebythomas23/Multimodal_RAG",
    bannerImage: Cinemanor,
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/OfBay6k4Z9s?si=ZJwf6cLVyeznlAVf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    projectName: "AgenticAI Learning",
    techsUsed: [],
    story:
      "Learning AI agents can be overwhelming with scattered resources and complex concepts. This project creates a structured learning path with practical examples, making it easier for developers to understand and implement agentic AI systems in their own projects.",
    pathLink: "https://github.com/ebythomas23/AgenticAI",
    bannerImage: Cinemanor,
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/OfBay6k4Z9s?si=ZJwf6cLVyeznlAVf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    projectName: "Smart Loan Recovery System",
    techsUsed: [],
    story:
      "Banks lose millions when they can't prioritize which loans to focus on for recovery. This system uses machine learning to predict which loans are most likely to default, helping banks allocate resources efficiently and maximize recovery rates.",
    pathLink: "https://github.com/ebythomas23/Smart-Loan-Recovery-System",
    bannerImage: Cinemanor,
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/OfBay6k4Z9s?si=ZJwf6cLVyeznlAVf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    projectName: "Employee Turnover Prediction",
    techsUsed: [],
    story:
      "High employee turnover costs companies millions in recruitment and training. This system helps HR teams identify employees at risk of leaving early, allowing them to take proactive measures to retain valuable talent and reduce turnover costs.",
    pathLink: "https://github.com/ebythomas23/Employee_Turnover_Prediction",
    bannerImage: Cinemanor,
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/OfBay6k4Z9s?si=ZJwf6cLVyeznlAVf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
];

import deeplearningai_logo from "./assets/photos/deeplearningai_logo.jpeg";
import GCC_badge from "./assets/photos/GCC_badge_DA_1000x1000.png";
import melbourne_innovation_badge from "./assets/photos/assertion-YmFkZ2Vib29rLTBlYWM3MDNhLTAyYjEtNGRlMS1iMWVlLTYwMDRmYjc4Y2Q0YQ.svg";

export const certifications: {
  title: string;
  description: string;
  year: string;
  link: string;
  logo: string;
  alt: string;
}[] = [
  {
    title: "Deep Learning Specialisation",
    description: "Neural Networks & AI Models",
    year: "2025",
    link: "Deep learning Certification.pdf",
    logo: deeplearningai_logo,
    alt: "",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    description: "Data Analysis and Visualisation",
    year: "2025",
    link: "https://www.credly.com/badges/4b9a5731-27de-4e41-9191-53e027f08b29/print",
    logo: GCC_badge,
    alt: "Google Data Analytics Badge",
  },
  {
    title: "Kaggle Pandas Certificate",
    description: "Data Manipulation & Analysis",
    year: "Nov 2024",
    link: "https://www.kaggle.com/learn/certification/ebythomass/pandas",
    logo: "https://www.kaggle.com/static/images/site-logo.svg",
    alt: "Kaggle Logo",
  },
  {
    title: "Melbourne Plus Innovation Badge",
    description: "University of Melbourne",
    year: "2024",
    link: "https://au.badgr.com/public/assertions/YmFkZ2Vib29rLTBlYWM3MDNhLTAyYjEtNGRlMS1iMWVlLTYwMDRmYjc4Y2Q0YQ?identity__email=thomaset@student.unimelb.edu.au",
    logo: melbourne_innovation_badge,
    alt: "Melbourne Plus Innovation Badge",
  },
];

export const blogs: {
  title: string;
  description: string;
  link: string;
}[] = [
  {
    title: "Why Businesses Need Private Offline AI for Sensitive Documents",
    description:
      "Explore the critical importance of implementing private, offline AI solutions for businesses handling sensitive documents. Learn about security benefits, compliance advantages, and practical implementation strategies.",
    link: "https://medium.com/@ebykachappillil/why-businesses-need-private-offline-ai-for-sensitive-documents-0d3b837aeb2f",
  },
  {
    title: "How I Set Up a Local Chatbot Using DeepSeek AI: No Cloud, No Fuss",
    description:
      "A practical guide to building and deploying a local chatbot using DeepSeek AI without relying on cloud services. Step-by-step implementation with code examples and deployment tips.",
    link: "https://medium.com/@ebykachappillil/how-i-set-up-a-local-chatbot-using-deepseek-ai-no-cloud-no-fuss-0ae4e9f57873",
  },
];

export const socials: {
  name: string;
  link: string;
}[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ebykachapillil",
  },
  {
    name: "Github",
    link: "https://github.com/ebythomas23",
  },
  {
    name: "Medium",
    link: "https://medium.com/@ebykachappillil",
  },
];
