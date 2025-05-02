'use client'

import React from 'react'
import { motion } from 'framer-motion'

const MotionSection = motion('section')

const projects = [
  {
    title: 'Personal Website',
    description: 'The site you’re looking at right now — built with Next.js, TypeScript, Tailwind, and Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/kurtfchua/personal-website'
  },
]

const Projects = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 3.6 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto px-6 py-16 text-left"
    >
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              {project.tech.join(' • ')}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </MotionSection>
  )
}

export default Projects
