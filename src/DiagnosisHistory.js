import React from "react";
import DiagnosisHistoryCardComponent from "./DiagnosisHistoryCardComponent";
import BloodPressureChart from "./BloodPressureChart";

export default function DiagnosisHistory({ diagnosis_history = [] }) {
    return (
        <div className="diagnosis-history">

            <div className="diagnosis-history-title">Diagnosis History</div>

            <div className="diagnosis-history-graph-card">
                <div className="diagnosis-history-graph-card-left">
                    <div className="diagnosis-history-graph-card-header">
                        <div className="diagnosis-history-graph-card-header-text">Blood Pressure</div>
                        <div className="diagnosis-history-graph-card-header-option">
                            <div className="diagnosis-history-graph-card-header-option-text">Last 6 months</div>
                            <button className="diagnosis-history-graph-card-header-option-button btn-img" />
                        </div>
                    </div>
                    <BloodPressureChart diagnosis_history={diagnosis_history} />
                </div>

                { diagnosis_history.length > 0 &&
                (<div className="diagnosis-history-graph-card-right">
                    <div className="line"/>
                    <div className="diagnosis-history-graph-card-systolic">
                        <div className="diagnosis-history-graph-card-systolic-header">
                            <button className="diagnosis-history-graph-card-systolic-color"></button>
                            <div className="diagnosis-history-graph-card-systolic-title">Systolic</div>
                        </div>
                        <div className="diagnosis-history-graph-card-systolic-value">{diagnosis_history[0].blood_pressure.systolic.value}</div>
                        <div className="diagnosis-history-graph-card-levels-wrapper-1">
                            <img className="up-arrow" src="/images/Arrowup.svg" alt="up-arrow"/> 
                            <div className="diagnosis-history-graph-card-systolic-levels">{diagnosis_history[0].blood_pressure.systolic.levels}</div>
                        </div>

                    </div>

                    <div className="diagnosis-history-graph-card-diastolic">
                        <div className="diagnosis-history-graph-card-diastolic-header">
                            <button className="diagnosis-history-graph-card-diastolic-color"></button>
                            <div className="diagnosis-history-graph-card-diastolic-title">diastolic</div>
                        </div>
                        <div className="diagnosis-history-graph-card-diastolic-value">{diagnosis_history[0].blood_pressure.diastolic.value}</div>
                        <div className="diagnosis-history-graph-card-levels-wrapper-2">
                            <img className="down-arrow" src="/images/ArrowDown.svg" alt="down-arrow"/> 
                            <div className="diagnosis-history-graph-card-diastolic-levels">{diagnosis_history[0].blood_pressure.diastolic.levels}</div>
                        </div>    
                    </div>
                </div>)}
            </div>

            {diagnosis_history.length > 0 && 
                (
                    <div className="diagnosis-history-respiration-card"> 
                        <DiagnosisHistoryCardComponent text1="Respiratory Rate" text2=" bpm" value={diagnosis_history[0].respiratory_rate.value} levels={diagnosis_history[0].respiratory_rate.levels} src="respiratory_rate.svg" color="#E0F3FA"/>
                        <DiagnosisHistoryCardComponent text1="Temperature" text2="°F" value={diagnosis_history[0].temperature.value} levels={diagnosis_history[0].temperature.levels} src="temperature.svg" color="#FFE6E9"/>
                        <DiagnosisHistoryCardComponent text1="Heart Rate" text2=" bpm" value={diagnosis_history[0].heart_rate.value} levels={diagnosis_history[0].heart_rate.levels} src="HeartBPM.svg" color="#FFE6F1"/>
                    </div>
            )   
            }
            
        </div>
    )
}