import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import welbiLogo from '../images/welbilogo.jpg';
import nokiaLogo from '../images/nokialogo.jpg';
import signiantLogo from '../images/signiantlogo.png';
import telferLogo from '../images/telferlogo.png';

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
  render() {
    return (
      <Container>
          <WorkContent>
            <div className = "row">
                <div className = "six columns">
                    <Card 
                        title = {'Welbi'} 
                        description = {'Apr 2018 - Aug 2018'}
                        icon = {welbiLogo}
                        image = {''}/>
                </div>
                <div className = "six columns">
                    <Card 
                        title = {'Nokia'} 
                        description = {'Sep 2017 - Dec 2017'} 
                        icon = {nokiaLogo}
                        image = {'https://media.giphy.com/media/l0HlwWvBodzZVh0m4/giphy.gif'}/>
                </div>
            </div>
            <div style = {{paddingTop: '20px'}} className = "row">
                <div className = "six columns">
                    <Card 
                        title = {'Signiant'}
                        description = {'Jan 2017 - Apr 2017'}
                        icon = {signiantLogo}
                        image = {''}/>
                </div>
                <div className = "six columns">
                    <Card 
                        title = {'Telfer IT'} 
                        description = {'Jun 2016 - Sep 2016'}
                        icon = {telferLogo}
                        image = {''}/>
                </div>
            </div>
          </WorkContent>
      </Container>
    );
  }
}

export default Work;
