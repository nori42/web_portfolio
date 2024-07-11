import { useState } from "react";
import content from "../content/projects.json";
import { v4 as uuidv4 } from "uuid";
type ProjectObj = {
    name:string,
    imgURLS:string[],
    description:string,
    tools:string[],
    sourceCode:string
}

type HandleShow = (projectName:string) => void;

function projectsNameToArray(){
    return content.projects.map(item => item.name)
}

// ProjectPill Component
function ProjectPill ({project,activeProject,handleShow}:{project:string,activeProject:string | null,handleShow:HandleShow}){
    const active = activeProject == project;
    const handleClick = ()  => {
        handleShow(project)
    }

    return (
        <button 
            className={`p-1 text-center border rounded-md skill-pill min-w-16 md:min-w-28 md:rounded-xl ${active ? 'text-txt_white' : 'text-accent'} ${active ? 'bg-accent':'border-accent bg-transparent'}`} 
            onClick={()=> handleClick()}>
                <span className={`text-[10px] md:text-base`}>{project}</span>
        </button>
    )
}

// Project List Component
function ProjectList({handleShow,activeProject}:{handleShow:HandleShow,activeProject:string | null}) {
    return (
        <>
            <div className="flex items-center gap-4">
                {projectsNameToArray().map(item => <ProjectPill project={item} handleShow={handleShow} activeProject={activeProject} key={uuidv4()}/>)}
            </div>
            {activeProject == null && <p className="mt-4">Select A Project</p>}
        </>
    )
}

// Project Component
function Project({project}:{project:ProjectObj}) {
        return (
            <div>
                <h1 className="mb-4 text-xl font-bold md:text-3xl">{project.name}</h1>

                <div className="flex gap-4 overflow-x-auto">
                    {project.imgURLS.map(url => <img key={uuidv4()} src={url} className="size-[200px] md:size-[350px]"alt="project image"/>)}
                </div>

                <hr className="my-8"/>

                <p className="text-[11px] md:text-base">{project.description}</p>

                <div className="my-5">
                    <h1 className="text-xl font-bold md:text-2xl">Developed Using</h1>
                    <div className="flex gap-4 my-3 mb-6">
                        {project.tools.map(tool => (
                            <div key={uuidv4()} className={`p-1 text-center bg-transparent border border-yellow-500 rounded-md cursor-default skill-pill min-w-16 md:min-w-28 md:rounded-xl`}>
                                <span className={`text-yellow-500 text-[10px] md:text-base`}>{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            <h1 className="text-lg font-bold md:text-xl">Source Code - <span className="text-txt_accent">{project.sourceCode}</span></h1>
        </div>
    )
}

// Page Component
function Projects() {
    const [activeProject,setActiveProject] = useState<string | null>(content.projects[0].name);
    
    const handleShow = (projectName:string) => {
        setActiveProject(projectName);
    }

    return ( 
        <div>
            <ProjectList handleShow={handleShow} activeProject={activeProject}/>

            {activeProject != null && <hr className="my-8"/>}

            {/* Render Active Project */}
            {content.projects.filter(project => project.name == activeProject).map(project => <Project key={uuidv4()} project={project}/>)}
        </div>
     );
}

export default Projects;