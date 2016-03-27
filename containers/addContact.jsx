import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'

const enterKey = 13;

const handleKeyDown = (e, callback) => {
    if (e.which == enterKey)
        callback();
}

const dispatchAndClear = (input, dispatch) => {
    dispatch(addContact(input.value))
    input.value = ''
}

let AddContact = ({ dispatch }) => {
    let input

    const callback = () => dispatchAndClear(input, dispatch);

    return (
        <div>
            <input onKeyDown={(e) => handleKeyDown(e, callback) } ref={node => { input = node } } />
            <button onClick={callback}>
                Add Contact
            </button>
        </div>
    )
}

AddContact = connect()(AddContact)

export default AddContact