import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { HomeComponentWithHoc as HomeComponent} from './components/home';


export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
                <Switch>
                    <Route path="/jc_h5/menu" component={HomeComponent} />                    
               </Switch>
        );
    }
}