import React, { Component } from 'react';
import styled from 'styled-components';


const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

class ContactForm extends Component {
  render() {
    return (
            <form action="https://formspree.io/pasoon.azimi10@gmail.com" method="POST">
                <VerticalWrapper>
                    <input type="text" name="name" id='name' placeholder="John Doe"/>
                    <input type="email" name="email" id='email' placeholder="john.doe@email.com"/>
                    <textarea type="text" name="message" id='message' placeholder="Hey! Lets talk!"></textarea>
                    <input type="hidden" name="_subject" value="Website Contact"/> {/* <input type="submit" name="submit" value="Submit"/> */}
                    <input type="submit" name="submit" value="Submit"/>
                </VerticalWrapper>
            </form>
    );
  }
}


export default ContactForm;
