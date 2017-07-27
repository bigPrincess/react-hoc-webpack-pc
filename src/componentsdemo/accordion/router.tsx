import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { AccordionApiComponentWithHoc as AccordionApiComponent } from './components/accordion';
import { AccordionDemoComponentWithHoc as AccordionDemoComponent } from './components/accordiondemo';


export class RouterComponent extends React.Component<any, any>{

    render() {
        return (
                <Switch>
                    <Route path="/components/accordion/accordiondemo" component={AccordionDemoComponent} />
                    <Route path="/components/accordion" component={AccordionApiComponent} />
              </Switch>
        );
    }
}