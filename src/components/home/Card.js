import React from "react";
import { infos } from "../../info";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <Cards>
      {infos.map((info) => (
        <>
          <Container>
            <img key={info.image} src={info.image} alt="" />
            <h3>{info.title}</h3>
            <p>{info.info}</p>
            <Link to={info.path}>
              <h5>Know More</h5>
            </Link>
          </Container>
        </>
      ))}
    </Cards>
  );
};
const Cards = styled.div`
  padding: 10px;
  /* background-image: url(https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1080); */
  /* background-size: cover; */
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
font-family: 'Poppins', sans-serif;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  width: 30rem;
  height: 34rem;
  border: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin: 0 3rem;
  
  flex-wrap: wrap;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(204, 204, 204, 0.8);
  }
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  h3 {
    padding: 0.5rem;
    text-align: center;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #c0c0c0;
  }
  h5 {
    font-size: 0.8rem;
    color: lightgreen;
    text-align: right;
    margin: 0.5rem;
  }
`;

export default Card;
