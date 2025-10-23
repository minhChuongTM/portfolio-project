import React from "react";
import { Route, Routes } from "react-router";
import Home from "./page/Home/Home";
import Project from "./page/Project/Project";
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";
import Experience from "./page/Experience/Experience";

function AppRouters() {
    return (
        <div className="h-max">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="project" element={<Project />} />
                <Route path="experience" element={<Experience/>}/>
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default AppRouters;
