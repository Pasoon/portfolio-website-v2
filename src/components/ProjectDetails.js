import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../components/elements/Container';
import {FaGithub} from 'react-icons/fa';
const emoji = require('emoji-dictionary');

const Icon = styled.div`
    overflow: hidden;
    object-fit: cover;
    border: 5px solid white;
    border-radius: 500px
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    -ms-border-radius: 500px;
    -o-border-radius: 500px;

    height: 65px;
    width: 65px;
`;

const DetailsContent = styled.div`
    height: 100%;
`;

const Stack = styled.p`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    color: rgba(0,0,0,0.3);
    font-family: 'Karla', Helvetica, sans-serif;
`;

const Description = styled.p`
    text-align: left;
    padding-top: 10px;
    font-size: 16px;
    line-height: 1.7em;
    font-family: 'Volkorn', Georgia, serif;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const Heading = styled.p`
    color: rgba(0, 0, 0, 0.25);
    letter-spacing: 2px;
    padding-top: 20px;
    font-weight: 600;
    font-size: 15px;
    text-align: left;
    font-family: 'Karla', Helvetica, sans-serif;
`;

const Title = styled.h5`
    font-family: 'Karla', Helvetica, sans-serif;
    font-size: 22px;
    font-weight: 600;
`;

const Seperator = styled.hr`
    @media (max-width: 375px) {
        margin-top: 50px;
  }
`

const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    @media (max-width: 375px) {
        margin-top: 100px;
  }
`;

const List = styled.ul`
    padding-top: 10px;
    font-weight: 700;
    font-size: 12px;
    list-style: none;
    text-align: left;
`;

const MoreInfo = styled.a`
  display: flex;
  justify-content: center;
  font-size: 13px;
  color: black;
  text-decoration: none;
  &:hover{
    color: ${props=>props.color};
    text-decoration: underline;
  }
`

const CustomGithubLogo = styled(FaGithub)`
    margin-right: 5px;
`;

class ProjectDetails extends Component {

    // tools = (tasks) => {
    //     console.log(emoji.names)
    //     console.log(emoji.unicode)
    //     const listItems = tasks.map((task) => 
    //         <li>{emoji.getUnicode(task.emoji) + ' ' + task.title}</li>
    //     );
        
    //     return (
    //         <List>{listItems}</List>
    //     )
    // }

    render() {
        return (
            <Container>
                <DetailsContent>
                    <div className='row'>
                        <div className='two columns'>
                            <Icon>
                                <Image src={this.props.details.logo}/>
                            </Icon>
                        </div>
                        <div className='ten columns' style={{textAlign: 'left', display: 'flex', flexDirection: 'column', height: '20px'}}>
                            <Title>{this.props.details.title} · {this.props.details.type}</Title>
                            <Stack>{this.props.details.stack}</Stack>
                        </div>
                    </div>
                    <div className='row'>
                        <ImageContainer>
                            <Image src={this.props.details.overviewImages}/>
                        </ImageContainer>
                    </div>
                    <Seperator></Seperator>
                    <div className='row' style={{marginBottom:'20px'}}>
                        <div className='nine columns'>
                            <Heading>OVERVIEW</Heading>
                            <Description>{this.props.details.description}</Description>
                        </div>
                        <div className='three columns'>
                            <Heading>TOOLS</Heading>
                            {/* {this.toolsAndTasks(this.props.details.tasks)} */}
                        </div>

                    </div>
                    <div className='row' style={{marginBottom:'50px'}}>
                        <MoreInfo color={this.props.details.color} href={this.props.details.githubLink}><CustomGithubLogo/> To see more of this project.</MoreInfo>
                    </div>
                    {/* <button onClick={this.props.callbackFromParent}>Close</button> */}
                </DetailsContent>
            </Container>
        )
    }
}

export default ProjectDetails;