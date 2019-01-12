import React, { Component } from 'react';
import styled from 'styled-components';
import CustomCard from '../components/CustomCard';
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
                            title={constants.MUNCHIES.title}
                            description={constants.MUNCHIES.stack}
                            icon={constants.MUNCHIES.logo}
                            image={constants.MUNCHIES.image}
                            onClick = {()=>this.handleCardClick(constants.MUNCHIES)}/>
                    </div>
                    <div className = "six columns">
                        <CustomCard 
                            title={constants.GRADED.title}
                            description={constants.GRADED.stack}
                            icon={constants.GRADED.logo}
                            image={constants.GRADED.image}
                            onClick = {()=>this.handleCardClick(constants.GRADED)}/>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Internships;
