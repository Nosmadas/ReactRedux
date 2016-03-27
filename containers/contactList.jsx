import { connect } from 'react-redux'
import Contacts from '../component/contacts'
import { deleteContact } from '../actions/'

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onContactClick: (id) => dispatch(deleteContact(id))
    }
}

const ContactList = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactList