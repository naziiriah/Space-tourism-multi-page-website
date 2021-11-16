import styled from "styled-components";

const TopText = styled.p`
text-align:start;
font-size:${(({fs}) => fs)}px;
color:#fff;
text-transform:uppercase;
height:1rem;
top:${(({top})=>top)}rem;
left:${(({left})=>left)}rem;
left:${(({right})=>right)}rem;
position:relative;
word-spacing:${(({ws})=>ws)}px;

`;

export default TopText;