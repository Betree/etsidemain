import "isomorphic-fetch"
import fetch from 'isomorphic-fetch'


class HttpAPI {
  static prepareResponse(promise) {
    return new Promise((fulfill, reject) => {
      return promise.then(response => {
        return response.text().then((body) => {
          body = body ? JSON.parse(body) : null
          if (!response.ok)
            reject(body)
          else
            fulfill(body)
        })
      }).catch(e => {
        console.error(e)
        // Special case when no internet connection
        reject('noInternet')
      })
    })
  }

  static get(resourceUrl) {
    return HttpAPI.prepareResponse(fetch(resourceUrl))
  }
}


export default HttpAPI
