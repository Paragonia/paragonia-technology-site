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
                  <FontAwesomeIcon icon={faAt} />
                </div>
                <div className="contact-details">
                  <h5>Email</h5>
                  <p>
                    andre
                    <span style={{ display: 'none' }}>-</span>@
                    <span style={{ display: 'none' }}>-</span>
                    paragonia.nl
                  </p>
                </div>
              </div>
              <div className="contact-content">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMobileAlt} />
                </div>
                <div className="contact-details">
                  <h5>Phone</h5>
                  <p>
                    +31
                    <span style={{ display: 'none' }}>-</span> 6
                    <span style={{ display: 'none' }}>-</span> 48
                    <span style={{ display: 'none' }}>-</span> 26
                    <span style={{ display: 'none' }}>-</span> 08
                    <span style={{ display: 'none' }}>-</span> 37
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
                    Madagaskarstraat
                    <span style={{ display: 'none' }}>-</span> 5<br />
                    <span style={{ display: 'none' }}>-</span>
                    1339
                    <span style={{ display: 'none' }}>-</span> RD
                    <span style={{ display: 'none' }}>-</span> Almere
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
