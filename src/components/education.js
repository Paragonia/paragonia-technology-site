import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import timelineStyles from './timeline.module.css'

const Education = () => {
    return (
        <section className="education">
            <div className="block-content">
                <h3 className="title">Education</h3>
                
               <div className="timeline education">
                    <div className={ timelineStyles.iconHolder }>
                        { FontAwesomeIcon({icon: faGraduationCap, className: ''}) }
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="exp-holder">
                                <div className="exp">
                                    <div className="hgroup">
                                        <h4>Avans Hogeschool / Den Bosch</h4>
                                        <h5 className={ timelineStyles.badge }>1997 - 2001</h5>
                                    </div>
                                    <p>Bachelor of Applied Science (BASc)</p>
                                    <p>Studied Computer Science; participated in programming contents; Followed internships at Philips Creative Display Solutions, Omron, and Ordina Technology Consulting.</p>
                                </div>
                                <div className="exp">
                                    <div className="hgroup">
                                        <h4>Dr. Mollercollege / Waalwijk</h4>
                                        <h5 className={ timelineStyles.badge }>1991 - 1997</h5>
                                    </div>
                                    <p>Pre-university education (VWO)</p>
                                    <p>Graduated in Dutch, English, German, math, physics, chemistry and biology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
}

export default Education