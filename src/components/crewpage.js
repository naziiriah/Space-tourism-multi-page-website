import BodyStyle from "../styles/bodySection/home.styles";
import desktopBg from "../images/crew/background-crew-desktop.jpg"
import TopText from "../styles/bodySection/textTop.styles";
import { useState } from "react";
import Data from "../data";
import DisplaySection from "../styles/bodySection/displaySection.styles";
import Image from "./ImageFile";
import Paragraph from "../styles/bodySection/paragaghText.styles";


const Crew = () => {

    const [crew, setCrew] = useState(Data.crew[0])
    return (  
        <BodyStyle bg ={desktopBg}>
            <TopText top ="13" fs="21" left="9.5">02 meet your crew</TopText>
            <DisplaySection>
                <article className="text-area">
                    <TopText top =".5" fs="21" left="2">{crew.role}</TopText>
                    <TopText top =".5" fs="32" left="2">{crew.name}</TopText>
                    <Paragraph top="2.5" fs = "21" w = "87" >{crew.bio}</Paragraph>
                    <div className="list">
                        <div className="small" onClick={()=>setCrew(Data.crew[0])}></div>
                        <div className="small" onClick={()=>setCrew(Data.crew[1])}></div>
                        <div className="small" onClick={()=>setCrew(Data.crew[2])}></div>
                        <div className="small" onClick={()=>setCrew(Data.crew[3])}></div>
                    </div>

                </article>
            <Image side= "8" image = {crew.images.png} top="0" height="100"/>
            </DisplaySection>
        </BodyStyle>
    );
}
 
export default Crew;