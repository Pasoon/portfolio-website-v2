import React, { Component } from 'react';
import styled from 'styled-components';
import CustomCard from '../components/CustomCard';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 650px;
    width: 100%;
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
                <div className = "six columns">
                    <CustomCard 
                        title={'munchies'}
                        description={'React.js / Flask'}
                        icon={''}
                        image={''}/>
                </div>
                <div className = "six columns">
                    <CustomCard 
                        title={'graded'}
                        description={'Android'}
                        icon={''}
                        image={''}/>
                </div>
            </div>
            {/* <div style={{paddingTop: '20px'}} className = "row">
                <div className = "six columns"><CustomCard/></div>
                <div className = "six columns"><CustomCard/></div>
            </div> */}
          </ProjectsContent>
      </Container>
    );
  }
}

export default Projects;
