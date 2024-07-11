import downloadIcon from "../assets/download.svg"

function Resume() {
    return ( 
        <div className="pb-16">
            <a className="flex items-center justify-between p-2 mb-5 text-xs font-bold rounded-lg md:text-base bg-accent text-txt_white float-end" href="./resume.pdf" download>
                <span>Download</span>
                <img src={downloadIcon} alt="download icon" className="ml-3 size-4 md:size-6" />
            </a>
            <img src="./resume.jpg" alt="resume" className="my-4" />
        </div>
     );
}

export default Resume;