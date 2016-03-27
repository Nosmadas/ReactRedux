import contact from './contactReducer';

const contacts = (state = [], action) => {

        switch(action.type) {
        case 'ADD_CONTACT' : {
            return {contacts: [...state.contacts, contact(undefined, action)] }
        };
        case 'DELETE_CONTACT' : {
            return {contacts: state.contacts.filter(x => x.id !== action.id)}
        };
        
        default: return state;
    }
}

export default contacts;