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
    padding-left: 10px;
`;

const UniversityImage = styled.img`
    height: 65px;
    width: 80px;
`;

const UniversityName = styled.span`
    font-size: 14px;
    font-weight: 800;
    padding-bottom: 5px;
    text-align: left;
`

const Degree = styled.span`
    font-size: 13px;
    text-align: left;
    padding-bottom: 10px;
`;

const AdditionalInfo = styled.span`
    font-size: 12px;
    text-align: left;
`;

class Education extends Component {
  render() {
    return (
            <Container>
                <UniversityImage src={University}/>
                <VerticalWrapper>
                    <UniversityName>UNIVERSITY OF OTTAWA</UniversityName>
                    <Degree>BSc. Software Engineering</Degree>
                    <AdditionalInfo>Graduating April 2020</AdditionalInfo>
                    <AdditionalInfo>Dean’s Honour List</AdditionalInfo>
                </VerticalWrapper>
            </Container>
    );
  }
}


export default Education;
