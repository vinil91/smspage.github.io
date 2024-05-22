import React from "react";
import { NavLink } from 'react-router-dom';
import "../../App.css";
import { useTranslation } from 'react-i18next';


export const Menu = (props) => {
    const { t } = useTranslation();
    return (
        <nav id="menu" className="navbar navbar-default menu">
            <div>
                <ul className="menuitemsMobileContainer">
                    <div>
                    <li className="logoMobile">
                        <NavLink to="/" className="page-scroll noPad">
                            <div className={'logoDiv'} />
                        </NavLink>
                    </li>
                    </div>
                    <div className="menuitemsMobile">
                    <li className="itemContainer">
                        <NavLink to="/services">
                            {t('menuservices')}
                        </NavLink>
                    </li>
                    <li className="itemContainer">
                        <NavLink to="/prices" className="page-scroll">
                            {t('menuprices')}
                        </NavLink>
                    </li>
                    <li className="itemContainer">
                        <NavLink to="/blog" className="page-scroll">
                            {t('menublog')}
                        </NavLink>
                    </li>
                    <li className="itemContainer">
                        <NavLink to="/about" className="page-scroll nowrap">
                            {t('menuabout')}
                        </NavLink>
                    </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
};
