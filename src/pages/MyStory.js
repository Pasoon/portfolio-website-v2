import React, { Component } from 'react';
import styled from 'styled-components';
import Pasoon from '../images/pasoon.jpg';
import CustomCard from '../components/CustomCard';
import welbiImage from '../images/welbi.png';
import welbiLogo from '../images/welbilogo.jpg';
import nokiaImage from '../images/nokia.png';
import nokiaLogo from '../images/nokialogo.png';
import signiantImage from '../images/signiant.png'
import signiantLogo from '../images/signiantlogo.png';
import telferImage from '../images/telfer.png';
import telferLogo from '../images/telferlogo.png';

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
                      <Text>I am a student currently studying Software Engineering at the University of Ottawa with plans to graduate in 2020. With experiences from various internships, side projects and influences I have acquired a technical and theoretical skillset which has allowed me to provide advanced, holistic and relevant solutions to problems.
                          Aswell as development I have many hobbies and interests. Playing and watching soccer, playing video games, video editing, graphic design are all things I really enjoy to do on my spare time.
                           Here is my personal website, developed using React.js.</Text>
                        </TextContainer>
                  </div>
              </div>
              <Heading> EXPERIENCE </Heading>
              <div className = "row">
                <div className = "six columns">
                    <CustomCard 
                        title = {'Welbi'} 
                        description = {'Apr 2018 - Aug 2018'}
                        icon = {welbiLogo}
                        image = {welbiImage}/>
                </div>
                <div className = "six columns">
                    <CustomCard 
                        title = {'Nokia'} 
                        description = {'Sep 2017 - Dec 2017'} 
                        icon = {nokiaLogo}
                        image = {nokiaImage}/>
                </div>
            </div>
            <div className = "row">
                <div className = "six columns">
                    <CustomCard 
                        title = {'Signiant'}
                        description = {'Jan 2017 - Apr 2017'}
                        icon = {signiantLogo}
                        image = {signiantImage}/>
                </div>
                <div className = "six columns">
                    <CustomCard 
                        title = {'Telfer'} 
                        description = {'Jun 2016 - Sep 2016'}
                        icon = {telferLogo}
                        image = {telferImage}/>
                </div>
            </div>
          </MyStoryContent>
      </Container>
        
    );
  }
}

export default MyStory;
