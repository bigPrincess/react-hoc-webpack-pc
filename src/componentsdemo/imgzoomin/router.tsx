import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { ImgZoomInDemoComponentWithHoc as ImgZoomInDemoComponent} from './components/imgzoomin';


export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
                <Switch>
                    <Route path="/components/imgzoomin" component={ImgZoomInDemoComponent} />                    
               </Switch>
        );
    }
}