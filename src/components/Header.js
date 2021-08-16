import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import '../css/header.css';

class Header extends React.Component {
    render() {
        return (
            <Container className="header-container" fluid>
                <Row>
                    <Col className="header-portrait-container">
                        <img class="header-portrait-image" src={process.env.PUBLIC_URL + '/me.jpg'} />
                        <div className="header-name">Sean Moriarty</div>
                        <div className="header-sub-text">Maker / Developer</div>
                        <Row>
                            <Col sm={0} md={3}></Col>
                            <Col sm={12} md={6}>
                                <div className="header-about-me-text">
                                    In my professional life I spend most of my time working with PHP and Javascript. I also work with Docker, AWS, MySQL, NoSQL, Redis and many other technologies and frameworks.
                                    In my free time I can commonly be found fixing and restoring arcade machines and game consoles. I'm also know to work with 3D modeling and 3D printing. I love taking things apart
                                    and figuring out how they work, as well as coming up with my own improvements and solutions to problems with products I own.
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;