import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    color: #CDCDCD;
    padding-top: 30px;
    font-weight: 600;
    font-size: 15px;
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
