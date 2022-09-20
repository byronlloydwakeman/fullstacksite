import { React, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useRouteMatch, useParams } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { ProjectPage, ProjectMainPage } from "./Pages/ProjectPage";
import { NotFound } from "./Pages/404NotFound";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route exact path="/project" element={<ProjectMainPage/>}/>
            <Route exact path="/project/:title" element={<ProjectPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);