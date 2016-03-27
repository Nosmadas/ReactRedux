const contact = (state, action) => {
    
    switch(action.type) {
        case 'ADD_CONTACT' : {
            return { 
                id: action.id,
                text: action.text
            }
        };
        default: return state;
    }
}

export default contact;

