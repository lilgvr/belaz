import React from "react";
import ContactsBlockInfoItem from "./ContactsBlockInfoItem.jsx";
import style from "./ContactsBlock.module.scss";
const ContactsBlockInfo = (props) => {
  let contacts = []
  if (props.contacts !== undefined){
    contacts = props.contacts.map((e) => (
        <ContactsBlockInfoItem
            id={e.id}
            key={e.id}
            icon={e.icon}
            title={e.title}
            text={e.text}
        />
    ));
  }
  return <div className={style.block}>{contacts}</div>;
};

export default ContactsBlockInfo;
