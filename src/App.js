import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import './style/_app.scss'


const App = () => {
    
    const [sidebar, toggleSidebar] = useState(false)
console.log(sidebar)
    const handleToggleSidebar = () =>  {toggleSidebar(value => !value)
    console.log("clicked")
    }



    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container border border-info">
                <Sidebar sidebar={sidebar} />

                <Container fluid className="app__main border border-warning">
                    <HomeScreen />
                </Container>
            </div>
        </>
    );
};

export default App;