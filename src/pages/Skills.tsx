import content from "../content/skills.json";
import { v4 as uuidv4 } from "uuid";
type LegendProps = {
    name:string;
    description:string;
    bgColor:string;
}
type Skill = {
    skill:string;
    isBeginner:boolean;
}
type SkillsObject = {
    label:string;
    skills:Skill[];
}

function Legend({name,description,bgColor}:LegendProps){
    return (
        <div className="my-2 text-sm md:text-base">
            <div className={`${bgColor} min-w-4 min-h-4 inline-block`}></div>
            <span> {name} -</span>
            <span className="text-txt_accent"> {description}</span>
        </div>
    )
}


function SkillPill ({skill,isBeginner}:Skill){
    return (
        <div className={`skill-pill bg-transparent min-w-16 md:min-w-28 border text-center rounded-md md:rounded-xl p-1 cursor-default ${isBeginner ? 'border-green-600' : 'border-yellow-500'}`}>
            <span className={`text-[10px] md:text-base ${isBeginner ? 'text-green-600' : 'text-yellow-500'}`}>{skill}</span>
        </div>
    )
}


function SkillWrapper ({skillsObj}:{skillsObj:SkillsObject}) {
    return (
        <div className="my-7">
            <h1 className="text-xl md:text-2xl">{skillsObj.label}</h1>
            <div className="flex flex-wrap gap-4 mt-4">
                {skillsObj.skills.map((skill)=>{
                    return (
                        <SkillPill skill={skill.skill} isBeginner={skill.isBeginner} key={uuidv4()}/>
                    )
                })}
            </div>
        </div>
    )
}

function Skills() {
    return ( 
        <div>
            {/* Legends */}
            <Legend 
                name="Beginner" 
                description="Never used in a project (Currently Learning)"
                bgColor="bg-green-600"
                />
            <Legend 
                name="Experienced" 
                description="Used in a project"
                bgColor="bg-yellow-500"
                />

                <hr className="my-8"/>
                
                {content.map((item)=>{
                    return (
                        <SkillWrapper skillsObj={item} key={uuidv4()}/>
                    )
                })}
        </div> 
    );
}

export default Skills;