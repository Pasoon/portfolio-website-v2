import React, { Component } from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 700px;
    width: 100%;
    padding-top: 10px;
`;

const Heading = styled.p`
    color: #CDCDCD;
    padding-top: 30px;
    font-weight: 600;
    font-size: 15px;
`;

const Text = styled.p`
    font-size: 15px;
    text-align: left;
    line-height: 1.7em;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

const ChatContent = styled.div`
    width: 700px;
    height: 100%;
`;


class Chat extends Component {
  render() {
    return (
      <Container>
        <ChatContent>
        <div className='row'>
                <Heading>SAY HELLO</Heading>
                <TextContainer>
                  <Text> <a href="mailto:pasoon.azimi10@gmail.com">Email</a> is probably the most likely place I'll respond, but feel free to get in touch
                    with any of the links I've provided. If the right project rolls along, I'm always down for freelance work! </Text>
                </TextContainer>
          </div>
          <div className='row' style={{display: 'flex', flexDirection: 'column'}}>
              <Heading>CONTACT</Heading>
              <ContactForm/>
          </div>
        </ChatContent>
      </Container>
    );
  }
}

export default Chat;
