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
top:281px;
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
    top:-80px;
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
top:90%;
@media screen and (max-width:768px){
left:110px;
top:80%;
}
@media screen and (max-width:650px){
    left:135px;
}
`

export const Links_rec = styled.div`
position:absolute;
width:105px;
height:22px;
flex-shrink:0;
left:89px;
top:95%;
display:flex;
justify-content:space-between;
align-items:center;
cursor:pointer;
@media screen and (max-width: 768px){
    left:138px;
    top:88%;
}
`

export const Twitter = styled.div`
width: 21px;
height: 20px;
flex-shrink: 0;
fill: #FFF;
background-image:url("/X_icon.svg");
background-position:center;
background-repeat:center;
background-size:cover;
`

export const LinkedIn = styled.div`
width: 22px;
height: 22px;
flex-shrink: 0;
fill: #FFF;
background-image:url("/LinkedIn_icon.svg");
background-position:center;
background-repeat:center;
background-size:cover;
`

export const Email = styled.div`
width: 26px;
height: 20px;
flex-shrink: 0;
fill: #FFF;
background-image:url("/Email_icon.svg");
background-position:center;
background-repeat:center;
background-size:cover;
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
top:90%;
@media screen and (max-width:768px){
    width:95%;
    height:auto;
    left:70px;
    top:95%;
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
left:212px;
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
left:435px;
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
left:750px;
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
left:890px;
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
left:1043px;
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
    left:342px;
}
`

export const Button = styled.button`
position: absolute;
top:75%;
flex-direction: row;
align-items: center;
justify-content: center;
left:45%;      
width: 152px;
height: 43px;
display: inline-flex;
padding: 16px 32px;
border-radius: 5px;
background: #364CE5;
border: none;
gap:10px;
color: #FFF;
text-edge: cap;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 158.023%;
white-space: nowrap;
cursor:pointer;
@media screen and (max-width: 768px){
top:52%;
width:160px;
height:35px;
font-size:16px;
left:28%;
}
`