import React from "react"
import "../App.css"

import "./HeroSection.css"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Hi, I'm Greg.</h1>
      <p>A Web Developer, located in Cincinnati, Ohio.</p>
      <p>I have learned HTML, CSS, and JavaScript through Free Code Camp.</p>
      <p>
        Earning Certifications for Responsive Web Design, and JavaScript
        Algorithms, Data Structures.
      </p>
      <p>
        I also enjoy creating art work, music, and teaching other's what I have
        learned.
      </p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Projects
        </Button> */}
      </div>
    </div>
  )
}

export default HeroSection
