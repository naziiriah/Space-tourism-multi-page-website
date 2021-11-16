import styled from "styled-components";

const ImageStyle = styled.article`
height:20rem;
width:20rem;
margin: 5rem 3rem;
margin-top:${(({top})=>top)}rem;
margin-left:${(({side})=> side)}rem;
img{
    height:${(({height})=>height)}%;
    width:100%;
}

`;
export default ImageStyle