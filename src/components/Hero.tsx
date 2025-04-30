import React from 'react'

type HeroProps = {
  name: string
  title: string
}

const Hero: React.FC<HeroProps> = ({ name, title }) => {
  return (
    <section className="text-center py-20 px-4 bg-white text-black">
      <h1 className="text-4xl font-bold mb-2">Hi, I'm {name}</h1>
      <p className="text-xl text-gray-700">{title}</p>
    </section>
  )
}

export default Hero
