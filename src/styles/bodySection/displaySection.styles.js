import styled from "styled-components";

const DisplaySection = styled.div`
display:grid;
width:80%;
margin:auto;
height:27rem;
grid-template-columns:50% 50%;
position:relative;
top:17rem;
.text-area{
    width:100%;
    height:100%;
    grid:100%;
    .links{
        position:relative;
        top:-2rem;
        display:inline-flex;
        width:100%;
        height:5rem;

    }
    .line{
        width:75%;
        margin:auto;
        height:3px;
        background-color:#fff;
    }
    .list{
        display:flex;
        
        width:87%;
        margin: 9rem 2rem 0rem -2rem;
        justify-content:space-evenly;
        .small{
            height:1rem;
            width:1rem;
            background-color:#fff;
            border-radius:50%;
            opacity:0.5;
            &:hover{
                opacity:1;
                cursor:pointer;
            }
        }
    }
    .aside{
        display:grid;
        width:90%;
        margin:auto;
        grid-template-columns:10% 90%;
        aside{
            display:grid;
            width:100%;
            
            .one{
                height:4rem;
                color:#fff;
                width:4rem;
                border-radius:50%;
                font-size:3.5rem;
                text-align:center;
                border:1px solid #fff;
                padding-top:.3rem;
                cursor:pointer;
                &:hover{
                    background-color:#fff;
                    color:#000;
                    
                }
                &:visited{
                    background-color:#fff;
                }
                &:active{
                    background-color:#fff;
                    color:#000;
                }
            }
        }
    }

}
`;

export default DisplaySection;