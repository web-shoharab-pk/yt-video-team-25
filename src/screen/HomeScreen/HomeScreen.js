import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import Video from '../../components/Video/Video';
import { getPopularVideos, getVideosByCategory } from '../../redux/action/video.action';
import InfiniteScroll from 'react-infinite-scroll-component';



const HomeScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const { videos, activeCategory} = useSelector(state => state.homeVideos)
    console.log(videos)
     const fetchData = () => {
         if(activeCategory === 'All')
         dispatch(getPopularVideos())
         else{
             dispatch(getVideosByCategory(activeCategory))
         }
     }

    return (
        <Container>
            <CategoriesBar />
            <Row>
            <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            className='row'>

                    {
                        videos.map((video) => (
                            <Col lg={3} md={4}>
                                <Video video={video} key={video.id}></Video>
                            </Col>
                        ))
                    }

                </InfiniteScroll>
            </Row>
        </Container>
    );
};

export default HomeScreen;