import React from "react";
import "../css/Work.css";
import WorkCard from "../components/WorkCard";
import { WorkData, WorkCardData } from "../data/WorkData";

function Work() {
    return (
        <>
            <section id="work">
                <div className="work container">
                    <div className="work_head">
                        <span>{WorkData.work_head_tag}</span>
                        <h1>{WorkData.work_head_title}</h1>
                    </div>

                    <div className="work_content">
                        {WorkCardData.map((val) => {
                            return (
                                <WorkCard
                                    key={val.id}
                                    icon={val.work_icon}
                                    name={val.work_name}
                                    desc={val.work_desc}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Work;
