import React from "react";

function BioDataCard(props) {
    return (
        <>
            <div className="bio_card">
                <h4>{props.course}</h4>
                <span>{props.place}</span>
                <p>{props.desc}</p>
                <hr />
            </div>
        </>
    );
}

function BioSkillsIcons(props) {
    return (
        <>
            <div className="skill">
                <object data={props.icon} alt={props.alt}></object>
            </div>
        </>
    );
}

export { BioDataCard, BioSkillsIcons };
