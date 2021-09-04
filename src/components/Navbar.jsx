import React, { useState } from "react";
import "../css/Navbar.css";
import {
    FaLinkedin,
    FaGithub,
    FaCodepen,
    FaDiscord,
    FaGlobe,
} from "react-icons/fa";

function Navbar() {
    const [isActive, setisActive] = useState(false);

    return (
        <>
            <header>
                <a href="https://react-portfolio-imniladri.vercel.app/">
                    <img src="favicon.ico" alt="React Logo" />
                    <h2>React</h2>
                </a>

                <div
                    className={isActive ? "menu_btn active" : "menu_btn"}
                    onClick={() => {
                        setisActive(!isActive);
                    }}
                >
                    <span className="box box-1"></span>
                    <span className="box box-2"></span>
                    <span className="box box-3"></span>
                    <span className="box box-4"></span>
                    <span className="cross cross-1"></span>
                    <span className="cross cross-2"></span>
                </div>

                <nav className={isActive ? "active" : ""}>
                    <div className="nav_menu">
                        <a href="#home" className="btn">
                            Home
                        </a>
                        <a href="#about" className="btn">
                            About
                        </a>
                        <a href="#work" className="btn">
                            Works
                        </a>
                        <a href="#biodata" className="btn">
                            Biodata
                        </a>
                        <a href="#contact" className="btn">
                            Contact
                        </a>
                    </div>

                    <div className="social_link">
                        <button className="btn">
                            <FaLinkedin />
                        </button>
                        <button className="btn">
                            <FaGithub />
                        </button>
                        <button className="btn">
                            <FaCodepen />
                        </button>
                        <button className="btn">
                            <FaDiscord />
                        </button>
                        <button className="btn">
                            <FaGlobe />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
