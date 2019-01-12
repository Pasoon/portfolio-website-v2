import React, { Component } from 'react';
import styled from 'styled-components';
import CustomCard from './CustomCard';
import * as constants from '../constants';

const Container = styled.div`
`;

class Internships extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showDetails: false,
            details: '',
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

        return (
            <Container>
                <div className = "row">
                    <div className = "six columns">
                        <CustomCard 
                            title = {constants.WELBI.title} 
                            description = {constants.WELBI.date}
                            icon = {constants.WELBI.logo}
                            image = {constants.WELBI.image}
                            onClick = {()=>this.handleCardClick(constants.WELBI)}/>
                    </div>
                    <div className = "six columns">
                        <CustomCard 
                            title = {constants.NOKIA.title} 
                            description = {constants.NOKIA.date}
                            icon = {constants.NOKIA.logo}
                            image = {constants.NOKIA.image}
                            onClick = {()=>this.handleCardClick(constants.NOKIA)}/>
                    </div>
                </div>
                <div className = "row">
                    <div className = "six columns">
                        <CustomCard 
                            title = {constants.SIGNIANT.title} 
                            description = {constants.SIGNIANT.date}
                            icon = {constants.SIGNIANT.logo}
                            image = {constants.SIGNIANT.image}
                            onClick = {()=>this.handleCardClick(constants.SIGNIANT)}/>
                    </div>
                    <div className = "six columns">
                        <CustomCard 
                            title = {constants.TELFER.title} 
                            description = {constants.TELFER.date}
                            icon = {constants.TELFER.logo}
                            image = {constants.TELFER.image}
                            onClick = {()=>this.handleCardClick(constants.TELFER)}/>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Internships;