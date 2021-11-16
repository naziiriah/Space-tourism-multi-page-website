import ImageStyle from "../styles/bodySection/imageHolder.styles";

const Image = ({top, side, image, height}) => {
    return (
      <ImageStyle top= {top} side = {side}  height = {height}>
           <img src={image} alt="" />
        </ImageStyle>
    );
}
 
export default Image;