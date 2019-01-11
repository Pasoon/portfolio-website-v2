import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 500px;
    width: 700px;
    padding-top: 50px;
    background-color: white;
    border: 1px solid black;
`;

class CustomCardDetails extends Component {
    render() {
        return (
            <Container>
                <h1>{this.props.details.title}</h1>
                <button onClick={this.props.callbackFromParent}>Close</button>
            </Container>
        )
    }
}

export default CustomCardDetails;