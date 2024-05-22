import React from "react";
import "../../App.css";
import {Contacts} from "./Contacts";
import {Menu} from "./Menu";
import {Language} from "./Language";

export const Header = () => {
    return (
        <div className="header">
            <Menu />
            <Language />
            <Contacts />
        </div>
    );
};
