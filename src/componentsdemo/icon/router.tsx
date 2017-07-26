import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { IconDemoComponentWithHoc as IconDemoComponent} from './components/icon';


export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
                <Switch>
                    <Route path="/components/icon" component={IconDemoComponent} />                    
               </Switch>
        );
    }
}