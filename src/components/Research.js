import React, { Component } from 'react';
import styled from 'styled-components';
import University from '../images/uni.png';



const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 70px;
    text-align: left;
`;

const Paper = styled.a`
    font-size: 15px;
    padding-bottom: 5px;
    color: #627290;
`


class Research extends Component {
  render() {
    return (
            <Container>
                <VerticalWrapper>
                    <Paper href={require('../documents/Implications_Blockchain.pdf')}>Implications of Blockchain</Paper>
                    <Paper href={require('../documents/Benefits_Antivirus.pdf')}>Benefits of Antivirus</Paper>
                </VerticalWrapper>
            </Container>
    );
  }
}


export default Research;
