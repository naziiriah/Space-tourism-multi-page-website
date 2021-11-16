import styled from "styled-components";

const Paragraph = styled.div`
font-size:${(({fs}) => fs)}px;
color:#fff;
text-align:start;
word-spacing:1.7px;
top:${(({top})=>top)}rem;
position:relative;
line-height:35px;
width:${(({w})=>w)}%;
margin:auto;
left:${(({right})=>right)}rem;
`;

export default Paragraph;