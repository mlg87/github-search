import React from 'react'

import '../styles/About.css'

const About = props => {
  return (
    <div className="about-container">
      <h3>Objective</h3>
      <p>
        Using the{' '}
        <a href="https://developer.github.com/v3/search/#search-repositories">
          GitHub repository search api,
        </a>{' '}
        build an app that displays repository info for a query. The site should
        be a react app that allows for text searching and the option to sort by
        either relevance (score), or the number of stars. This site should query
        an API that you write in node. The node API should implement response
        caching to prevent more requests than necessary being made to GitHub.
        The search results should contain the repository name, description,
        number of stars, language, and the owners name. You can include more
        info if you wish. Host the source code for this in a public GitHub repo
        and send a link to it no later than a week from today. Feel free to
        continue any improvements/tweaks you want to make after that but it
        should be functional by then.
      </p>
    </div>
  )
}

export default About
