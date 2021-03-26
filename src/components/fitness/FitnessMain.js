import React from 'react';
import styled from 'styled-components';


import {Link} from 'react-router-dom'

export const Firstpage = () => {
    return (
        
            <Header>
            <Main>
            <Fheading>
                    <p>PUSH YOURSELF TO YOUR LIMITS</p>
                </Fheading>
            
            
                <SecHeading>
                    <p>THE BEST PLACE FOR YOUR FITNESS</p>
                </SecHeading>

                <Link to='/second'>
                <Button>GET STARTED</Button>
                </Link>

            </Main>
            
            </Header>
            
            
        
    )
}

const Header = styled.header`
height:100vh;
background:  url('https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80') no-repeat center center/cover;


`
const Main = styled.main` 
/* background-color: rgb(78, 75, 75); */
height: 100%;
background: rgba(78, 75, 75,0.5);


`








const Fheading = styled.div`
position: relative;
max-width: 70%;
height: 200px;
border: none;
margin: auto;
padding-top: 170px;

&::before{
    content: '';
    position: absolute;
    top:0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: black;
    opacity: 0;
    border-radius: 14px;

}



p{
    position: relative;
text-align: center;
padding-top: 70px;
font-size: 60px;
font-weight: bold;
color: #ffffff
}

`
const SecHeading = styled.div`
position: relative;
max-width: 70%;
margin: auto;
margin-top: 170px;
border: none;
border-radius: 12px;
&::before{
    content: '';
    position: absolute;
    top:0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: black;
    opacity: 0;
    border-radius: 14px;

}

p{
    position: relative;
    text-align:center;
    font-size: 30px;
    font-weight: bold;
    color: #f8f8f8

}
`
const Button = styled.button`
margin: auto;
margin-top: 60px;
display:block;
text-decoration:none;
max-width: 20%;
padding: 10px;
font-size: 30px;
border: 3px solid whitesmoke;
background: rgba(128, 128, 128,0.1);
color: #ffffff;
cursor: pointer;
`






// const MainPage = styled.div`
// height: 100vh;
// background: url('../images/tuxpi.com.1616217183.jpg') no-repeat center center/cover;

// `

 export default Firstpage;