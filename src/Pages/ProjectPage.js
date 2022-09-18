import { Link, Outlet, useParams } from "react-router-dom";
import { projects } from "./ProjectList";

export function ProjectPage(){
    const { id } = useParams();
    console.log(id);
    var project = projects.find(element => element.id === id)

    if(!project) return 

    return (
        <div>
            <p>{project.content}</p>
        </div>
    );
}

export function ProjectMainPage()
{
    return (
        <>
            <h1>Projects</h1> 
            {projects.map((project, key) => (
                <Link key={key} to={`/project/${project.id}`}>
                    {project.title}
                </Link>
            ))}
        </>
    )
}