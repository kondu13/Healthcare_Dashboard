import React from "react";
import { useState, useEffect } from "react";

function NavbarComponents(props){
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // This effect will run when the component mounts and when props.url changes
        if (props.url) {
            setUrl(`images/${props.url}`);
        }
    }, [props.url]);

    const classNames = props.className.split(' ')[0];

    return(
        <button className={props.className}>
            <img className={`${classNames}-icon`} src= {url} alt="images"/>
            <div className={`${classNames}-text`}>{props.text}</div>
        </button>
    )
}

export default NavbarComponents;