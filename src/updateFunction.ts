import { Contact, EditContact } from "./types";

const updateContact = <T> (target:T, formContact:T):T => {
    target = formContact
    return target;
}
