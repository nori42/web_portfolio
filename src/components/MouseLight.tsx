import { useEffect, useState} from "react";

function MouseLight() {
    const [mouseLoc,setMouseLoc] = useState({x:-1,y:-1})

    const mouseLightStyle = {
        backgroundImage:`radial-gradient(circle at ${mouseLoc.x}px ${mouseLoc.y}px, transparent 80px, rgba(0, 0, 0, 0.85) 350px)`
    }

    useEffect(() => {
        const handleMouseMove = (event:MouseEvent) => {
            setMouseLoc({x:event.clientX,y:event.clientY});
        };
        
        window.addEventListener('mousemove',handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);
    
    return ( 
        <div className='fixed z-10 hidden w-screen h-screen pointer-events-none md:block bg-accent opacity-5' style={mouseLightStyle}>
        </div>
     );
}

export default MouseLight;