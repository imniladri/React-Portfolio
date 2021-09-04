import React from "react";
import "../css/Navbar.css";

function Navbar() {
    return (
        <>
            <header>
                <a href="https://react-portfolio-imniladri.vercel.app/">
                    <img src="favicon.ico" alt="React Logo" />
                    <h2>React</h2>
                </a>

                <div className="menu_btn">
                    <span className="box box-1"></span>
                    <span className="box box-2"></span>
                    <span className="box box-3"></span>
                    <span className="box box-4"></span>
                    <span className="cross cross-1"></span>
                    <span className="cross cross-2"></span>
                </div>

                {/* <nav></nav> */}
            </header>
        </>
    );
}

export default Navbar;
