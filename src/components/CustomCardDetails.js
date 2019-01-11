import React, { Component } from 'react';
import styled from 'styled-components';
import telferLogo from '../images/telferlogo.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 700px;
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

const Description = styled.p`
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 200;
    color: #BBBABA;
`;

const Text = styled.p`
    text-align: left;
    padding-top: 10px;
    font-size: 15px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

class CustomCardDetails extends Component {
    render() {
        return (
            <Container>
                <div className='row'>
                    <div className='two columns'>
                        <Icon>
                            <Image src={telferLogo}/>
                        </Icon>
                    </div>
                    <div className='ten columns' style={{textAlign: 'left', display: 'flex', flexDirection: 'column', height: '20px'}}>
                        <h5>{this.props.details.title} · Full Stack Developer</h5>
                        <Description>SEP 2018 - JAN 2018</Description>
                    </div>
                </div>
                <div className='row'>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra dignissim convallis. Phasellus vehicula augue arcu, quis eleifend erat commodo ac. Suspendisse eget euismod est. Ut pharetra volutpat mi sed gravida. Proin ornare elementum scelerisque. Donec sed condimentum lacus. Donec auctor euismod mauris. Phasellus ultrices in velit eu varius. Quisque aliquam odio ex, sed feugiat lorem pellentesque ac. Morbi consectetur dictum blandit. Etiam tristique tellus mauris, vel dictum metus consequat sed. Proin eget leo eu mauris pharetra vehicula.

Pellentesque sed arcu eget eros molestie scelerisque eu rutrum velit. Sed augue lectus, commodo sit amet purus et, luctus faucibus erat. Curabitur et nunc blandit, gravida tellus sed, ullamcorper augue. Donec rutrum nisi dolor, ac accumsan turpis posuere id. Ut ut eros pellentesque, suscipit tellus in, pretium leo. Praesent vestibulum risus ut varius bibendum. Pellentesque sed dui leo. Pellentesque viverra sollicitudin tellus quis finibus. Suspendisse potenti. Integer quis justo vehicula, gravida ex et, pellentesque nisi. Vestibulum scelerisque, justo feugiat sodales elementum, neque velit vulputate turpis, non rutrum arcu urna ac ligula.

Sed placerat laoreet elit, id ultricies tortor vulputate vitae. Sed imperdiet nulla eu bibendum euismod. Aliquam viverra sapien nulla, vel aliquam felis fermentum id. Vestibulum at tincidunt urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec laoreet tempor purus, a ornare neque bibendum ac. Vestibulum hendrerit orci vel arcu tincidunt, sit amet lacinia sem blandit.</Text>
                    <button onClick={this.props.callbackFromParent}>Close</button>

                </div>
            </Container>
        )
    }
}

export default CustomCardDetails;