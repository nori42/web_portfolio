import content from "../content/experiences.json"
import {v4 as uuidv4} from "uuid";

function Experiences() {
    return ( 
        <div>
            {content.map(experience => (
                <div key={uuidv4()} className="my-12">
                    <h1 className="text-sm font-bold sm:text-xl"><span className="text-accent">{experience.position}</span> <span className="block sm:inline text-txt_accent">{experience.date}</span></h1>
                    <h2 className="text-xs font-bold sm:text-lg">{experience.company}</h2>
                    <p className="italic text-[11px] sm:text-base">{experience.description}</p>
                </div>
            ))}
        </div> 
    );
}

export default Experiences;