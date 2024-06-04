import {React} from "react";
import PatientComponent from "./PatientComponent";

function Patients({patientDetails}){
    return(
        <div className="patients">
            
            <div className="patient-header-text">Patients</div>
            <button className="patient-header-icon btn-img" />
                 
            <div className="patient-list">
                {patientDetails.map((patient, index) => (
                    <PatientComponent key={index} {...patient}/>
                ))}
            </div>
        </div>
    )
}

export default Patients;