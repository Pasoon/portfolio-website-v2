import React, { Component } from 'react';
import styled from 'styled-components';
import Pasoon from '../images/pasoon.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 700px;
    width: 100%;
    padding-top: 10px;
`;

const MyStoryContent = styled.div`
    width: 700px;
    height: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

const Text = styled.p`
    font-size: 15px;
    text-align: left;
    line-height: 1.7em;
`;

const ImageContainer = styled.div`
    display: flex;
    height: 200px;
    width: 200px;
    justify-content: center;
    border: 2px solid white;
    border-radius: 500px
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    -ms-border-radius: 500px;
    -o-border-radius: 500px;
    overflow: hidden;
`;

const Heading = styled.p`
  color: #CDCDCD;
  padding-top: 30px;
  font-weight: 600;
  font-size: 15px;
`;

const MyImage = styled.img`
    height: 500px;
    width: 400px;
    object-fit: cover;
`;

class MyStory extends Component {
  render() {
    return (
      <Container>
          <MyStoryContent>
              <div className='row'>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='four columns'>
                    <Heading>IT'S A ME</Heading>
                      <ImageContainer>
                        <MyImage src={Pasoon}/>
                      </ImageContainer>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='eight columns'>
                      <Heading>HI STRANGER</Heading>
                      <TextContainer>
                      <Text>I am a Software Developer based in Ottawa, currently studying 
                          Software Engineering at the University of Ottawa. 
                          My experiences from various internships, side projects and influences span all phases 
                          of the development process.  My interest in technology and artistic/creative side at heart has
                          led me into this field. Software Engineering provides myself and others outlet to bring ideas into reality. 
                          Aswell as development I have many hobbies and interests. 
                           Playing and watching soccer, playing video games, video editing, 
                           graphic design are all things I really enjoy to do on my spare time.
                           Here is my personal website, developed using React.js.</Text>
                        </TextContainer>
                  </div>
              </div>
              <div className='row'>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='four columns'>
                    <Heading>EDUCATION</Heading>
                    <p>UNIVERSITY OF OTTAWA</p>
                    <p>BSc. Software Engineering</p>
                    <p>Graduating Winter 2020</p>
                    <p>CGPA: 8.3/10</p>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='eight columns'>
                      <Heading>RESEARCH</Heading>
                      <a href={require('../documents/Implications_Blockchain.pdf')}>Implications of Blockchain</a>
                      <a href={require('../documents/Benefits_Antivirus.pdf')}>Benefits of Antivirus</a>
                  </div>
              </div>
          </MyStoryContent>
      </Container>
        
    );
  }
}

export default MyStory;
