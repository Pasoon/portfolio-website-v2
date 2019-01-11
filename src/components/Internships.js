import React, { Component } from 'react';
import styled from 'styled-components';
import CustomCard from './CustomCard';
import welbiImage from '../images/welbi.png';
import welbiLogo from '../images/welbilogo.jpg';
import nokiaImage from '../images/nokia.png';
import nokiaLogo from '../images/nokialogo.png';
import signiantImage from '../images/signiant.png'
import signiantLogo from '../images/signiantlogo.png';
import telferImage from '../images/telfer.png';
import telferLogo from '../images/telferlogo.png';

const Container = styled.div`
`;

class Internships extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showDetails: false,
            details: {
                title: '',
                role: '',
                date: '',
                image: '',
                description: '',
                color1: '',
                color2: '',
            }
        };
    }

    handleCardClick = (details) => {
        this.setState({
            showDetails: true,
            details: details,
        }, this.callBack);
    }

    callBack = () => {
        this.props.callbackFromParent(this.state);
    }

    render() {

        const welbiDetails = {
            title: 'Welbi',
            role: 'Full Stack Developer',
            date: 'Apr 2018 - Aug 2018',
            image: '',
            description: '',
            color1: '',
            color2: ''
        }

        const nokiaDetails = {
            title: 'Nokia',
            role: 'Software Designer',
            date: 'Sep 2017 - Dec 2017',
            image: '',
            description: '',
            color1: '',
            color2: ''
        }

        const signiantDetails = {
            title: 'Signiant',
            role: 'Software Developer',
            date: 'Jan 2017 - Apr 2017',
            image: '',
            description: '',
            color1: '',
            color2: ''
        }

        const telferDetails = {
            title: 'Telfer',
            role: 'Junior Programmer',
            date: 'Jun 2016 - Sep 2016',
            image: '',
            description: '',
            color1: '',
            color2: ''
        }

        return (
            <Container>
                <div className = "row">
                    <div className = "six columns">
                        <CustomCard 
                            title = {'Welbi'} 
                            description = {'Apr 2018 - Aug 2018'}
                            icon = {welbiLogo}
                            image = {welbiImage}
                            onClick = {()=>this.handleCardClick(welbiDetails)}/>
                    </div>
                    <div className = "six columns">
                        <CustomCard 
                            title = {'Nokia'} 
                            description = {'Sep 2017 - Dec 2017'} 
                            icon = {nokiaLogo}
                            image = {nokiaImage}
                            onClick = {()=>this.handleCardClick(nokiaDetails)}/>
                    </div>
                </div>
                <div className = "row">
                    <div className = "six columns">
                        <CustomCard 
                            title = {'Signiant'}
                            description = {'Jan 2017 - Apr 2017'}
                            icon = {signiantLogo}
                            image = {signiantImage}
                            onClick = {()=>this.handleCardClick(signiantDetails)}/>
                    </div>
                    <div className = "six columns">
                        <CustomCard 
                            title = {'Telfer'} 
                            description = {'Jun 2016 - Sep 2016'}
                            icon = {telferLogo}
                            image = {telferImage}
                            onClick = {()=>this.handleCardClick(telferDetails)}/>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Internships;