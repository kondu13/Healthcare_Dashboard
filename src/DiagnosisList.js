import React from "react";
import DiagnosisListComponent from "./DiagnosisListComponent";

export default function DiagnosisList({diagnosis_list = []}){
    return(
        <div className='diagnosis-list'>

            <div className="diagnosis-list-title">Diagnostic List</div>

            <div className="diagnosis-list-header">
                <div className="diagnosis-list-header-text1">Problem/Diagnosis</div>
                <div className="diagnosis-list-header-text2">Description</div>
                <div className="diagnosis-list-header-text3">Status</div>
            </div>

            <div className="diagnosis-list-items">
                {diagnosis_list.map((item, index)=>{
                    return(
                        <DiagnosisListComponent item={item} key={index}/>)
                })}
            </div>

        </div>
    )
}