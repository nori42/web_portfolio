import content from "../content/intro.json";
function Intro() {
    return (
        <div className="flex">
            <div className="mt-10 text-center md:text-start">
                <h3 className="text-accent">{content.welcome}</h3>
                <h1 className="my-5 text-3xl font-bold whitespace-nowrap md:text-5xl">{content.name}</h1>
                <h2 className="text-xl font-bold text-txt_accent">{content.slogan}</h2>
                <p className="my-5 text-sm md:text-xl text-txt_accent">{content.shortDescription}</p>
            </div>
            <div className="items-center justify-center hidden md:flex">
                <img src="./avatar.png" alt="avatar" width={640} height={640} />
            </div>
        </div>
     );
}

export default Intro;