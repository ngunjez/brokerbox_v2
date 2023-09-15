import styled from "styled-components";

export const LandingPageContainer = styled.div`
position:relative;
width:100%;
min-height:100vh;
background-color:#000000;
display:flex;
@media screen and (max-width: 1600px) {
    width:100%;
    height:700px;
    flex-direction:row;
    justify-content:center;
}
@media screen and (max-width: 768px){
    width:auto;
    height:auto;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
`

export const TopLogo = styled.nav`
position:absolute;
width: 353px;
height: 79px;
flex-shrink: 0;
background-image:url("/Top_Logo.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
top:76px;
left:90px;
@media screen and (max-width: 1600px) {
    top:50px;
    width:300px;
    height:60px;
}
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
gap:42px;
@media screen and (max-width: 1600px) {
    top:200px;
    width:900px;
    left:20px;
}
@media screen and (max-width: 768px){
    width:auto;
    height:100px;
    left:-6px;
    gap:10px;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    top:-10px;
    gap:40px;
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
@media screen and (max-width: 1600px) {
    font-size:70px;
}
@media screen and (max-width: 768px){
    font-size:30px;
}
`

export const RecText2 = styled.div`
color: #FFF;
text-align: center;
font-size: 42px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media screen and (max-width: 1600px) {
    font-size:30px;
}
@media screen and (max-width: 768px){
    font-size:16px;
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
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
right:110px;
bottom:99px;
@media screen and (max-width:768px){
    width:90%;
    height:auto;
    left:50px;
    top:680px;
flex-direction:row;
white-space:no-wrap;
}
`

export const Dot1 = styled.div`
position:absolute;
width: 6px;
height: 6px;
flex-shrink: 0;
fill: #FFF;
top:276px;
left:218px;
background-image:url("/dot.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
@media screen and (max-width: 1600px) {
    top:245px;
    left:181px;
}
@media screen and (max-width:768px){
    width:3px;
    height:3px;
    top:103px;
    left:23px;
}
`

export const Dot2 = styled.div`
position:absolute;
width: 6px;
height: 6px;
flex-shrink: 0;
fill: #FFF;
top:276px;
left:442px;
background-image:url("/dot2.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
@media screen and (max-width: 1600px) {
    top:245px;
    left:341px;
}
@media screen and (max-width:768px){
    width:3px;
    height:3px;
    top:103px;
    left:109px;
}
`

export const Dot3 = styled.div`
position:absolute;
width: 6px;
height: 6px;
flex-shrink: 0;
fill: #FFF;
top:276px;
left:757px;
background-image:url("/dot3.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
@media screen and (max-width: 1600px) {
    top:245px;
    left:565px;
}
@media screen and (max-width:768px){
    width:3px;
    height:3px;
    top:103px;
    left:229px;
}
`

export const Dot4 = styled.div`
position:absolute;
width: 6px;
height: 6px;
flex-shrink: 0;
fill: #FFF;
top:276px;
left:898px;
background-image:url("/dot4.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
@media screen and (max-width: 1600px) {
    top:245px;
    left:666px;
}
@media screen and (max-width:768px){
    width:3px;
    height:3px;
    top:103px;
    left:282px;
}
`

export const Dot5 = styled.div`
position:absolute;
width: 6px;
height: 6px;
flex-shrink: 0;
fill: #FFF;
top:276px;
left:1038px;
background-image:url("/dot5.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
@media screen and (max-width: 1600px) {
    top:245px;
    left:765px;
}
@media screen and (max-width:768px){
    width:3px;
    height:3px;
    top:103px;
    left:336px;
}
`