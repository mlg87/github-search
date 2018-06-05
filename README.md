# Objective

Using the GitHub repository search api ( https://developer.github.com/v3/search/#search-repositories) build an app that displays repository info for a query. The site should be a react app that allows for text searching and the option to sort by either relevance (score), or the number of stars. This site should query an API that you write in node. The node API should implement response caching to prevent more requests than necessary being made to GitHub. The search results should contain the repository name, description, number of stars, language, and the owners name.

# Running locally

After cloning the repo, from the root run `docker-compose up`. go to `localhost:3007` in your browser for the client. api is running on `localhost:3000`
