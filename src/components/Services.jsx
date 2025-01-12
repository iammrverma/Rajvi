import React from 'react'
import ReusableSection from './ReusableSection'
import ServiceGlance from './ServiceGlance'
import Footer from './Footer'

const Services = () => {
  return (
    <div>
      <ReusableSection
        children={<ServiceGlance />}
        styles={{ marginBottom: "5rem" }}
      />
      <ReusableSection children={<Footer/>} />
    </div>
  )
}

export default Services