import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Join from './components/Join';
import Chat from './components/Chat';
const App = ()=>{
    return(
        <>
        <Switch>
        <Route path="/" exact  component={Join} />
        <Route path="/chat"  component={Chat} />
        </Switch>
       
        </>
    )
}

export default App;