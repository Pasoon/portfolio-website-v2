import React, { Component } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import Header from '../components/elements/Header';
import Text from '../components/elements/Text'

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: -1;
  right: 0;
  min-height: 200px;
  background-color: #F6F6F6;
  border-top: 1px solid #E9E9E9;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50vw;
`;

const SocialsWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
`;

const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-right: 50px;
    align-items: flex-start;
`;



class Footer extends Component {
render() {
return (
  <Container>
    <HorizontalWrapper className='row'>
      <div className='six columns'>
        <VerticalWrapper>
            <Header>GET IN TOUCH</Header>
            <Text>Catch me on all my socials below!</Text>
            <SocialsWrapper>
              <FaInstagram/>
              <FaTwitter/>
              <FaYoutube/>
              <FaLinkedin/>
              <FaGithub/>
            </SocialsWrapper>
        </VerticalWrapper>
      </div>
      <div className='six columns'>
        <VerticalWrapper>
            <Header>© 2019 Pasoon Azimi</Header>
        </VerticalWrapper>
      </div>
    </HorizontalWrapper>
  </Container>
);
}
}

export default Footer;