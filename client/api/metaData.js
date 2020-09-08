import consume from './requestor'

export function addToFile (addedData) {
  return consume('/', 'post', addedData)
    .then(res => {
      return res.body
    })
}
