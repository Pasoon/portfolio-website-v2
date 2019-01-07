import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import img from '../images/space.jpg';

const Header = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 250px;
    width: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img});
    background-attachment: scroll;
    background-repeat: repeat-x;
    background-size:  auto 500px;
`;

const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    font-family: 'Karla', sans-serif;
    font-size: 25px;
    color: white;
    line-height: 36px;
    width: 400px;
    min-width: 50%;

    @media(max-width:640px);
`;

class Banner extends Component {
  render() {
    return (
      <div>
        <Header>
            <Title>Hey I'm Pasoon, a Ottawa based <br/>Software Developer.</Title>
        </Header>
      </div>
    );
  }
}

export default Banner;