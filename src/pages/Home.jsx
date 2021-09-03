import React from "react";
import "../css/Home.css";
import HomeData from "../data/HomeData";

function Home() {
    return (
        <>
            <section id="home">
                <div className="home container">
                    <div className="row">
                        <div className="col-lg-7 biodata">
                            <h1>{HomeData[0].tag_line_1}</h1>
                            <h2>{HomeData[0].tag_line_2}</h2>
                            <p>{HomeData[0].location}</p>
                            <span>
                                <button className="btn">
                                    {HomeData[0].btn_1}
                                </button>
                                <button className="btn">
                                    {HomeData[0].btn_2}
                                </button>
                            </span>
                        </div>

                        <div className="col-lg-5 bioimg">
                            <img
                                src={HomeData[0].img_src}
                                alt={HomeData[0].img_alt}
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
