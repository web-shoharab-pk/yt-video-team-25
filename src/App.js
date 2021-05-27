import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import './style/_app.scss'


const App = () => {
    return (
        <>
            <Header />
            <div className="app__container border border-info">
                <Sidebar />

                <Container fluid className="app__main border border-warning">
                    <HomeScreen />
                </Container>
            </div>
        </>
    );
};

export default App;