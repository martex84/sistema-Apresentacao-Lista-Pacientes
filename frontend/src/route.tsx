import { Route, BrowserRouter, Switch } from 'react-router-dom'

import App from "./App";

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={App} path="/" exact />
            </Switch>
        </BrowserRouter>
    );
}