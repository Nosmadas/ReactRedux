import React from 'react'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import siteCss from '../css/site.css'

const contact = ({ text, id, onContactClick }) => (
  <li>
    <span>{text}</span>
    <i className='fa fa-trash' onClick={() => onContactClick(id)}></i>
  </li>
)

export default contact;
