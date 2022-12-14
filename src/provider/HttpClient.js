export class HttpClient {
  constructor() {

    this.get = (url, options) => {
      return fetch(url, { ...options, mode: 'cors' })
        .then(response => {
          if (response.ok) {
            return response
          }
          return response.json()
            .then(json => Promise.reject(json))
        })
        .then(response => response.json())
    }
  }
}
