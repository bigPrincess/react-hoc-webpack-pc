import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeComponentHoc as HomeComponent } from './components/home';
import { RouterComponent as HttpDemoRouter } from '../http';
import { RouterComponent as ImgZoomInDemoRouter } from '../imgzoomin';
import { AntdComponent } from '../antd';
import { RouterComponent as IconDemoRouter } from '../icon';
import { RouterComponent as ImgCropperDemoRouter } from '../cropperimg';
import { RouterComponent as MessageDemoRouter } from '../message';
import { RouterComponent as AccordionDemoRouter } from '../accordion';
import { ApdaComponent} from "../adaptation";
import { ValidationComponent } from "../validation";
import { TableComponent } from "../table";
import { DatepickerDemoComponent } from "../datepicker";

export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
            <Switch>
                <Route path="/components/http" component={HttpDemoRouter} />
                <Route path="/components/imgzoomin" component={ImgZoomInDemoRouter} />
                <Route path="/components/antd" component={AntdComponent}/>
                <Route path="/components/icon" component={IconDemoRouter} />
                <Route path="/components/cropperimg" component={ImgCropperDemoRouter} />
                <Route path="/components/message" component={MessageDemoRouter} />
                <Route path="/components/accordion" component={AccordionDemoRouter} />
                <Route path="/components/ApdaComponent" component={ApdaComponent} />
                <Route path="/components/validation" component={ValidationComponent}></Route>
                 <Route path="/components/table" component={TableComponent}></Route>
                <Route path="/components/datepicker" component={DatepickerDemoComponent}></Route>
                <Route path="/components" component={HomeComponent} />
            </Switch>
        );
    }
}