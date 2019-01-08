import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 700px;
    width: 100%;
    border: 1px solid;
    padding-top: 50px;
`;

const WorkContent = styled.div`
    height: 100%;
`;



class Work extends Component {
  render() {
    return (
      <Container>
          <WorkContent>
            <div className = "row">
                <div className = "six columns"><Card/></div>
                <div className = "six columns"><Card/></div>
            </div>
          </WorkContent>
      </Container>
    );
  }
}

export default Work;
