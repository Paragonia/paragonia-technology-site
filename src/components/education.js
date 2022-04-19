import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import timelineStyles from './timeline.module.css'

const Education = () => (
  <StaticQuery
    query={graphql`
      query EducationQuery {
        allMarkdownRemark(
          sort: { fields: [fileAbsolutePath], order: DESC }
          filter: { fileAbsolutePath: { regex: "/(education)/.*/" } }
        ) {
          totalCount
          edges {
            node {
              frontmatter {
                school
                location
                education
                start
                end
              }
              id
              excerpt(pruneLength: 500)
            }
          }
        }
      }
    `}
    render={data => (
      <section className="education">
        <div className="block-content">
          <h3 className="title">Education</h3>

          <div className="timeline education">
            <div className={timelineStyles.iconHolder}>
              {FontAwesomeIcon({ icon: faGraduationCap, className: '' })}
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="exp-holder">
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className="exp">
                      <div className="hgroup">
                        <h4>
                          {node.frontmatter.school} /{' '}
                          {node.frontmatter.location}
                        </h4>
                        <h5 className={timelineStyles.badge}>
                          {node.frontmatter.start} -{' '}
                          {node.frontmatter.end ? (
                            node.frontmatter.end
                          ) : (
                            <span className="current">Present</span>
                          )}
                        </h5>
                      </div>
                      <p>{node.frontmatter.education}</p>
                      {node.excerpt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default Education
