import React, { Component } from 'react';
import styled from 'styled-components';
import CustomCard from '../components/CustomCard';
import welbiImage from '../images/welbi.png';
import welbiLogo from '../images/welbilogo.jpg';
import nokiaImage from '../images/nokia.png';
import nokiaLogo from '../images/nokialogo.png';
import signiantImage from '../images/signiant.png'
import signiantLogo from '../images/signiantlogo.png';
import telferImage from '../images/telfer.png';
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
                    <CustomCard 
                        title = {'Welbi'} 
                        description = {'Apr 2018 - Aug 2018'}
                        icon = {welbiLogo}
                        image = {welbiImage}/>
                </div>
                <div className = "six columns">
                    <CustomCard 
                        title = {'Nokia'} 
                        description = {'Sep 2017 - Dec 2017'} 
                        icon = {nokiaLogo}
                        image = {nokiaImage}/>
                </div>
            </div>
            <div style = {{paddingTop: '20px'}} className = "row">
                <div className = "six columns">
                    <CustomCard 
                        title = {'Signiant'}
                        description = {'Jan 2017 - Apr 2017'}
                        icon = {signiantLogo}
                        image = {signiantImage}/>
                </div>
                <div className = "six columns">
                    <CustomCard 
                        title = {'Telfer'} 
                        description = {'Jun 2016 - Sep 2016'}
                        icon = {telferLogo}
                        image = {telferImage}/>
                </div>
            </div>
          </WorkContent>
      </Container>
    );
  }
}

export default Work;
