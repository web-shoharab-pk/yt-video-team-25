import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import Video from '../../components/Video/Video';

const HomeScreen = () => {
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {
                    [...new Array(20)].map(() => (
                        <Col lg={3} md={4}>
                        <Video></Video>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default HomeScreen;