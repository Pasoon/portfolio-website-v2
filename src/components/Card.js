import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 340px;
    width: 290px;
`;


class Card extends Component {
  render() {
    return (
      <Container/>
    );
  }
}

export default Card;
