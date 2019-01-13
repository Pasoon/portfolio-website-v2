import React, { Component } from 'react';
import styled from 'styled-components';
import MyProjects from '../components/MyProjects';
import ProjectDetails from '../components/ProjectDetails';
import Container from '../components/elements/Container';
import Fade from 'react-reveal/Fade';

const ProjectsContent = styled.div`
    height: 100%;
    width: 700px;
`;



class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showDetails: false,
            details: '' 
        };

        this.cardCallback = (dataFromChild) => {
            this.setState({
                showDetails: dataFromChild.showDetails,
                details: dataFromChild.details,
            });
        }

        this.detailsCallback = () => {
            this.setState({
                showDetails: false,
                details: '',
            })
        }
      }


    componentWillReceiveProps(){
        this.setState({
            showDetails: false,
            details: '',
        })
    }
    
  render() {
    return (
      <Container>
          <ProjectsContent>
            {
                this.state.showDetails ? 
                <ProjectDetails details={this.state.details} callbackFromParent={this.detailsCallback}/> : 
                <MyProjects callbackFromParent={this.cardCallback}/>
            }
          </ProjectsContent>
      </Container>
    );
  }
}

export default Projects;
