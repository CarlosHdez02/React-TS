import { type ReactNode, type FC } from "react";

type HeaderProps = {
    image:{
        src:string;
        alt:string;
    }
    children: ReactNode
}
const Header: FC<HeaderProps> =({image,children})=>{
    return(
        <>
        <img src={image.src} alt={image.alt}/>
        {children}
        </>
    )
}
export default Header;