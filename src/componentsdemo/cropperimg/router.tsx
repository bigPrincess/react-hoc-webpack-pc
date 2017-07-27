import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { CropperImgDemoComponentWithHoc as CropperImgDemoComponent} from './components/cropperimg';


export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
                <Switch>
                    <Route path="/components/cropperimg" component={CropperImgDemoComponent} />                    
               </Switch>
        );
    }
}