import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import {  Redirect, Route, Switch, useHistory} from 'react-router-dom';
import './style/_app.scss';
import LoginScreen from './screen/LoginScreen/LoginScreen';
import { useSelector } from 'react-redux';


const Leyout = ({children}) =>  {
    const [sidebar, toggleSidebar] = useState(false)
    console.log(sidebar)
        const handleToggleSidebar = () =>  {toggleSidebar(value => !value) 
        }
    return( 
        <>
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className="app__container border border-info">
            <Sidebar   sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}  />

            <Container fluid className="app__main border border-warning">
               {children}
            </Container>
        </div>

    </>
    )
}

const App = () => {
    
    const {accessToken, loading} = useSelector(state => state.auth)

    const history = useHistory()

    useEffect(() => {
        if (!loading && !accessToken) {
            history.push('/auth') 
        }

    }, [accessToken, loading, history])

    return (
       
          <Switch>
                <Route exact path="/">
                    <Leyout>
                        <HomeScreen />
                    </Leyout>
                </Route>

                <Route path="/auth">
                    <LoginScreen></LoginScreen>
                </Route>
                <Route path="/search">
                     <h1>Search Result</h1>
                </Route>



                <Route>
                    <Redirect to="/" />
                 </Route> 
          </Switch> 
    );
};

export default App;