import React, { PropTypes } from 'react'
import Contact from './contact'

const Contacts = ({ contacts, onContactClick }) => (
  <ul>
    {contacts.map(contact =>
      <Contact
        key={contact.id}
        {...contact}
        onContactClick={onContactClick}
      />
    )}
  </ul>
)

export default Contacts