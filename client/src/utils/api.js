const API_URL = process.env.REACT_APP_API_URL

export default class API {
  async fetch(url, method = 'GET', body = null) {
    try {
      return await fetch(`${API_URL}/${url}`, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : body
      })
    } catch (error) {
      throw Error(error)
    }
  }
}
