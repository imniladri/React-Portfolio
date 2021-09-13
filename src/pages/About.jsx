import React from "react";
import "../css/About.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";
import AboutData from "../data/AboutData";

function About() {
    return (
        <>
            <section id="about">
                <div className="about container">
                    <Fade bottom cascade>
                        <div className="about_head">
                            <span>{AboutData.about_head_tag}</span>
                            <h1>{AboutData.about_head_title}</h1>
                        </div>
                    </Fade>

                    <div className="about_content row">
                        <Fade left cascade>
                            <div className="col-lg-8">
                                <h2>
                                    Hi, I'm{" "}
                                    <span>{AboutData.about_content_name}</span>
                                </h2>
                                <p>{AboutData.about_content_desc}</p>
                            </div>
                        </Fade>

                        <div className="col-lg-4">
                            <div className="exp">
                                <Bounce>
                                    <h4>{AboutData.about_content_exp}</h4>
                                </Bounce>
                                <RubberBand>
                                    <h6>
                                        Years of <span>Experience</span>
                                    </h6>
                                </RubberBand>
                            </div>
                        </div>
                    </div>

                    <div className="about_footer row">
                        <Fade bottom cascade>
                            <div className="my-2 col-12 col-sm-6 col-lg-3">
                                <span>Name:</span>
                                <p>{AboutData.about_footer_name}</p>
                            </div>
                            <div className="my-2 col-12 col-sm-6 col-lg-4">
                                <span>Email:</span>
                                <p>{AboutData.about_footer_email}</p>
                            </div>
                            <div className="my-2 col-12 col-sm-6 col-lg-3">
                                <span>Date of Birth:</span>
                                <p>{AboutData.about_footer_dob}</p>
                            </div>
                            <div className="my-2 col-12 col-sm-6 col-lg-2">
                                <span>From:</span>
                                <p>{AboutData.about_footer_place}</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
