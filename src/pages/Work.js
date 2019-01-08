import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 700px;
    width: 100%;
    border: 1px solid;
`;



class Work extends Component {
  render() {
    return (
      <Container>
          <Card/>
      </Container>
    );
  }
}

export default Work;
