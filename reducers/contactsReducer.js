import contact from './contactReducer';

const contacts = (state = [], action) => {
        switch(action.type) {
        case 'ADD_CONTACT' : {
            return [...state, contact(undefined, action)]
        };
        default: return state;
    }
} 

export default contacts;