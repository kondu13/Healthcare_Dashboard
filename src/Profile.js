import React from "react";
import ProfileComponent from "./ProfileComponent";

export default function Profile({targetData}){
    return(
        <div className="profile">

            <img className="profile-img" src={targetData.profile_picture} alt="profile"/>
            <div className="profile-name">Jessica Taylor</div>

            <ProfileComponent className="profile-dob" context="Date of Birth" value={targetData.date_of_birth} src="BirthIcon.png"/>
            <ProfileComponent className="profile-gender" context="Gender" value={targetData.gender} src="FemaleIcon.png"/>
            <ProfileComponent className="profile-cont" context="Contact Info." value={targetData.phone_number} src="PhoneIcon.png"/>    
            <ProfileComponent className="profile-emer-cont" context="Emergency Contacts" value={targetData.emergency_contact} src="PhoneIcon.png"/>
            <ProfileComponent className="profile-insurance" context="Insurance Provider" value={targetData.insurance_type} src="InsuranceIcon.png"/>

            <div className="profile-info">
                <button className="profile-info-btn btn-img">
                    <div className="profile-info-btn-text">Show All Information</div>
                </button>
            </div>

        </div>
    )
}