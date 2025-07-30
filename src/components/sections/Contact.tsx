import React from "react";
import { Contact } from "../../types";

interface Props {
  contact: Contact;
}

export const Contacts: React.FC<Props> = ({ contact }) => {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2>Contact</h2>
      <p>{contact.message}</p>

      {
        <p>
          <strong style={{ letterSpacing: 2 }}>Email: </strong>
          {contact.email}
        </p>
      }
      <p>
        <strong style={{ letterSpacing: 2 }}>Phone: </strong>
        {contact.phone}
      </p>
    </section>
  );
};
