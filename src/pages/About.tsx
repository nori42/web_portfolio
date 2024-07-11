import { ReactNode } from "react";
import content from "../content/about.json";
import { v4 as uuidv4 } from "uuid";

type ContentWrapperProps = {
    children:ReactNode;
}

function ContentWrapper ({children}:ContentWrapperProps){
    return (
        <div className="my-8 text-center text-[10px] sm:text-base sm:text-start">
            {children}
        </div>
    )
}

function About() {
    return ( 
        <div>
            {
                content.map((item:string | Array<string>) => {
                    
                    if(Array.isArray(item)) {
                        return (
                            <ContentWrapper key={uuidv4()}>
                                {item.map(itemArr => <p key={uuidv4()}>{itemArr}</p>)}
                            </ContentWrapper>
                        )
                    }

                    return (
                        <ContentWrapper key={uuidv4()}>
                            <p>{item}</p>
                        </ContentWrapper>
                    )
                })
            }
        </div>
     );
}

export default About;