import styled from "styled-components";

const Links = styled.li`
a{
    text-decoration: none;
    color:#fff;
}
margin:0rem 0.5rem;
z-index:1;
list-style:none;
text-transform:uppercase;
word-spacinig:.4rem;
padding:2rem 1rem;
color:#fff;
text-decoration: none;
&:hover{
padding-bottom:.3rem;
border-bottom: #fff solid 10px;
opacity:.8;
cursor:pointer;
}
&:active{
border-bottom: #fff solid 10px; 
}
&:visited{
    border-bottom: #fff solid 10px; 
}
`;

export default Links;