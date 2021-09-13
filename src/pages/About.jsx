import React from "react";
import "../css/About.css";
import AboutData from "../data/AboutData";

function About() {
    return (
        <>
            <section id="about">
                <div className="about container">
                    <div className="about_head">
                        <span>{AboutData.about_head_tag}</span>
                        <h1>{AboutData.about_head_title}</h1>
                    </div>

                    <div className="about_content row">
                        <div className="col-lg-8">
                            <h2>
                                Hi, I'm{" "}
                                <span>{AboutData.about_content_name}</span>
                            </h2>
                            <p>{AboutData.about_content_desc}</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="exp">
                                <h4>{AboutData.about_content_exp}</h4>
                                <h6>
                                    Years of <span>Experience</span>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="about_footer row">
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
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
