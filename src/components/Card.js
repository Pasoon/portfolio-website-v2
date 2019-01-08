import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 250px;
    width: 280px;
    box-shadow: 0px 0px 1px #777;
    position: relative;

    transition: box-shadow 0.2s linear;
    -webkit-transition: box-shadow 0.2s linear;
    -moz-transition: box-shadow 0.2s linear;

    &:hover{
      -webkit-box-shadow: -5px 10px 35px 0px rgba(173,173,173,1);
      -moz-box-shadow: -5px 10px 35px 0px rgba(173,173,173,1);
      box-shadow: -5px 10px 35px 0px rgba(173,173,173,1);
    }
`;

const ImageContainer = styled.div`
    height: 160px;
    width: 100%;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const Label = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    height: 90px;
    width: 100%;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 800;
`;

const Text = styled.p`
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 200;
`;

const Icon = styled.div`
    overflow: hidden;
    position: absolute;
    top: 60%;
    left: 50%;
    border: 5px solid white;
    border-radius: 500px
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    -ms-border-radius: 500px;
    -o-border-radius: 500px;

    height: 40px;
    width: 40px;
    background-color: black;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
   transform: translate(-50%, -50%);
`;



class Card extends Component {
  render() {
    return (
      <Container>
        <ImageContainer>
          <Image/>
        </ImageContainer>
        <Icon>
          <Image src="http://www.androidfreeware.net/img2/ubereats-faster-delivery.png"/>
        </Icon>
        <Label>
          <Title>Uber Eats</Title>
          <Text>Jun 2018 - Sep 2018</Text>
        </Label>
      </Container>
    );
  }
}

export default Card;
