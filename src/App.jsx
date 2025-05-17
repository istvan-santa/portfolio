import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 text-gray-900 dark:text-gray-100 font-sans scroll-smooth transition duration-300">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-900 shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Istvan Santa</h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-sm px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          <ul className={`md:flex gap-6 text-sm font-medium ${menuOpen ? 'block absolute top-16 left-0 w-full bg-white dark:bg-zinc-900 px-4 py-4 shadow md:static md:bg-transparent' : 'hidden md:flex'}`}>
            <li><a href="#about" className="block py-2 md:py-0 hover:text-blue-600">À propos</a></li>
            <li><a href="#skills" className="block py-2 md:py-0 hover:text-blue-600">Compétences</a></li>
            <li><a href="#projects" className="block py-2 md:py-0 hover:text-blue-600">Projets</a></li>
            <li><a href="#contact" className="block py-2 md:py-0 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section className="text-center py-32 px-4">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            Istvan Santa
          </motion.h1>
          <motion.p className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}>
            Développeur Web & Futur Data Analyst
          </motion.p>
          <motion.a href="#projects"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg shadow hover:shadow-xl hover:scale-105 transform transition"
            whileHover={{ scale: 1.05 }}>
            Voir mes projets
          </motion.a>
        </section>

        {/* COMPETENCES */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-zinc-800" id="skills">
          <div className="max-w-5xl mx-auto">
            <motion.h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}>
              Compétences
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-gray-800 dark:text-gray-100">
              {[
                "HTML", "CSS", "JavaScript", "React",
                "Node.js", "Express", "MongoDB", "Git",
                "GitHub", "Responsive Design", "Python (en cours)", "SQL (en cours)"
              ].map((skill, index) => (
                <motion.div key={index} className="bg-white dark:bg-zinc-700 rounded-xl shadow p-4 text-sm font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}>
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETS */}
        <section className="bg-white dark:bg-zinc-900 py-20 px-4" id="projects">
          <div className="max-w-6xl mx-auto">
            <motion.h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}>
              Projets
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[{
                title: "Projet Kasa",
                description: "Site de location avec React – filtres, pages dynamiques, responsive design.",
                skills: "React, Routing, Props, Sass",
                link: "https://github.com/istvan-santa/kasa-app"
              }, {
                title: "Mon Vieux Grimoire",
                description: "Application fullstack de notation de livres.",
                skills: "Node.js, Express, MongoDB, API REST",
                link: "https://github.com/istvan-santa/P7-Dev-Web-livres"
              }].map((project, index) => (
                <motion.div key={index} className="bg-gray-50 dark:bg-zinc-800 rounded-xl shadow-md p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">{project.description}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Compétences : {project.skills}</p>
                  <a href={project.link} className="text-blue-600 hover:underline">Voir sur GitHub</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-20 px-4 bg-gray-100 dark:bg-zinc-800" id="contact">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}>
              Contact
            </motion.h2>

            <form action="https://formspree.io/f/mblowpql" method="POST" className="space-y-4 px-2">
              <input type="text" name="name" placeholder="Votre nom" required className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-zinc-700" />
              <input type="email" name="email" placeholder="Votre email" required className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-zinc-700" />
              <textarea name="message" placeholder="Votre message" required className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-zinc-700"></textarea>
              <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Envoyer</button>
            </form>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-lg">
              <a href="https://github.com/istvan-santa" className="text-blue-600 hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/istvan-santa-835165365/" className="text-blue-600 hover:underline">LinkedIn</a>
              <a href="https://taplink.cc/istvansanta" className="text-blue-600 hover:underline">Taplink</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
