import React from 'react'

import Layout from '../components/layout'

import imgAvatar from '../images/avatar/avatar-195x195.png'
import imgAvatar2x from '../images/avatar/avatar-390x390-2x.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Profile = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 huge-side left-side">
                    <div className="huge-content">
                        <div className="crt-card-avatar">
                            <img className="avatar avatar-195"
                                 src={imgAvatar}
                                 srcSet={`${imgAvatar2x} 2x`}
                                 width="195"
                                 height="195"
                                 alt="Avatar"/>
                        </div>
                        <h1>André Kampert</h1>
                        <h2>Software Engineer</h2>
                        <ul className="social-icons">
                            <li>
                                <a href="https://linkedin.com/in/andrekampert/" className="social-icon">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/andrekampert" className="social-icon">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-8 huge-side right-side">
                    <section className="content about">
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
                            <div className="info-list row">
                                <p className="col-sm-6"><strong>Name: </strong> André Kampert</p>
                                <p className="col-sm-6"><strong>Email: </strong> andre@paragonia.nl</p>
                                <p className="col-sm-6"><strong>Phone: </strong> + 31 6 48 26 08 37</p>
                                <p className="col-sm-6"><strong>Status: </strong> Not available</p>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    )
}

const IndexPage = () => (
  <Layout>
    <Profile/>
  </Layout>
)

export default IndexPage
