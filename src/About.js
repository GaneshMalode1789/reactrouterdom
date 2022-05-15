import React from "react";
import { Route, Routes } from "react-router-dom";
import Student from "./Student";
import Employee from "./Employee";

const About = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Student />} />
                <Route path="/employee" element={<Employee />} />
            </Routes>
            <h1>About Page</h1>
        </div>
    );
}

export default About;