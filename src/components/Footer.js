import React, { useContext } from 'react'
import '../App.css';
import { LanguageContext } from '../LanguageContext'





function Footer() {
    const [language, setLanguage] = useContext(LanguageContext)

    return (
        <div className="footer" >
            <h2 className="footer-label">{language === "en" ? "Contact us" : "Kontaktirajte nas"}</h2>
            <p className="footer-item">
                <span className="footer-placeholder">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.499939 5.26133C0.499945 7.9697 10.0382 18.4147 13.8139 16.824C17.5895 15.2334 16.2519 13.3397 16.3389 13.2823C16.4259 13.2249 13.8139 11.0948 13.8139 11.0948C13.1252 10.6434 11.6791 10.1781 11.4036 11.9281C8.79238 11.3339 4.89667 8.4595 5.09095 5.78217C6.00915 5.64328 7.66192 5.15716 6.92736 4.32381C6.19279 3.49047 5.43526 2.86545 3.71365 1.4071C1.99204 -0.0512479 0.499933 2.55296 0.499939 5.26133Z" fill="#484848" />
                    </svg>
                </span>
    00385921775237
        </p>
            {/* <br />
            <p className="footer-item">
                <span className="footer-placeholder">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.499939 5.26133C0.499945 7.9697 10.0382 18.4147 13.8139 16.824C17.5895 15.2334 16.2519 13.3397 16.3389 13.2823C16.4259 13.2249 13.8139 11.0948 13.8139 11.0948C13.1252 10.6434 11.6791 10.1781 11.4036 11.9281C8.79238 11.3339 4.89667 8.4595 5.09095 5.78217C6.00915 5.64328 7.66192 5.15716 6.92736 4.32381C6.19279 3.49047 5.43526 2.86545 3.71365 1.4071C1.99204 -0.0512479 0.499933 2.55296 0.499939 5.26133Z" fill="#484848" />
                    </svg>
                </span>
        0038766325145
        </p> */}


            <br />
            <p style={{ fontSize: "16px" }} className="footer-item"><span className="footer-placeholder"><svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="15" height="9" rx="1.5" stroke="#484848" />
                <path d="M1 1L6.5 4.14286L8 5L9.5 4.14286L15 1" stroke="#484848" />
            </svg>
            </span>anto.erceg1979@gmail.com</p>
        </div>
    );
}

export default Footer;
