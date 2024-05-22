import React from "react";
import {items} from "../../items";
import { ReactComponent as Mail } from '../../img/icons8-mail.svg';
import { ReactComponent as Telegram } from '../../img/icons8-telegram.svg';
import { ReactComponent as Whatsapp } from '../../img/icons8-whatsapp.svg';

export const Services = (props) => {
    const [currentPriceItem, setCurrentPriceItem] = React.useState(items[0]);
    const els = [
        {
            id: 0,
            el: <Whatsapp className={'servicesIcon'}/>
        },
        {
            id: 1,
            el: <Telegram className={'servicesIcon'}/>
        },
        {
            id: 2,
            el: <Mail className={'servicesIcon'}/>
        },
        {
            id: 3,
            el: <Mail className={'servicesIcon'}/>
        }
    ]

    return (
        <div className={'servicePage'}>
            <div className={'pricesItems'}>
                {items.map(item => <div className={currentPriceItem.id === item.id ? 'selectedPriceItem' : 'priceItem'} onClick={() => {setCurrentPriceItem(item)}}>{item.title}</div>)}
            </div>
            <div className={'servicesInfo'}>{currentPriceItem.desc.map(item => <div className={'servicesItem'}>{els[currentPriceItem.id].el}{item}</div>)}</div>
        </div>
    );
};