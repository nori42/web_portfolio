import { useEffect, useState } from "react";
import { PageContentRef } from "../types";
import { MIN_PAGE_CONTENT_HEIGHT } from "../constants";
type NavLinkProps = {
    href:string;
    text:string;
    scrollActive?:boolean;
}

type NavigationProps = {
    pageContentRef:PageContentRef
}

const utils = {
    // Check if number is in range
    between: (number:number, min:number, max:number) =>  number >= min && number < max
}

function NavLink({href,text, scrollActive = false}:NavLinkProps){
    
    return (
        <li className='w-full'>
            <a href={href} className={`flex items-center justify-end w-full text-xl border-b-2 border-transparent group ${scrollActive && 'flashlight'}`}>
                <span className={`mr-2 ${scrollActive && 'font-bold'}`}>{text}</span>
                {/* Indicator */}
                <span className={`${scrollActive ? 'w-1/2 h-1' : 'w-8'} group-hover:w-1/2 transition-[width] duration-300 bg-[#46B49F] h-[2px] border-none text-transparent`}>Test</span>
            </a>
        </li>
    )
}

function Navigation({pageContentRef}:NavigationProps) {
    
    const [scrollY,setScrollY] = useState(Math.floor(window.scrollY));

    const activePadding = 50;
    
    // Initialize active page height
    const pageActiveHeights = new Map();
    pageActiveHeights.set('about',MIN_PAGE_CONTENT_HEIGHT);
    pageActiveHeights.set('skills', pageContentRef.about.current?.clientHeight + pageActiveHeights.get('about'))
    pageActiveHeights.set('projects', pageContentRef.skills.current?.clientHeight + pageActiveHeights.get('skills'))
    pageActiveHeights.set('experiences', pageContentRef.projects.current?.clientHeight + pageActiveHeights.get('projects'))
    pageActiveHeights.set('resume', pageContentRef.experiences.current?.clientHeight + pageActiveHeights.get('experiences'))
    
    //Set active page for link based on height
    const pageScrollActive = {
        about: utils.between(scrollY , pageActiveHeights.get('about') - activePadding, pageActiveHeights.get('skills') - activePadding),
        skills: utils.between(scrollY , pageActiveHeights.get('skills') - activePadding, pageActiveHeights.get('projects') - activePadding),
        projects: utils.between(scrollY , pageActiveHeights.get('projects') - activePadding, pageActiveHeights.get('experiences') - activePadding),
        experiences: utils.between(scrollY , pageActiveHeights.get('experiences') - activePadding, pageActiveHeights.get('resume') - activePadding),
        resume: scrollY >= pageActiveHeights.get('resume'),
    } 

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(Math.floor(window.scrollY));
        };
        
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
    return ( 
        <div>
            <ul>
                <NavLink href="#about" text="About" scrollActive={pageScrollActive.about}/>
                <NavLink href="#skills" text="Skills" scrollActive={pageScrollActive.skills}/>
                <NavLink href="#projects" text="Projects" scrollActive={pageScrollActive.projects}/>
                <NavLink href="#experiences" text="Experience" scrollActive={pageScrollActive.experiences}/>
                <NavLink href="#resume" text="Resume" scrollActive={pageScrollActive.resume}/>
            </ul>
        </div> 
    );
}

export default Navigation;