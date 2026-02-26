import React from 'react'

import imgAvatar from '../images/avatar.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import About from '../components/about'
import Experience from '../components/experience'
import Education from '../components/education'
import Contact from '../components/contact'

import profileStyles from './profile.module.css'

const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 huge-side left-side">
          <div className="huge-content">
            <div>
              <img
                className={profileStyles.avatar}
                src={imgAvatar}
                width="195"
                height="195"
                alt="Avatar"
              />
            </div>
            <h1>André Kampert</h1>
            <p>Freelance Software Engineer</p>
            <ul className={profileStyles.socialIcons}>
              <li>
                <a href="https://github.com/andrekampert">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/andrekampert/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-8 huge-side right-side">
          <div className="content">
            <About />
            <Experience />
            <Education />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
