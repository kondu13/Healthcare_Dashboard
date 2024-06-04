import React from "react";

export default function LabResultsComponent({test}){
    return(
        <div className="lab-result-test">
            <div className="lab-result-test-name">{test}</div>
            <button className="download-btn btn-img"/>
        </div>
    )
}