import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => { navigate('/contact', { state: { name: "ReactJs"} } ) }}>Go to Contact Page</button>
        </div>
    );
}

export default Home;