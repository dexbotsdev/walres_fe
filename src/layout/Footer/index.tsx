
import React from "react";

export const Footer: React.FC = () => {
    return (
       <footer>
            <div className="container">
                <div className="row">
                    <div className="12">
                        <div>
                            <a className="logo" href="#"></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-inline links">
                            <li className="list-inline-item"><a href="/#about-us">About Us</a></li>
                            <li className="list-inline-item"><a href="/#how-does-it-work">How does it work</a></li>
                            <li className="list-inline-item"><a href="/#faq">FAQ</a></li>
                        </ul>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="mb-0 copyright">Copyright 2023 © WalRES  | <a href="/en/privacy-policy">Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
