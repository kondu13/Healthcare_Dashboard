import {React} from "react";

function PatientComponent(props){
    return(
        <div className="patient-item">
            <img className="patient-item-img" src={props.profile_picture} alt="patient"/>

            <div className="patient-item-info">
                <div className="patient-item-info-name">{props.name}</div>
                <div className="patient-item-info-gender-age">{props.gender}, {props.age}</div>
            </div>

            <button className="patient-item-icon btn-img"/>
        </div>
    )
}
    
export default PatientComponent;