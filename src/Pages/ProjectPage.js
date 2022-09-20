import { Link, useParams } from "react-router-dom";
import { NotFound } from "./404NotFound";
import { useState, useEffect } from "react";

export function ProjectPage(){
    const { title } = useParams();

    const [projectInfo, setProjectInfo] = useState({ _id: "", title: "", content: "" });

    const url = `/api/project/${title}`;

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url);
            const body = await result.json();
            setProjectInfo(body)
        }
        fetchData();

    }, [title])

    console.log(projectInfo);
    if(!projectInfo)
    {
        return <NotFound/>;
    } 

    return (
        <div>
            <h1>{`id is ${projectInfo._id}`}</h1>
            <h1>{`title is ${projectInfo.title}`}</h1>
            <h1>{`content is ${projectInfo.content}`}</h1>
        </div>
    );
}

export function ProjectMainPage()
{
    return (
        <>
            <h1>Projects</h1> 
            <Link to="/project/Wind Turbine">Wind Turbine</Link>
        </>
    )
}