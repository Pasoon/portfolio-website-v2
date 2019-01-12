import React, { Component } from 'react';
import styled from 'styled-components';
import CustomCard from '../components/CustomCard';
import Container from '../components/elements/Container';
import * as constants from '../constants';

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
                        title={constants.MUNCHIES.title}
                        description={constants.MUNCHIES.stack}
                        icon={constants.MUNCHIES.logo}
                        image={constants.MUNCHIES.image}/>
                </div>
                <div className = "six columns">
                    <CustomCard 
                        title={constants.GRADED.title}
                        description={constants.GRADED.stack}
                        icon={constants.GRADED.logo}
                        image={constants.GRADED.image}/>
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
