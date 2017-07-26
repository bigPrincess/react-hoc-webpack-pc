import * as React from 'react';
import { Link } from "react-router-dom";

import { hoc } from '../containers/home';
import { IProps } from '../constants/home';

import '../styles/home.scss';

export class HomeComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="demo-list">
                
            </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);