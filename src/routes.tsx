import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import MapOngs from './pages/MapOngs';
import Ong from './pages/Ong';
import CreateOng from './pages/CreateOng';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/app" component={MapOngs}></Route>

                <Route path="/ong/create" component={CreateOng}></Route>
                <Route path="/ong/:id" component={Ong}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;