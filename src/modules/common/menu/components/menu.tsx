import * as React from 'react';
import { hoc } from '../containers/menu';
import { IProps } from '../constants/menu';

import '../styles/menu.scss';

export class MenuComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="img-zoom-in-demo-content">
                菜单
                <br/><span className="detail">{this.props.http_reault}</span>
            </div>
        );
    }
}

export const MenuComponentWithHoc = hoc(MenuComponent);