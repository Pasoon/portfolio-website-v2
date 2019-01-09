import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 650px;
    width: 100%;
    border: 1px solid;
    padding-top: 50px;
`;

const ProjectsContent = styled.div`
    height: 100%;
`;



class Projects extends Component {
  render() {
    return (
      <Container>
          <ProjectsContent>
            <div className = "row">
                <div className = "six columns"><Card/></div>
                <div className = "six columns"><Card/></div>
            </div>
            <div style={{paddingTop: '20px'}} className = "row">
                <div className = "six columns"><Card/></div>
                <div className = "six columns"><Card/></div>
            </div>
          </ProjectsContent>
      </Container>
    );
  }
}

export default Projects;
