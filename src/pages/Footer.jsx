import React from "react";
import "../css/Footer.css";
import { FaHeart } from "react-icons/fa";

function Footer() {
    return (
        <>
            <section id="footer">
                <div className="footer">
                    <h4>
                        Developed with
                        <i>
                            <FaHeart />
                        </i>
                        by
                        <a href="https://imniladri.in/">Niladri Mondal</a>
                    </h4>
                    <h4>
                        This is a Open Source Template on
                        <a href="https://github.com/imniladri/React-Portfolio">
                            Github
                        </a>
                        <br />
                        Feel free to use it.
                    </h4>
                </div>
            </section>
        </>
    );
}

export default Footer;
