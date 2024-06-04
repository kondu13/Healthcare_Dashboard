import React from "react";

export default function ProfileComponent(props){
    return(
        <div className={props.className}>
            <img className= {`${props.className}-icon`} src={`/images/${props.src}`} alt="icon" />

            <div className={`${props.className}-text`}>
                <div className={`${props.className}-text-context`}>{props.context}</div>
                <div className={`${props.className}-text-value`}>{props.value}</div>
            </div>

        </div>
    )
}