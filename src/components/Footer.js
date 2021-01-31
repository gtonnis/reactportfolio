import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

import "./Cards.css"

function Footer() {
  return (
    <div className="footer-container">
      <h2>Social Media</h2>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h3 className="footer-link-items">
              <a
                href="linkedin.com/in/greg-tonnis-6a71b851"
                target="_blank"
                rel="noreferrer"
                className="contact-details"
              >
                <span>LinkedIn</span>
              </a>
            </h3>

            <h3 className="footer-link-items">
              <a
                id="profile-link"
                href="https://github.com/gtonnis?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="contact-details"
              >
                <span>GitHub</span>
              </a>
            </h3>

            <h3 className="footer-link-items">
              <a
                href="https://twitter.com/tonnis_greg"
                target="_blank"
                rel="noreferrer"
                className="contact-details"
              >
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
            </h3>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <Link
              className="social-icon-link fa-github"
              to="/https://github.com/gtonnis?tab=repositories"
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </Link>

            <Link
              className="social-icon-link twitter"
              to="/https://twitter.com/tonnis_greg"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link fab fa-linkedin"
              to="/linkedin.com/in/greg-tonnis-6a71b851"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
      <small className="website-rights">www.gregtonnis.dev © 2020</small>
    </div>
  )
}

export default Footer
