import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { MessageDemoComponentWithHoc as MessageDemoComponent} from './components/message';


export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
                <Switch>
                    <Route path="/components/message" component={MessageDemoComponent} />                    
               </Switch>
        );
    }
}