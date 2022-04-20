import React from 'react'

import aboutStyles from './about.module.css'

const About = () => {
  return (
    <section className="about">
      <div className="block-content">
        <h3 className="title">About Me</h3>
        <h3 className="subtitle">
          I am a <b>Full Stack Software Engineer</b> located near{' '}
          <b>Amsterdam</b>, the Netherlands.
        </h3>
        <div className={`row ${aboutStyles.infoList}`}>
          <p className="col-sm-12">
            <strong>Status: </strong>
            <span className={aboutStyles.hired}>Unavailable</span>
          </p>
        </div>
        <p>
          I enjoy working with stakeholders and being at the forefront of
          business and technology to solve challenging problems in creative
          ways. Specialised in the design and implementation of large-scale
          complex systems, I have a lot of experience with full-stack software
          development. I am most effective working within agile
          inter-disciplinary teams.
        </p>
        <p>
          I have a no-nonsense personality. My core values are honesty and
          transparency. I communicate directly, but respectfully and with an
          open mind. I care deeply about the well-being of our planet and its
          inhabitants and I want my professional efforts to positively impact
          those. I enjoy a healthy balance between working from home and on
          location.
        </p>
        <p>
          I try to live a healthy lifestyle with my family. In our free time, we
          enjoy a variety of sports played at a casual level, visiting cultural
          events and playing Mario Kart competitively.
        </p>
      </div>
    </section>
  )
}

export default About
