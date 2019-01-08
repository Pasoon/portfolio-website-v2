import React, { Component } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left:0;
  bottom:0;
  right:0;
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
`;

const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    height: 100%;
    padding-right: 50px;
    align-items: flex-start;
`;

const Heading = styled.p`
  text-transform: uppercase;
  color: #CDCDCD;
  padding-top: 30px;
  font-weight: 600;
`;

const Text = styled.p`
`


class Footer extends Component {
render() {
return (
  <Container>
    <HorizontalWrapper className='row'>
      <div className='six columns'>
        <VerticalWrapper>
            <Heading>Get in Touch</Heading>
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
            <Heading>© 2019 Pasoon Azimi</Heading>
            <Text>This website was built using React.js</Text>
        </VerticalWrapper>
      </div>
    </HorizontalWrapper>
  </Container>
);
}
}

export default Footer;