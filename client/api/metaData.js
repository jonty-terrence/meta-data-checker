import request from 'superagent'

const dataUrl = 'http://localhost:3000/api/v1'

export function addToFile (data) {
  return request
    .post(dataUrl)
    .send(data)
}
