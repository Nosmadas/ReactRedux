import React from 'react'

const contact = ({ onClick, text }) => (
  <li onClick={onClick}>
    {text}
  </li>
)

export default contact;
