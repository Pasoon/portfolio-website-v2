import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    height: 290px;
    width: 320px;
    -webkit-box-shadow: 0px 0px 3px 0px rgba(173,173,173,1);
    -moz-box-shadow: 0px 0px 3px 0px rgba(173,173,173,1);
    box-shadow: 0px 0px 3px 0px rgba(173,173,173,1); 
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
    height: 190px;
    width: 100%;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const Label = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    font-family: 'Karla', sans-serif;
    height: 100px;
    width: 100%;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #454545;
`;

const Description = styled.p`
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 200;
    color: #BBBABA;
`;

const Icon = styled.div`
    overflow: hidden;
    object-fit: cover;
    position: absolute;
    top: 65%;
    left: 50%;
    border: 5px solid white;
    border-radius: 500px
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    -ms-border-radius: 500px;
    -o-border-radius: 500px;

    height: 40px;
    width: 40px;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;



class Card extends Component {
  render() {
    return (
      <Container>
        <ImageContainer>
          <Image src={this.props.image}/>
        </ImageContainer>
        <Icon>
          <Image src={this.props.icon}/>
        </Icon>
        <Label>
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
        </Label>
      </Container>
    );
  }
}


Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string
}

export default Card;
