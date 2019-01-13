import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    color: rgba(0, 0, 0, 0.25);
    letter-spacing: 2px;
    padding-top: 30px;
    font-weight: 600;
    font-size: 15px;
    font-family: 'Karla', Helvetica, sans-serif;
    text-transform: uppercase;
`;


class Header extends Component {
  render() {
    return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
    );
  }
}


export default Header;
