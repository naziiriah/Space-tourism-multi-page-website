import desktopBg from "../images/destination/background-destination-desktop.jpg";
import BodyStyle from "../styles/bodySection/home.styles";
import TopText from "../styles/bodySection/textTop.styles"
import Data from "../data"
import { useState } from "react";
import DisplaySection from "../styles/bodySection/displaySection.styles";
import Image from "./ImageFile";
import Links from "../styles/headSection/link.styles"
import Paragraph from "../styles/bodySection/paragaghText.styles";
import LowerStyle from "../styles/bodySection/lowerSection.styles";



const Destination = () => {
const [destine, setDestine] = useState(Data.destinations[0])


    return (
        <BodyStyle bg = {desktopBg}>
            <TopText fs = "20" top = "10" left="8" ws ="6">01 pick your destination</TopText>
            
         <DisplaySection>
                <Image image = {destine.images.png} height="100"/>
                <article className="text-area">
                    <ul className="links">
                        <Links onClick={()=>{setDestine(Data.destinations[0])}}>moon</Links>
                        <Links onClick={()=>{setDestine(Data.destinations[1])}}>mars</Links>
                        <Links onClick={()=>{setDestine(Data.destinations[2])}}>europa</Links>
                        <Links onClick={()=>{setDestine(Data.destinations[3])}}>titan</Links>
                    </ul>
                <TopText fs = "37"  top = "-5"left="4">{destine.name}</TopText>
                    <Paragraph fs ="21" top = "-3" w="75">{destine.description}</Paragraph>
                    <p className="line"></p>
                    <LowerStyle>
                        <div className="label">
                            <TopText fs = "17"  top = "-8"left="4">avg. distance</TopText>
                            <TopText fs = "23"  top = "-8"left="4">{destine.distance}</TopText>
                        </div>
                        <div className="label">
                            <TopText fs = "17"  top = "-8"left="4">est.travel time</TopText>
                            <TopText fs = "23"  top = "-8"left="4">{destine.travel}</TopText>
                        </div>
                    </LowerStyle>
                    
                </article>
         </DisplaySection>
            
            
        </BodyStyle>
    );
}
 
export default Destination;