import * as React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { RouterComponent as  ComponentsDemoRouter} from './componentsdemo/home';
import { RouterComponent as HomeRouterComponent} from './modules/home';


export class RouterComponent extends React.Component<any, any>{
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/components" component={ComponentsDemoRouter} />
                    <Route path="/jc_h5" component={HomeRouterComponent} />
                    <Redirect from="/" to="/jc_h5" />
                </Switch>
            </Router>
        );
    }
}