import React from 'react';
import NavbarComponents from './Navbar_Components';

function Navbar(){
    return(
        <div className='nav-bar'>
            <button className='nav-logo btn-img'/>

            <div className='nav-options'>
                <NavbarComponents className="nav-options-home btn-img" url="home_button.svg" text="Overview" />
                <NavbarComponents className="nav-options-patients" url="patients_button.svg" text="Patients" />
                <NavbarComponents className="nav-options-schedule btn-img" url="schedule_button.svg" text="Schedule" />
                <NavbarComponents className="nav-options-message btn-img" url="msg_button.svg" text="Message" /> 
                <NavbarComponents className="nav-options-transactions btn-img" url="transc_button.svg" text="Transactions" />
            </div>
            
            <div className='nav-settings'>  
                <button className='nav-settings-img btn-img'/>
                <div className='nav-settings-doc-info'>
                    <div className='nav-settings-doc-info-name'>Dr. Jose Simmons</div>
                    <div className='nav-settings-doc-info-design'>General Practitioner</div>
                </div>
                <button className='nav-settings-icon btn-img' />
                <button className='nav-settings-more-icon btn-img'/>
            </div>
            
        </div>
    )
}

export default Navbar;