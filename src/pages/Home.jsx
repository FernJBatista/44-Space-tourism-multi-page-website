import React from 'react'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import CallToAction from '../components/Home/CallToAction'

const Home = () => {
  return (
    <main className="relative min-h-screen w-full bg-gray-900">
      <Navbar />
      <div className="pt-24 px-6">
        <Hero />
        <Features />
        <CallToAction />
      </div>
    </main>
  )
}

export default Home 