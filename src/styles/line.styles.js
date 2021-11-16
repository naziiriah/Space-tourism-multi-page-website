import styled from "styled-components";

const Line = styled.p`
height:1px;
width:100%;
color:#fff;
background-color:#fff;
position:relative;
top:${(props=>props.top)}rem;
`;

export default Line