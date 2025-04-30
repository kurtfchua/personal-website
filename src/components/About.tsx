'use client'

import React from 'react'
import { motion } from 'framer-motion'

const MotionSection = motion('section')

const About = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.75 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto px-6 py-16 text-left leading-relaxed text-lg text-gray-800"
    >
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="mb-4">
        I’m a software engineer with a passion for building thoughtful, human-centered experiences.
        I previously studied computer science at Cornell (BA in CS 20') and worked on backend systems at Cisco.
        Outside of programming, I write music and am a fan of poetry — blending creative storytelling with structured design.
      </p>
      <p>
        Whether I’m designing scalable APIs or composing atmospheric guitar textures, I care about clarity, emotion, and craft.
      </p>
    </MotionSection>
  )
}

export default About