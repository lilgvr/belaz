import React from 'react';
import style from "./ContactsBlock.module.scss"
import HTMLReactParser from "html-react-parser";
const ContactsBlockAbout = (props) => {
    let about = ''
    if(props.text !== undefined){
        let texts = props.text.split("\r\n")
        for (let text of texts) {
            if(text !== ""){
                about += `<p>${text}</p>`
            }
        }
    }
    return (
        <div className={style.block}>
            <div  className={style.formTitle}>О Компании</div>
            {HTMLReactParser(about)}
        </div>
    );
};

export default ContactsBlockAbout;