let nextId = 1;

export const addContact = (text) => {
  return {
    type: 'ADD_CONTACT',
    id: nextId++,
    text
  }
}

export const deleteContact = (id) => {
    return {
        type: 'DELETE_CONTACT',
        id: id
    }
}