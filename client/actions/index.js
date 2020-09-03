export const COLLECT_TITLE = 'COLLECT_TITLE'
export const COLLECT_DESCRIPTION = 'COLLECT_DESCRIPTION'

export const collectTitle = (title) => {
  return {
    type: 'COLLECT_TITLE',
    title: title
  }
}

export const collectDescription = (description) => {
  return {
    type: 'COLLECT_DESCRIPTION',
    description: description
  }
}
