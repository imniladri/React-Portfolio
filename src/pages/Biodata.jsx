import React from "react";
import "../css/Biodata.css";
import Timeline from "../components/Timeline";
import { BioDataHead } from "../data/BioData";

function Biodata() {
    return (
        <>
            <section id="biodata">
                <div className="biodata container">
                    <div className="biodata_head">
                        <span>{BioDataHead[0].bio_head_tag}</span>
                        <h1>{BioDataHead[0].bio_head_title}</h1>
                    </div>

                    <div className="biodata_timeline row">
                        <Timeline />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Biodata;
