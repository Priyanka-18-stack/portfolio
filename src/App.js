import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

export default function App() {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "API", icon: <FaDatabase /> },
  ];

  const projects = [
    {
      title: "🎬 Movie React App",
      description:
        "A sleek movie browsing app built with React, JavaScript, HTML, and CSS.",
      link: "https://movie-4nqq-git-main-priyankas-projects-c93a9431.vercel.app/",
    },
    {
      title: "📺 Netflix Login Clone",
      description:
        "A React frontend + Node.js/Express backend project replicating Netflix login.",
      link: "https://netflix-login-kappa-ten.vercel.app/",
    },
    {
      title: "🌦️ Weather Report App",
      description: "Weather forecast app using OpenWeather API and React.",
      link: "https://weather-app-r7yv.vercel.app/",
    },
    {
      title: "🛒 Nostra",
      description:
        "Front-end clothing e-commerce website built using HTML, CSS, and JavaScript.",
      link: "https://priyanka-18-stack.github.io/nostra/",
    },
    {
      title: "📬 Bulk Mail Sender",
      description:
        "Full-stack bulk email sender using Node.js, Express, React, MongoDB, and Nodemailer.",
      link: "https://bulkmail1-ge3v6p79i-priyankas-projects-c93a9431.vercel.app/",
    },
    {
      title: "📝 Task Management App",
      description:
        "Functional and responsive task management app built with React.",
      link: "https://task-manager-eta-ten-12.vercel.app/",
    },
  ];

  // motion variants
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconHover = { scale: 1.2, rotate: 8 };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
          <h1 className="text-xl md:text-2xl font-semibold">Priyanka</h1>
          <nav className="space-x-4 text-sm md:text-base">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="text-center py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Hi, I'm Priyanka 👋
          </motion.h2>
          <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto">
            A passionate <strong>MERN stack fresher</strong> building dynamic, responsive web applications using MongoDB, Express, React, and Node.js.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            🚀 I am a passionate MERN stack fresher eager to start my career in web development. Skilled in MongoDB, Express.js, React, and Node.js, I love solving problems and building responsive apps. Excited to contribute to real-world projects and grow as a full-stack developer.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center shadow-sm"
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="text-4xl mb-3 text-blue-600">{s.icon}</div>
                <div className="text-sm font-medium text-gray-800">{s.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <motion.article
                key={idx}
                className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm hover:shadow-lg transition"
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{p.description}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Project →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-3">Contact</h3>
          <p className="mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>

          <div className="flex justify-center items-center gap-6 text-2xl">
            <motion.a
              href="https://github.com/Priyanka-18-stack"
              target="_blank"
              rel="noreferrer"
              whileHover={iconHover}
              whileTap={{ scale: 0.95 }}
              className="hover:text-gray-200"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/priyanka-rajaram-935b5b1b2"
              target="_blank"
              rel="noreferrer"
              whileHover={iconHover}
              whileTap={{ scale: 0.95 }}
              className="hover:text-gray-200"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="mailto:priyanka1802.work@gmail.com"
              whileHover={iconHover}
              whileTap={{ scale: 0.95 }}
              className="hover:text-gray-200"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Priyanka. All rights reserved.
      </footer>
    </div>
  );
}
