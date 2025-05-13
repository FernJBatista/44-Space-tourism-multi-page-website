import React from 'react'
import Button from '../ui/Button'

const CallToAction = () => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Join us on an unforgettable adventure to space. Experience the thrill of space travel
        and create memories that will last a lifetime.
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="primary" size="lg">
          Book Your Flight
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </section>
  )
}

export default CallToAction 