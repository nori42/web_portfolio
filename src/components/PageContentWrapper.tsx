import { ReactNode, forwardRef } from "react";

type Props = {
    id:string;
    children:ReactNode;
    className?:string;
}

type Ref = HTMLDivElement

const PageContentWrapper = forwardRef<Ref,Props>(
    (props:Props, ref ) => {
    return (
        <div className={`min-h-screen snap-mandatory mr-20 pl-20 pt-10 ${props.className}`} id={props.id} ref={ref}>
            {props.children}
        </div>
    );
}

)
export default PageContentWrapper;