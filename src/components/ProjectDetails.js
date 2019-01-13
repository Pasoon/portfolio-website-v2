import React, { Component } from 'react';
import styled from 'styled-components';
const emoji = require('emoji-dictionary');

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 750px;
    padding: 20px 20px 20px 20px;
    background-color: white;
`;

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
    padding-top: 30px;
    font-weight: 600;
    font-size: 15px;
    text-align: left;
    font-family: 'Karla', Helvetica, sans-serif;
`;

const List = styled.ul`
    padding-top: 10px;
    font-weight: 700;
    font-size: 12px;
    list-style: none;
    text-align: left;
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
                <div className='row'>
                    <div className='two columns'>
                        <Icon>
                            <Image src={this.props.details.logo}/>
                        </Icon>
                    </div>
                    <div className='ten columns' style={{textAlign: 'left', display: 'flex', flexDirection: 'column', height: '20px'}}>
                        <h5>{this.props.details.title} · {this.props.details.type}</h5>
                        <Stack>{this.props.details.stack}</Stack>
                    </div>
                </div>
                <div className='row'>
                    <div className='nine columns'>
                        <Heading>OVERVIEW</Heading>
                        <Description>{this.props.details.description}</Description>
                    </div>
                    <div className='three columns'>
                        <Heading>TOOLS</Heading>
                        {/* {this.toolsAndTasks(this.props.details.tasks)} */}
                    </div>

                </div>
                {/* <button onClick={this.props.callbackFromParent}>Close</button> */}
            </Container>
        )
    }
}

export default ProjectDetails;