import HomeBody from "../styles/bodySection/Body.styles";
import TextFile from "../styles/bodySection/textFolder.styles";
import TopText from "../styles/bodySection/textTop.styles";
import Paragraph from "../styles/bodySection/paragaghText.styles";
import ExploreContainer from "../styles/bodySection/homeExplore.styles";
import InnerText from "../styles/bodySection/homeEcplore.text.styles";

const Body = () => {
    return (
        <HomeBody> 
            <TextFile>
                <TopText fs = "28" >so, you want to travel to</TopText>
                <TopText fs = "150" top="-8">space</TopText>
                <Paragraph fs = "20" top="-7">
                    Let’s face it; if you want to go to space, 
                    you might as well genuinely go to outer space and not 
                    hover kind of on the edge of it.
                    Well sit back , and relax because we’ll give you a truly out of this world experience!
                </Paragraph>
            </TextFile>
            <ExploreContainer>
                <InnerText>explore</InnerText>
            </ExploreContainer>
        </HomeBody>
    );
}
 
export default Body;