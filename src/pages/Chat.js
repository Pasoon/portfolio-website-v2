import React, { Component } from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import Container from '../components/elements/Container';
import Header from '../components/elements/Header';
import Text from '../components/elements/Text';

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
                <Header>SAY HELLO</Header>
                  <Text> <a href="mailto:pasoon.azimi10@gmail.com">Email</a> is probably the most likely place I'll respond, but feel free to get in touch
                    with any of the links I've provided. If the right project rolls along, I'm always down for freelance work! <a href={require('../documents/Resume.pdf')}>Resume!</a></Text>
          </div>
          <div className='row' style={{display: 'flex', flexDirection: 'column'}}>
              <Header>CONTACT</Header>
              <ContactForm/>
          </div>
        </ChatContent>
      </Container>
    );
  }
}

export default Chat;
