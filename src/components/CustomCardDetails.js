import React, { Component } from 'react';
import styled from 'styled-components';
import telferLogo from '../images/telferlogo.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 700px;
    padding: 20px 20px 20px 20px;
    background-color: white;
`;

const Icon = styled.div`
    overflow: hidden;
    object-fit: cover;
    border: 5px solid white;
    border-radius: 500px
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    -ms-border-radius: 500px;
    -o-border-radius: 500px;

    height: 65px;
    width: 65px;
`;

const Description = styled.p`
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 200;
    color: #BBBABA;
`;

const Text = styled.p`
    text-align: left;
    padding-top: 10px;
    font-size: 16px;
    line-height: 1.7em;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const Heading = styled.p`
  color: #CDCDCD;
  padding-top: 30px;
  font-weight: 600;
  font-size: 15px;
  text-align: left;
`;

class CustomCardDetails extends Component {
    render() {
        return (
            <Container>
                <div className='row'>
                    <div className='two columns'>
                        <Icon>
                            <Image src={this.props.details.logo}/>
                        </Icon>
                    </div>
                    <div className='ten columns' style={{textAlign: 'left', display: 'flex', flexDirection: 'column', height: '20px'}}>
                        <h5>{this.props.details.title} · {this.props.details.role}</h5>
                        <Description>{this.props.details.date}</Description>
                    </div>
                </div>
                <div className='row'>
                    <div className='eight columns'>
                        <Heading>OVERVIEW</Heading>
                        <Text>{this.props.details.description}</Text>
                    </div>
                    <div className='four columns'>
                        <Heading>HATS WORN</Heading>
                    </div>

                </div>
                <button onClick={this.props.callbackFromParent}>Close</button>
            </Container>
        )
    }
}

export default CustomCardDetails;