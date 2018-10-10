import React from 'react'

import aboutStyles from './about.module.css'

const About = () => {
    return (
        <section className="about">
            <div className="block-content">
                <h3 className="title">About Me</h3>
                <h3 className="subtitle">I am a <b>Full Stack Software Engineer</b> located near Amsterdam, the Netherlands.</h3>
                <p>
                    Specialised in the design and implementation of large-scale complex systems.
                    I enjoy working with independent inter-disciplinary teams and collaborative organizations.
                    I have been working actively on the areas of business analysis, interaction design, functional modeling, enterprise architecture, technical design, and full stack software development.
                    My principal interests revolve around the use of technology to develop flexible organizations and products that are responsive to change.
                    I have a genuine interest in all software technology, and use my broad experience to make life easier for the people around me, while encouraging others to do the same.
                </p>
                <div className={ `row ${aboutStyles.infoList}` }>
                    <p className="col-sm-6"><strong>Name: </strong> André Kampert</p>
                    <p className="col-sm-6"><strong>Email: </strong> andre@paragonia.nl</p>
                    <p className="col-sm-6"><strong>Phone: </strong> + 31 6 48 26 08 37</p>
                    <p className="col-sm-6">
                        <strong>Status: </strong>
                        <span className={ aboutStyles.hired}>Not available</span>
                    </p>
                </div>
            </div>
        </section>
     )
}

export default About