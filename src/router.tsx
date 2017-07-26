import * as React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { RouterComponent as  ComponentsDemoRouter} from './componentsdemo/home';


export class RouterComponent extends React.Component<any, any>{
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/components" component={ComponentsDemoRouter} />
                    <Redirect from="/" to="/components" />
                </Switch>
            </Router>
        );
    }
}