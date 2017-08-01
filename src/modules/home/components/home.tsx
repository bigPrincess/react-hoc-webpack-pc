import * as React from 'react';
import { hoc } from '../containers/home';
import { IProps } from '../constants/home';
import { MenuComponent } from "../../common/menu/index";

import '../styles/home.scss';

export class HomeComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="">
                主页面
                <MenuComponent />
            </div>
        );
    }
}

export const HomeComponentWithHoc = hoc(HomeComponent);