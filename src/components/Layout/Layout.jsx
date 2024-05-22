import React from "react";
import { Outlet } from 'react-router-dom';
import "../../App.css";
import {Header} from "./Header";
import JsonData from "../../data/data.json";
import {Footer} from "./Footer";


export const Layout = (props) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer data={JsonData.Contact} />
        </>
    );
};
