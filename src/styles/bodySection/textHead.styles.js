import styled from "styled-components";

const TextHead = styled.h1`
text-align:start;
font-size:${(({fs}) => fs)}px;
color:#fff;
text-transform:uppercase;
line-height:1.5rem;
top:${(({top})=>top)}rem;
left:${(({left})=>left)}rem;;
position:relative;
word-spacing:${(({ws})=>ws)}px;
`;
export default TextHead;