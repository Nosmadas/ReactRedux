let nextId = 0
export const addContact = (text) => {
  return {
    type: 'ADD_CONTACT',
    id: nextId++,
    text
  }
}