import React from 'react';
import Contact from './contact';

let contactId = 1;

export default class App extends React.Component {

    render() {
        console.log(this.context);
        const {store} = this.context
        
        return <div>Add contacts here
            
            <Contact contacts={store.getState()} onContactClick={() => store.dispatch({
                type: 'ADD_CONTACT',
                name: 'Sean',
                id: contactId++
            }) } />
        </div>;
    }
}

App.contextTypes = {store: React.PropTypes.object};