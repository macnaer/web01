import React, { Fragment } from "react";
import "./contact-list.css";

// Include Contact item
import ContactItem from "./contact-item/contact-item";

const ContactList = ({
  ContactList,
  isFavorite,
  editContact,
  onDeleteContact,
}) => {
  const list = ContactList.map((item) => {
    return (
      <ContactItem
        key={item.id}
        name={item.name}
        gender={item.gender}
        address={item.address}
        image={item.image}
        phone={item.phone}
        email={item.email}
        favorite={item.favorite}
        isFavorite={() => isFavorite(item.id)}
        editContact={() => editContact(item.id)}
        onDeleteContact={() => onDeleteContact(item.id)}
      />
    );
  });
  return (
    <Fragment>
      <div className="container">
        <div className="card card-default" id="card_contacts">
          <div
            id="contacts"
            className="panel-collapse collapse show"
            aria-expanded="true"
          ></div>
          <ul className="list-group pull-down" id="contact-list">
            {list.length !== 0 ? list : <h2>Contact list is empty</h2>}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactList;
