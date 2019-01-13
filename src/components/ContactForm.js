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
                    <input style={{color: '#627290', border: '1px solid #627290'}} type="text" name="name" id='name' placeholder="Jon Snow"/>
                    <input style={{color: '#627290', border: '1px solid #627290'}} type="email" name="email" id='email' placeholder="jon.snow@email.com"/>
                    <textarea style={{color: '#627290', border: '1px solid #627290'}} type="text" name="message" id='message' placeholder="You know nothing jon snow..."></textarea>
                    <input style={{color: '#627290', border: '1px solid #627290'}} type="hidden" name="_subject" value="Website Contact"/> {/* <input type="submit" name="submit" value="Submit"/> */}
                    <input style={{color: '#627290', border: '1px solid #627290'}}type="submit" name="submit" value="Submit"/>
                </VerticalWrapper>
            </form>
    );
  }
}


export default ContactForm;
