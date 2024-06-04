import React from "react";

export default function DiagnosisListComponent({item}){
    return(
        <div className="diagnosis-list-item">
            <div className="diagnosis-list-item-name">{item.name}</div>
            <div className="diagnosis-list-item-desc">{item.description}</div>
            <div className="diagnosis-list-item-status">{item.status}</div>
        </div>
    )
}