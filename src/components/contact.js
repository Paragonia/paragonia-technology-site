import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faMobileAlt,
  faAt,
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className="content-blocks">
      <section className="contact">
        <div className="block-content">
          <h3 className="title">Get in touch</h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMobileAlt} />
                </div>
                <div className="contact-details">
                  <h5>Call me</h5>
                  <p>
                    {' '}
                    <a href="tel:+31648260837">+31 6 48 26 08 37‬</a>
                  </p>
                </div>
              </div>
              <div className="contact-content">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faAt} />
                </div>
                <div className="contact-details">
                  <h5>Email</h5>
                  <p>
                    info
                    <span style={{ display: 'none' }}>-</span>@
                    <span style={{ display: 'none' }}>-</span>
                    paragonia.nl
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="contact-content">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>

                <div className="contact-details">
                  <h5>Address</h5>
                  <p>
                    Madagaskarstraat 5<br />
                    1339 RD Almere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
