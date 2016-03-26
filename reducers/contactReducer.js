const contact = (state, action) => {
    
    switch(action.type) {
        case 'ADD_CONTACT' : {
            return { 
                id: action.id,
                name: action.name
            }
        };
        default: return state;
    }
}

export default contact;

