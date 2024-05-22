import React from "react";
import "../../App.css";
import { ReactComponent as Mail } from '../../img/icons8-mail.svg';
import { ReactComponent as Telegram } from '../../img/icons8-telegram.svg';
import { ReactComponent as Whatsapp } from '../../img/icons8-whatsapp.svg';

export const Contacts = (props) => {
    return (
        <div className="contacts">
            <a href="https://t.me/smsretail" target="_blank" rel="noreferrer" className='contactline'><Telegram />smsretail</a>
            <a href="https://api.whatsapp.com/send?phone=+79218654129" target="_blank" rel="noreferrer" className='contactline'><Whatsapp />smsretail</a>
            <a href="tel:88005554947" className='contactlinephone'>88005554947</a>
            <a href="mailto:smsretail@smsretail.com" target="_blank" rel="noreferrer" className='contactline'><Mail />smsretail</a>
        </div>
    );
};