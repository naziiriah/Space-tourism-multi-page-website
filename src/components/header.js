import HeaderStyles from "../styles/headSection/header.styles";
import Navbar from "../styles/headSection/navbar.styles";
import Logo from "../styles/headSection/logo.styles";
import Navigation from "../styles/headSection/navbar.navigation.styles";
import Links from "../styles/headSection/link.styles";
import { Link } from "react-router-dom";


const  Header = () => {


    return ( 
    <HeaderStyles>
        <Navbar>
            <Logo/>
            <Navigation>
                <Links><Link to="/">00 home</Link></Links>
                <Links><Link to = "/destination">01 destination</Link></Links>
                <Links><Link to ="/crew"> 02 crew</Link></Links>
                <Links><Link to = "/technology">03 technology</Link></Links>
            </Navigation>
        </Navbar>
    </HeaderStyles>
    );
}
 
export default Header;