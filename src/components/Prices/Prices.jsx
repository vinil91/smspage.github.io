import React from "react";
import { Range } from 'react-range';
import {items} from "../../items";
import "./Prices.css";


export const Prices = (props) => {
    const [currentPriceItem, setCurrentPriceItem] = React.useState(items[0]);
    const [values, setValues] = React.useState([0]);
    return (
        <div className={'pricePage'}>
            <div className={'pricesItems'}>
                {items.map(item => <div className={currentPriceItem.id === item.id ? 'selectedPriceItem' : 'priceItem'} onClick={() => {setCurrentPriceItem(item); setValues([0])}}>{item.title}</div>)}
            </div>
            <div>
            <div className={'priceText'}>{currentPriceItem.priceText}</div>
            <div className={'priceInfo'}>
                {values[0] === 0 ? <div className={'priceInfoEmpty'}>Двигайте бегунок, чтобы получить стоимость необходимой рассылки</div> : (<>
                    <div>{values} шт.</div>
                    <div>Цена: {values * currentPriceItem.price} рублей</div>
                </>)}
            </div>
            <div className={'priceRange'}>
                <Range
                    step={1000}
                    min={0}
                    max={500000}
                    values={values}
                    onChange={(values) => setValues(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '6px',
                                width: '100%',
                                backgroundColor: '#337ab7'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            className={'thumb'}
                            {...props}
                            style={{
                                ...props.style,
                                height: '42px',
                                width: '42px',
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}
                        />
                    )}
                />
            </div>
            </div>
        </div>
    );
};