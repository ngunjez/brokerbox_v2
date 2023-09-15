import styled from "styled-components";

export const LandingPageContainer = styled.div`
position:relative;
width:100%;
min-height:100vh;
background-color:#000000;
display:flex;
@media screen and (max-width: 768px){
    width:auto;
    height:auto;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
`

export const TopLogo = styled.div`
position:absolute;
width: 353px;
height: 79px;
flex-shrink: 0;
background-image:url("/Top_logo.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
top:76px;
left:90px;
@media screen and (max-width:768px) {
    width:280px;
    height:60px;
    left:35px;
    top:35px;
}
`

export const Rec = styled.div`
position:relative;
width: 1188px;
height: 298px;
flex-shrink: 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
top:391px;
left:365px;
@media screen and (max-width: 768px){
    width:auto;
    height:100px;
    left:-6px;
    gap:10px;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    top:-10px;
    gap:30px;
    text-align: left;
}
`

export const RecText1 = styled.div`
color: #364CE5;
text-align: center;
font-family: Poppins;
font-size: 98px;
font-style: normal;
font-weight: 300;
line-height: 109.5%;
text-transform: capitalize;
@media screen and (max-width: 768px){
    font-size:30px;
}
`

export const RecText2 = styled.div`
color: #FFF;
text-align: center;
font-family: Proxima Nova;
font-size: 42px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media screen and (max-width: 768px){
    font-size:16px;
    // word-wrap: break-word;
    // white-space: pre-line;
    // overflow-wrap: break-word;
    white-space: pre-line;
}
`

export const BottomLogo = styled.div`
position:absolute;
width: 127px;
height: 29px;
flex-shrink: 0;
background-image:url("/Bottom_Logo.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
left:89px;
bottom:92px;
@media screen and (max-width:768px){
left:110px;
}
`

export const Rights_Text = styled.div`
position:absolute;
display:flex;
flex-direction:row;
color: #FFF;
font-family: Proxima Nova;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
right:110px;
bottom:99px;
@media screen and (max-width:768px){
    left:100px;
    top:680px;
flex-direction:row;
white-space:no-wrap;
}
`