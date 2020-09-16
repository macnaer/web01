import React, { Fragment } from "react";
import "./contact-list.css";

// Include Contact item
import ContactItem from "./contact-item/contact-item";

const ContactList = ({ ContactList, isFavorite }) => {
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
      />
    );
  });
  return (
    <Fragment>
      <ul className="list-group pull-down" id="contact-list">
        {list}
      </ul>
    </Fragment>
  );
};

export default ContactList;
