import contact from './contactReducer';

const contacts = (state = [], action) => {

        switch(action.type) {
        case 'ADD_CONTACT' : {
            return {contacts: [...state.contacts, contact(undefined, action)] }
        };
        default: return state;
    }
} 

export default contacts;