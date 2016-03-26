import React from 'react';

export default class contact extends React.Component {
    render() {
        console.log(this.props);
        return <div>
            {this.props.contacts.map(contact => <div key={contact.id}>Hello</div>) }

            <div onClick={this.props.onContactClick}>I am a contact </div>
             </div>
            }
        }

