import React from "react";
import "./Language.css";
import useLocalStorage from '../../hooks/use-localstorage';
import i18n from '../../i18n';

export const Language = (props) => {
    const [language, setLanguage] = useLocalStorage('language', 'ru');

    const handleLenguageChangeToEN = () => {
        i18n.changeLanguage('en');
        setLanguage('en');
    };

    const handleLenguageChangeToRU = () => {
        i18n.changeLanguage('ru');
        setLanguage('ru');
    };
    return (
        <div className="language">
            <div className={language === 'en' ? 'languageItemActive' : "languageItem"} onClick={handleLenguageChangeToEN} disabled={language === 'en'}>
                en
            </div>
            <div className={language === 'ru' ? 'languageItemActive' : "languageItem"} onClick={handleLenguageChangeToRU} disabled={language === 'ru'}>
                ru
            </div>
        </div>
    );
};