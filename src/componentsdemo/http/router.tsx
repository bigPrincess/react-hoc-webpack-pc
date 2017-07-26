import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HttpDemoComponentHoc as HttpDemoComponent } from './components/http';
import { HttpDemoComponentHoc as GetNoheaderNoparams } from './components/http.get.noheader.noparams';
import { HttpDemoComponentHoc as GetNoheaderParams } from './components/http.get.noheader.params';
import { HttpDemoComponentHoc as PostNoheaderParams } from './components/http.post.noheader.params';
import { HttpDemoComponentHoc as PostHeaderParams } from './components/http.post.header.params';


export class RouterComponent extends React.Component<any, any>{

    render() {
        return (
            <Switch>
                <Route path="/components/http/get-noheader-noparams" component={GetNoheaderNoparams} />
                <Route path="/components/http/get-noheader-params" component={GetNoheaderParams} />
                <Route path="/components/http/post_noheader_params" component={PostNoheaderParams} />
                <Route path="/components/http/post_header_params" component={PostHeaderParams} />
                <Route path="/components/http" component={HttpDemoComponent} />
            </Switch>

        );
    }
}