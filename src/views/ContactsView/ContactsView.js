import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getIsLoading } from "redux/selectors";

const ContactsView = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <div>{isLoading && 'Request is sent...'}</div>
            <ContactForm />
            <Filter />
            <ContactList />
        </div>
    );
};

export default ContactsView;