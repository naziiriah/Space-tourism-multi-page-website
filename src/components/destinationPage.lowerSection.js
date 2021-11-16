import LowerStyle from "../styles/bodySection/lowerSection.styles"
import TopText from "../styles/bodySection/textTop.styles"


const LowerDisplay = ({travel, distance}) => {
    return (
        <LowerStyle>
            <div className="label">
                <TopText>avg. distance</TopText>
                <TopText>{distance}</TopText>
            </div>
            <div className="label">
                <TopText>est. travel time</TopText>
                <TopText>{travel}</TopText>
            </div>
        </LowerStyle>
    );
}
 
export default LowerDisplay;