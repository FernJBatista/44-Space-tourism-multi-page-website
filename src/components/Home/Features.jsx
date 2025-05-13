import React from 'react'

const Features = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Why Choose Space Tourism?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Experience Zero Gravity</h3>
          <p>Float freely in space and experience true weightlessness.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4">See Earth from Space</h3>
          <p>Witness the breathtaking view of our planet from orbit.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Professional Training</h3>
          <p>Get trained by experienced astronauts before your journey.</p>
        </div>
      </div>
    </section>
  )
}

export default Features 