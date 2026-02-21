import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import devsyncImage from "@/assets/images/DevSync.png";
import snapstreamImage from "@/assets/images/SnapStream.png";
import aceInterviewAIImage from "@/assets/images/AceInterview.png"

import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2024",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Boosted user engagement by 60%" },
      { title: "Achieved a 45% faster load time" },
      { title: "Increased conversion rates by 30%" },
    ],
    link: "https://dark-saa-s-landing-page-deepesh.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2024",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://saa-s-landing-page-deepesh-wm47.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Layers Co",
    year: "2025",
    title: "Layers Saas Landing Page",
    results: [
      { title: "Enhanced design efficiency by 50%" },
      { title: "Increased sign-ups by 40%" },
      { title: "Reduced bounce rate by 35%" },
    ],
    link: "https://layers-saas-landing-page.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Devsync",
    year: "2025",
    title: "Remote Interview Platform",
    results: [
      { title: "Integrated real-time video calls" },
      { title: "Implemented seamless screen sharing" },
      { title: "Refined applicant evaluation" },
    ],
    link: "https://dev-sync-lake.vercel.app/",
    image: devsyncImage,
  },
  {
    company: "SnapStream",
    year: "2025",
    title: "Screen Recorder web App",
    results: [
      { title: "Built fast screen recording with Next.js" },
      { title: "Enabled secure video uploads and sharing" },
      { title: "Optimized performance for playback" },
    ],
    link: "https://snap-stream-tan.vercel.app/",
    image: snapstreamImage,
  },
  {
    company: "AceInterview-AI",
    year: "2025",
    title: "AI Interview Platform",
    results: [
      { title: "Integrated Gemini API for dynamic question generation" },
      { title: "Provided personalized feedback for candidates" },
      { title: "Improved interview preparation efficiency" },
    ],
    link: "https://ace-interview-frontend.vercel.app/",
    image: aceInterviewAIImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concept into engaging digital experiences." />
        <div className="md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400
                 inline-flex gap-2 font-bold uppercase tracking-widest 
                 text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full
                md:w-auto px-6 rounded-xl font-semibold inline-flex items-center
                justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full
                    lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};
