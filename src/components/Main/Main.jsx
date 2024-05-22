import React, {useState} from "react";
import emailjs from "emailjs-com";
import { useTranslation } from 'react-i18next';
import "../../App.css";

const initialState = {
    name: "",
    email: "",
    message: "",
};
export const Main = (props) => {
    const [{ name, email, message }, setState] = useState(initialState);
    const { t } = useTranslation();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const clearState = () => setState({ ...initialState });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);

        emailjs
            .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
            .then(
                (result) => {
                    console.log(result.text);
                    clearState();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <header id="header">
            <div className="intro">
                <div className="overlay mainPage">
                    <div className="intro-text">
                        <h2>
                            {t('titletitle')}
                            <span></span>
                        </h2>
                        <p className="mainRow">{t('titledesc1')}</p>
                        <p className="mainRow">{t('titledesc2')}</p>
                        <p className="mainRow">{t('titledesc3')}</p>
                    </div>

                    <div className="form">
                        <div>
                            <div className="section-title">
                                <h2>{t('formtitle')}</h2>
                                <p>{t('formdesc')}</p>
                            </div>
                            <form name="sentMessage" onSubmit={handleSubmit}>
                                <div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                placeholder={t('formplaceholder1')}
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                placeholder={t('formplaceholder2')}
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div id="success"></div>
                                <button type="submit" className="btn btn-custom btn-lg">
                                    {t('formbutton')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};