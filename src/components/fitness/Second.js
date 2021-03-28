import React from 'react';
import styled from 'styled-components';
// import image from '../images/karsten-winegeart-ZiXqi1iSZyI-unsplash.jpg'

import Card from '../home/Card'


export const Secpage=()=>{
    return(
        <Main>
        <Fade>
        <Head>THE ULTIMATE PERSONAL FITNESS <span>TRAINING</span> PLANS</Head>
        
        <Head2>The <span>plans</span> that will help you to stay fit and healthy</Head2>
        <Card/>
        </Fade>
        </Main>
    )
}

const Main = styled.div`
height: 100vh;
background: url('https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80') no-repeat center center/cover;

`
const Fade = styled.div`
position:relative;
height:100%;
background: rgba(0, 0, 0,0.5);

padding-top: 30px;


`
const Head = styled.h3`
max-width:100%;

color: white;
text-align: center;
font-size: 55px;
span{
    color:#ff3d3d;
}
`
const Head2 = styled.h3`
margin:auto;
max-width:60%;
font-size: 36px;
text-align:center;
margin-top:15px;
color:#acacac;
span{
    color:#ff3d3d;
}
`

const Div1 = styled.div`
max-width:30%;
position:absolute;
margin-left:10%;
background: #ebe9e9;

padding-top: 30px;


`
const Div2 = styled.div`
position:absolute;
max-width:20%;
background: #c28888;
margin-left:30%;
padding-top: 30px;


`
const Div3 = styled.div`
position:absolute;
max-width:20%;
background: #c55e5e;
margin-left:50%;
padding-top: 30px;


`

// const Card = styled.div`

// h3{

// }
// p{
 
    
// }
// &:hover{
   
// }

// `
// const Button = styled.button`
// margin: auto;
// margin-top: 12px;
// /* display:block; */

// max-width: 20%;
// padding: 10px;
// font-size: 20px;
// border: 3px solid rgb(201, 198, 198);
// background: rgba(128, 128, 128,0.1);
// color: #bebebe;
// cursor: pointer;


// &:hover{
//     color: rgb(240, 240, 240);
//     -webkit-transform: scale(1.1);
//     transform: scale(1.1);
//     -webkit-transition-duration: 0.3s;
//     transition-duration: 0.3s;
//     box-shadow: 0 0 20px rgba(240,240,240,0.5);

// }
// `