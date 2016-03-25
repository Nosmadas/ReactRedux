const contact = (state, action) => {
    
    switch(action.type) {
        case 'ADD_CONTACT' : {
            return {
                name: action.name
            }
        }
        default: return state;
    }
}

export default contact;