import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 700px;
    width: 100%;
    padding-top: 50px;
`;


class Container extends Component {
  render() {
    return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
    );
  }
}


export default Container;
