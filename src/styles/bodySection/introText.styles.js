import styled from "styled-components";

const IntroText = styled.p`
text-align:start;
color:#fff;
font-size:${(({fs})=>fs)}px;
text-transform:uppercase;
line-height:1rem;
word-spacing:2px;
position:absolute;
top:${(({top})=>top)}rem;
left:${(({left})=>left)}rem;
`
export default IntroText;