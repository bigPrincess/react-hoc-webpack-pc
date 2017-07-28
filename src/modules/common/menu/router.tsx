import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { MenuComponentWithHoc as MenuComponent} from './components/menu';


export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
                <Switch>
                    <Route path="/jc_h5/menu" component={MenuComponent} />                    
               </Switch>
        );
    }
}