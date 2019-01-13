import React, { Component } from 'react';
import styled from 'styled-components';
import Pasoon from '../images/pasoon.jpg';
import Container from '../components/elements/Container';
import Header from '../components/elements/Header';
import Text from '../components/elements/Text';
import Education from '../components/Education';
import Research from '../components/Research';


const AboutContent = styled.div`
    width: 700px;
    height: 100%;
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

const MyImage = styled.img`
    height: 500px;
    width: 400px;
    object-fit: cover;
`;

class About extends Component {
  render() {
    return (
      <Container>
          <AboutContent>
              <div className='row'>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='four columns'>
                    <Header>Its a me</Header>
                      <ImageContainer>
                        <MyImage src={Pasoon}/>
                      </ImageContainer>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='eight columns'>
                      <Header>Hi Stranger</Header>
                      <Text>I am a Software Developer based in Ottawa, currently studying 
                          Software Engineering at the University of Ottawa. 
                          My experiences from various internships, side projects and influences span all phases 
                          of the development process.  My interest in technology and artistic/creative side at heart has
                          led me into this field. Software Engineering provides myself and others outlet to bring ideas into reality. 
                           Here is my portfolio website, developed using React.js.</Text>
                  </div>
              </div>
              <hr></hr>
              <div className='row'>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='five columns'>
                    <Header>Education</Header>
                    <Education/>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='seven columns'>
                      <Header>Research</Header>
                      <Research/>
                  </div>
              </div>
          </AboutContent>
      </Container>
        
    );
  }
}

export default About;
