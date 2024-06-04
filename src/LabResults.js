import {React} from "react";
import LabResultsComponent from "./LabResultsComponent";

export default function LabResults({labResults=[]}){
    return(
        <div className="lab-results">
            <div className="lab-results-title">Lab Results</div>
            <div className="lab-results-tests">
                {labResults.map((test, index)=>{
                    return(
                        <LabResultsComponent key={index} test={test}/>
                    )
                })}
            </div>
        </div>  
    )
}

