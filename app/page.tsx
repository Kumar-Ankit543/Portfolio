"use client";

import { motion } from "framer-motion";
import {
  GithubIcon,
  Twitter,
  MailIcon,
  Terminal,
  Code2Icon,
  DatabaseIcon,
  PaletteIcon,
  Globe,
} from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";

export default function Home() {
  const projects = [
    {
      title: "Medium",
      description:
        "This project is a basic version of medium blog application.",
      link: "https://medium-blog-8d3.pages.dev/signup",
    },
    {
      title: "Venmo",
      description: "A payment wallet application very similar to PayTm",
      link: "https://github.com/Kumar-Ankit543/Vinemo",
    },
  ];

  const techStack = [
    {
      title: "Frontend",
      icon: <Code2Icon className="h-8 w-8 mb-4 text-white" />,
      technologies: ["React", "Next.js"],
    },
    {
      title: "Backend",
      icon: <DatabaseIcon className="h-8 w-8 mb-4 text-white" />,
      technologies: ["Node.js", "PostgreSQL", "REST APIs"],
    },
    {
      title: "UI/UX",
      icon: <PaletteIcon className="h-8 w-8 mb-4 text-white" />,
      technologies: ["Figma", "Responsive Design", "Animation"],
    },
    {
      title: "DevOps",
      icon: <Globe className="h-8 w-8 mb-4 text-white" />,
      technologies: ["Git", "Docker", "AWS"],
    },
  ];

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <div className="h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >
            Kumar Ankit
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-300 text-center max-w-lg mx-auto"
          >
            Crafting Digital Experiences Through Code
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 mt-8 justify-center"
          >
            <a
              href="https://github.com/Kumar-Ankit543"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <Button variant="outline" size="icon">
                <GithubIcon className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://x.com/kankit543?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <Button variant="outline" size="icon">
                <MailIcon className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="relative py-20">
        <WavyBackground className="w-full max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <Terminal className="w-12 h-12 mx-auto mb-8 text-white" />
            <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
            <p className="text-lg text-neutral-300">
              Well, well, well… look who is in need of a developer. You have
              come to the right place! Name’s Ankit, and I build web
              applications that don’t just work—they hustle. Frontend? Backend?
              Full stack? I do it all. I’ve crafted more projects than I can
              count, and every single one was built to impress. You need a
              sleek, high-performing website? Done. A robust backend that runs
              smoother than a well-oiled scam—I mean, system? No problem.
              Whether it’s React, Node.js, Postgres, or anything in between, I
              make it look easy.
            </p>
            <br></br>
            <p className="text-lg text-neutral-300">
              You’ve got an idea? I’ve got the code. Let’s make some digital
              magic happen. Call now—operators are standing by (just kidding,
              it’s just me).
            </p>
          </div>
        </WavyBackground>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-neutral-800/50 transition-colors"
              >
                <div className="text-center">
                  {category.icon}
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.technologies.map((tech) => (
                      <li key={tech} className="text-neutral-300">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Featured Projects
          </h2>
          <HoverEffect items={projects} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
          <p className="text-lg text-neutral-300 mb-8">
            I'm always open to new opportunities and collaborations.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-neutral-200"
          >
            Contact Me
          </Button>
        </div>
      </section>
    </main>
  );
}
