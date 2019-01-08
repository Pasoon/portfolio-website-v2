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

const Image = styled.img`
    height: 160px;
    width: 100%;
`;

const Label = styled.div`
    height: 90px;
    width: 100%;
`;

const Icon = styled.div`
    position: absolute;
    top: 64%;
    left: 50%;
    border-radius: 10px;

    height: 50px;
    width: 50px;
    background-color: black;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
   transform: translate(-50%, -50%);
`;


class Card extends Component {
  render() {
    return (
      <Container>
        <Image/>
        <Icon/>
        <Label/>
      </Container>
    );
  }
}

export default Card;
