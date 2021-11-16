import BodyStyle from "../styles/bodySection/home.styles";
import desktopBg from "../images/technology/background-technology-desktop.jpg"
import TopText from "../styles/bodySection/textTop.styles";
import DisplaySection from "../styles/bodySection/displaySection.styles";
import Paragraph from "../styles/bodySection/paragaghText.styles";
import Image from "./ImageFile";
import Data from "../data";
import { useState } from "react";


const Technology = () => {
    const [tech, setTech] = useState(Data.technology[0])

    return (
        <BodyStyle bg={desktopBg}>
            <TopText fs = "20" top = "9" left="8" ws ="6">03 space launch 101</TopText>
            <DisplaySection>
                <article className="text-area">
                 
                    
                    <div className="aside">
                        <aside>
                            <div onClick={()=>setTech(Data.technology[0])} className="one">1</div>
                            <div onClick={()=>setTech(Data.technology[1])} className="one">2</div>
                            <div onClick={()=>setTech(Data.technology[2])} className="one">3</div>
                        </aside>
                        <div>
                        <TopText right="8"> the terminology...</TopText>
                        <TopText right="8" fs="45">{tech.name}</TopText>
                        <Paragraph right="8" fs="24">{tech.description}</Paragraph>   
                        </div>
                    
                    </div>

                </article>
                <Image top="-4"  side = "19.9" image = {tech.images.portrait} height="150"/>
            </DisplaySection>
        </BodyStyle>
      );
}
 
export default Technology;