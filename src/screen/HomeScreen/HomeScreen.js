import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import Video from '../../components/Video/Video';
import { getPopularVideos } from '../../redux/action/video.action';

const HomeScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const {videos} = useSelector(state => state.homeVideos)

    console.log(videos)

    return (
        <Container>
            <CategoriesBar />
            <Row>
                {
                    videos.map((video) => (
                        <Col lg={3} md={4}>
                        <Video video={video} key={video.id}></Video>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default HomeScreen;