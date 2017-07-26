import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeComponentHoc as HomeComponent } from './components/home';
import { RouterComponent as HttpDemoRouter } from '../http';
import { RouterComponent as ImgZoomInDemoRouter } from '../imgzoomin';
import { AntdComponent } from '../antd';
import { RouterComponent as IconDemoRouter } from '../icon';

export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
            <Switch>
                <Route path="/components/http" component={HttpDemoRouter} />
                <Route path="/components/imgzoomin" component={ImgZoomInDemoRouter} />
                <Route path="/components/antd" component={AntdComponent}/>
                <Route path="/components/icon" component={IconDemoRouter} />
                <Route path="/components" component={HomeComponent} />
            </Switch>
        );
    }
}