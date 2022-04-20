import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faLink } from '@fortawesome/free-solid-svg-icons'

import timelineStyles from './timeline.module.css'

const Experience = () => (
  <StaticQuery
    query={graphql`
      query ExperienceQuery {
        allMarkdownRemark(
          sort: { fields: [fileAbsolutePath], order: DESC }
          filter: { fileAbsolutePath: { regex: "/(experience)/.*/" } }
        ) {
          totalCount
          edges {
            node {
              frontmatter {
                position
                company
                title
                url
                start
                end
                keywords {
                  languages
                  technologies
                  ides
                  concepts
                }
              }
              id
              excerpt(pruneLength: 10000)
            }
          }
        }
      }
    `}
    render={data => (
      <section className="experience">
        <div className="block-content">
          <h3 className="title">Experience</h3>

          <div className="timeline experience">
            <div className={timelineStyles.iconHolder}>
              {FontAwesomeIcon({ icon: faMedal, className: '' })}
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="exp-holder">
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className="exp">
                      <div className="hgroup">
                        <h4>
                          {node.frontmatter.position} @{' '}
                          {node.frontmatter.company}
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
                      <p>
                        {node.frontmatter.title}
                        {node.frontmatter.url && (
                          <a
                            className={timelineStyles.iconLink}
                            href={`${node.frontmatter.url}`}
                          >
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        )}
                      </p>
                      <p>{node.excerpt}</p>
                      {node.frontmatter.keywords && (
                        <p>
                          {Object.keys(node.frontmatter.keywords).map(
                            (key, keyIndex) =>
                              node.frontmatter.keywords[key] &&
                              node.frontmatter.keywords[key].map(
                                (item, itemIndex) => (
                                  <span
                                    key={`${keyIndex}-${itemIndex}`}
                                    className={timelineStyles.badge}
                                  >
                                    {item}
                                  </span>
                                )
                              )
                          )}
                        </p>
                      )}
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

export default Experience
