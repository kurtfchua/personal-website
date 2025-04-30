'use client'
import React from 'react'
import { motion } from 'framer-motion'

type HeroProps = {
  name: string
  title: string
}
const MotionDiv = motion('div')
const Hero: React.FC<HeroProps> = ({ name, title }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.75 }}
      className="text-center py-20 px-4 bg-white text-black"
    >
      <h1 className="text-4xl font-bold mb-2">Hi, I'm {name}!</h1>
      <p className="text-xl text-gray-700">{title}</p>
    </MotionDiv>
  )
}

export default Hero
