import BodyStyle from "../styles/bodySection/home.styles"

import Body from "./homePage.body";
import desktopBg from "../images/home/background-home-desktop.jpg"


const Home = () => {
    return (
        <BodyStyle bg={desktopBg}>
            
            <Body/>
        </BodyStyle>
    );
}
 
export default Home;
