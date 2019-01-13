import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    font-size: 15px;
    text-align: left;
    line-height: 2.0em;
    font-family: 'Volkorn', Georgia, serif;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`


const Container = styled.div`

`;

class Text extends Component {
  render() {
    return (
            <TextContainer>
                  <Wrapper>{this.props.children}</Wrapper>
            </TextContainer>
    );
  }
}


export default Text;
