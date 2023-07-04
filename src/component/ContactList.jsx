import React from "react";
import ContactItem from "./ContactItem";
const ContactList = ({ contacts, deleteContact, changeStatus }) => {
  return (
    <div className="list">
      {contacts.map((item) => (
        <ContactItem
          changeStatus={changeStatus}
          key={item.id}
          item={item}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
