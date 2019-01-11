import React, { Component } from 'react';
import styled from 'styled-components';
import Internships from '../components/Internships';
import CustomCardDetails from '../components/CustomCardDetails';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 700px;
    width: 100%;
    padding-top: 50px;
`;

const WorkContent = styled.div`
    height: 100%;
`;

class Work extends Component {
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
          <WorkContent>
              {
                  this.state.showDetails ? 
                    <CustomCardDetails details={this.state.details} callbackFromParent={this.detailsCallback}/> : 
                    <Internships callbackFromParent={this.cardCallback}/>
              }
          </WorkContent>
      </Container>
    );
  }
}

export default Work;
