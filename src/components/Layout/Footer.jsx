import React from "react";
import "../../App.css";

export const Footer = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container contact-bottom">
          <div className="contact-info ">
            <div className="contactitem">
                <h3>
                  Контактная информация
                </h3>
            </div>
            <div className="contact-item">
              <p className="contactitem">
                <span>
                  Адрес
                </span>
                {props.data.address}
              </p>
            </div>
            <div className="contact-item">
              <p className="contactitem">
                <span>
                  Телефон
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p className="contactitem">
                <span>
                  Электронная почта
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2014-2024 SMS Retail
          </p>
        </div>
      </div>
    </div>
  );
};
