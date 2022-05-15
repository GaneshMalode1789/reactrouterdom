import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Contact = () => {
    const { id } = useParams();
    const location = useLocation();
    return (
        <div>
            <h1>Contact Page {id} - {location.state ? location.state.name : null}
            </h1>
        </div>
    )
}

export default Contact;