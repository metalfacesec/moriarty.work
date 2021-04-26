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
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;