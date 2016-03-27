import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'

let AddContact = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(addContact(input.value))
        input.value = ''
      }}>
        Add Contact
      </button>
    </div>
  )
}

AddContact = connect()(AddContact)

export default AddContact