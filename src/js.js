import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "🎬 Movie React App",
    description: "Movie React App A sleek and simple movie browsing app built with React, JavaScript, CSS, and HTML.",
    link: "https://movie-4nqq-git-main-priyankas-projects-c93a9431.vercel.app/"
  },
  {
    title: "📺 Netflix Login Clone",
    description: "Netflix-style login page built with React frontend and Node.js/Express backend..",
    link: "https://netflix-login-kappa-ten.vercel.app/"
  },
  {
    title: "🌦️ Weather Report App",
    description: "Weather forecast app using OpenWeather API and React.",
    link: "https://weather-app-r7yv.vercel.app/"
  },
  {
    title: "🛒 Nostra",
    description: "Nostra -front-end clothing e-commerce website built using HTML, CSS, and JavaScript",
    link: "https://priyanka-18-stack.github.io/nostra/"

  },
  {
    title: "📬 Bulk Mail Sender",
    description: "This project is a full-stack bulk email sender app built with Node.js, Express, React, MongoDB, and Nodemailer.",
    link: "https://bulkmail1-ge3v6p79i-priyankas-projects-c93a9431.vercel.app/"
  },
  {
    title: "📝Task Management App ",
    description: "Task Management App A functional and responsive Task Management Application built with React.",
    link: "https://task-manager-eta-ten-12.vercel.app/"
  }
];

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Priyanka</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4">
          Hi, I'm Priyanka 👋
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          A passionate MERN Stack fresher who loves building dynamic, responsive, and user-friendly web applications.
        </p>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="text-gray-700">
          🚀 I am a passionate MERN stack fresher eager to start my career in web development. Skilled in MongoDB, Express.js, React, and Node.js with a focus on building responsive apps. Love solving problems and learning new technologies quickly. Excited to contribute to real-world projects and grow as a full-stack developer.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-xl shadow">HTML</div>
            <div className="p-4 bg-white rounded-xl shadow">CSS</div>
            <div className="p-4 bg-white rounded-xl shadow">JavaScript</div>
            <div className="p-4 bg-white rounded-xl shadow">React</div>
             <div className="p-4 bg-white rounded-xl shadow">Node.js</div>
            <div className="p-4 bg-white rounded-xl shadow">Express.js</div>
             <div className="p-4 bg-white rounded-xl shadow">MongoDB</div>
              <div className="p-4 bg-white rounded-xl shadow">API</div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
        <p className="text-gray-700 mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="mailto:priyanka1802.work@gmail.com" className="hover:text-blue-600"><FaEnvelope /></a>

          <a href="https://github.com/Priyanka-18-stack" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaGithub /></a>
          <a href="https://linkedin.com/in/priyanka-rajaram-935b5b1b2" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Priyanka. All rights reserved.
      </footer>
    </div>
  );
}
