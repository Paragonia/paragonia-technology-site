import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

import timelineStyles from './timeline.module.css'

const Experience = () => {
    return (
        <section className="experience">
            <div className="block-content">
                <h3 className="title">Experience</h3>

               <div className="timeline experience">
                    <div className={ timelineStyles.iconHolder }>
                        { FontAwesomeIcon({icon: faMedal, className: ''}) }
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="exp-holder">
                                <div className="exp">
                                    <div className="hgroup">
                                        <h4>Big Data Engineer / RIPE NCC</h4>
                                        <h5 className={ timelineStyles.badge }>Feb 2018 - <span className="current">Present</span></h5>
                                    </div>
                                    <p>
                                        More info coming soon...
                                    </p>
                                </div>

                                <div className="exp">
                                    <div className="hgroup">
                                        <h4>CTO / Product Foundry</h4>
                                        <h5 className={ timelineStyles.badge }>Jan 2014 - Feb 2018</h5>
                                    </div>
                                    <p>
                                        Responsible for the systems design, architecture, implementation and operations for a collaboration software application with a small team. Using CQRS and event sourcing to maintain a platform neutral journal with complete history of system interactions based on Akka Persistence, Protobuf and Cassandra. Building real-time projections using Kafka with Akka Streams and best-of-breed technologies. Implemented a front-end based on game mechanics using ES6, Phaser and AngularJS,
                                    </p>
                                </div>

                                <div className="exp">
                                    <div className="hgroup">
                                        <h4>Software Engineer / RIPE NCC</h4>
                                        <h5 className={ timelineStyles.badge }>Jan 2012 - Dec 2013</h5>
                                    </div>
                                    <p>
                                        Reimplement the Whois database, adding functionality and fixing long-standing issues. Replacing query, update and near real-time mirroring applications. Building a legacy proxy to support the transition. Implemented using reactive non-blocking IO based on Netty.
                                    </p>
                                </div>

                                <div className="exp">
                                    <div className="hgroup">
                                        <h4>Software Engineer / Trifork</h4>
                                        <h5 className={ timelineStyles.badge }>Nov 2011 - Jan 2012</h5>
                                    </div>
                                    <p>
                                        Developing a DRM system for a large publisher. Automated functional testing using Geb and Spock. Added new features to the exisiting application using CQRS and event sourcing with the Axon framework.
                                    </p>
                                </div>

                                <div className="exp">
                                    <div className="hgroup">
                                        <h4>Software Engineer / Randstad</h4>
                                        <h5 className={ timelineStyles.badge }>Aug 2009 - Oct 2011</h5>
                                    </div>
                                    <p>
                                        Building a new white-label web portal for Randstad companies for job searchers, employees and HR professionals using JSF, ADF, Oracle Rich Client. Consume and transform services data using Oracle ESB and BPM.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
}

export default Experience