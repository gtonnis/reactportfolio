import React from "react"
import "../../App.css"
import "../Contact.css"

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h1 className="projects-section-header">
          <u> Let's work together</u>
        </h1>
        <img id="image" src="images/profile.jpg" alt="Greg Tonnis" />
      </div>

      <div className="contact-links">
        <h3>
          <u>Contact me</u>
        </h3>
        <a href="tel:513-442-8232" className="contact-details">
          <i className="fas fa-mobile-alt"></i>
          <span>Phone:</span> (513)442-8232
        </a>
        <a href="mailto:greg@gregtonnis.dev" className="contact-details">
          <i className="fas fa-at"></i>
          <span>Email:</span> greg@gregtonnis.dev
        </a>

        <h5>
          <u> See my projects</u>
        </h5>
        <a
          id="profile-link"
          href="https://github.com/gtonnis?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="contact-details"
        >
          <i className="fab fa-github"></i>
          <span>GitHub:</span>
          https://github.com/gtonnis?tab=repositories
        </a>

        <h5>
          <u Social Media />
        </h5>
        <a
          href="https://twitter.com/tonnis_greg"
          target="_blank"
          rel="noreferrer"
          class="contact-details"
        >
          <i class="fab fa-twitter"></i>
          <span>Twitter:</span> @tonnis_greg
        </a>
        <a
          href="linkedin.com/in/greg-tonnis-6a71b851"
          target="_blank"
          rel="noreferrer"
          className="contact-details"
        >
          <i className="fab fa-linkedin"></i>
          <span>Linkedin:</span> linkedin.com/in/greg-tonnis-6a71b851
        </a>

        <h5>
          <u>Resume</u>
        </h5>
        <a
          href="https://drive.google.com/file/d/1RGaEEf75Iai45hf7Ugo8PK8ixIMPKx8f/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="contact-details"
        >
          <i className="fab fa-resume"></i>View Resume
        </a>
      </div>
    </section>
  )
}
