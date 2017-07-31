import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { DatepickerDemoComponentWithHoc as DatepickerDemoComponent} from './components/datepicker';


export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
                <Switch>
                    <Route path="/components/datepicker" component={DatepickerDemoComponent} />                    
               </Switch>
        );
    }
}