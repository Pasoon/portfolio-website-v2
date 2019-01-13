import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../images/space.jpg';
import logo from '../images/icon.png';

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 300px;
    width: auto;
    position: relative;
    overflow: hidden;
    z-index: -1;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img});
    background-attachment: scroll;
    background-repeat: repeat-x;
    background-size:  auto 500px;

    -webkit-animation:100s scroll infinite linear;
  -moz-animation:100s scroll infinite linear;
  -o-animation:100s scroll infinite linear;
  -ms-animation:100s scroll infinite linear;
  animation:100s scroll infinite linear;

    @-webkit-keyframes scroll{
      100%{
        background-position: -3000px 0px;
      }
    }
    
    @-moz-keyframes scroll{
      100%{
        background-position: -3000px 0px;
      }
    }
    
    @-o-keyframes scroll{
      100%{
        background-position: -3000px 0px;
      }
    }
    
    @-ms-keyframes scroll{
      100%{
        background-position: -3000px 0px;
      }
    }
    
    @keyframes scroll{
      100%{
        background-position: -3000px 0px;
      }
    }
`;

const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    font-family: 'Karla', Helvetica, sans-serif;
    font-size: 25px;
    color: white;
    line-height: 36px;
    width: 75vw;


    @media(max-width:640px);
`;

const Logo = styled.img`
    height: 75px;
    width: 75px;
`;


class Banner extends Component {
  render() {
    return (
      <div>
        <BannerContainer>
            <Title>Hey I'm Pasoon, an Ottawa based <br/>Software Developer.</Title>
            <Logo src={logo}/>
        </BannerContainer>
      </div>
    );
  }
}

export default Banner;