import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardList from './components/CardList';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={CardList} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }