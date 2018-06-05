import React from 'react' // eslint-disable-line

import './About.css'

const About = () => (
  <div className="about">
    <h3 className="about__header">Objective</h3>
    <p>
      Using the{' '}
      <a
        className="about__link"
        href="https://developer.github.com/v3/search/#search-repositories"
      >
        GitHub repository search api,
      </a>{' '}
      build an app that displays repository info for a query. The site should be
      a react app that allows for text searching and the option to sort by
      either relevance (score), or the number of stars. This site should query
      an API that you write in node. The node API should implement response
      caching to prevent more requests than necessary being made to GitHub. The
      search results should contain the repository name, description, number of
      stars, language, and the owners name.
    </p>
  </div>
)

export default About
