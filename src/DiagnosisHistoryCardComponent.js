import React from "react";

export default function DiagnosisHistoryCardComponent({text1, text2, src, value, levels, color}){

    const cardStyle = {
        backgroundColor: color,
    };

    return(
        <div style={cardStyle} className="respiratory-cards">
            <img className= "respiratory-card-img" src={`/images/${src}`} alt="lungs"/>
            <div className="respiratory-card-text">{text1}</div>
            <div className="respiratory-card-value">{`${value}${text2}`}</div>
            <div className="respiratory-card-levels">{levels}</div>
        </div>
    )
}
