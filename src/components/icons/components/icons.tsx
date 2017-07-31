import * as  React from 'react';
import { IProps } from '../constants/icons';
// import '../../../../assets/icon.svg'

import '../styles/icons.scss';

export const iconsList = ["comments"];
export class IconComments extends React.Component<IProps, any> {

    render() {
        let { color, width, height, type,classname } = this.props;
        if ((!width) && (!height)) {
            width = 37.5;
            height = 37.5;
        } else if (width && (!height)) {
            height = width;
        } else if ((!width) && height) {
            width = height;
        }
        if (!color) {
            color = "#666";
        }

        let iconWidths = width;
        let icoHeight = height;

        switch (type) {
            case "comments": return (<svg name="comments" width={iconWidths} height={icoHeight} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Artboard" transform="translate(-38.000000, -44.000000)"></g>
                    <g id="基础控件" transform="translate(-217.000000, -635.000000)" fill={color}>
                        <g id="Page-1" transform="translate(218.199997, 637.500000)">
                            <path d="M8.775,17 C8.60175,17 8.429625,16.9331333 8.298,16.8005333 L6.273,14.7605333 C6.008625,14.4953333 6.008625,14.0646667 6.273,13.7994667 C6.53625,13.5331333 6.96375,13.5331333 7.227,13.7994667 L8.775,15.3589333 L10.323,13.7994667 C10.449,13.6714 10.62,13.6 10.8,13.6 L15.525,13.6 C15.897375,13.6 16.2,13.2951333 16.2,12.92 L16.2,2.04 C16.2,1.66486667 15.897375,1.36 15.525,1.36 L2.025,1.36 C1.652625,1.36 1.35,1.66486667 1.35,2.04 L1.35,12.92 C1.35,13.2951333 1.652625,13.6 2.025,13.6 L4.05,13.6 C4.422375,13.6 4.725,13.9037333 4.725,14.28 C4.725,14.6562667 4.422375,14.96 4.05,14.96 L2.025,14.96 C0.909,14.96 0,14.0442667 0,12.92 L0,2.04 C0,0.915733333 0.909,0 2.025,0 L15.525,0 C16.641,0 17.55,0.915733333 17.55,2.04 L17.55,12.92 C17.55,14.0442667 16.641,14.96 15.525,14.96 L11.079,14.96 L9.252,16.8005333 C9.120375,16.9331333 8.94825,17 8.775,17" id="Fill-1"></path>
                            <path d="M5.0625,8.16 C4.5045,8.16 4.05,7.70213333 4.05,7.14 C4.05,6.57786667 4.5045,6.12 5.0625,6.12 C5.6205,6.12 6.075,6.57786667 6.075,7.14 C6.075,7.70213333 5.6205,8.16 5.0625,8.16" id="Fill-3"></path>
                            <path d="M9.1125,8.16 C8.5545,8.16 8.1,7.70213333 8.1,7.14 C8.1,6.57786667 8.5545,6.12 9.1125,6.12 C9.6705,6.12 10.125,6.57786667 10.125,7.14 C10.125,7.70213333 9.6705,8.16 9.1125,8.16" id="Fill-5"></path>
                            <path d="M13.1625,8.16 C12.6045,8.16 12.15,7.70213333 12.15,7.14 C12.15,6.57786667 12.6045,6.12 13.1625,6.12 C13.7205,6.12 14.175,6.57786667 14.175,7.14 C14.175,7.70213333 13.7205,8.16 13.1625,8.16" id="Fill-7"></path>
                        </g>
                    </g>
                </g>
            </svg>)
            case "more": return (
                <svg className={classname} name="more"  viewBox="0 0 44 44" width={iconWidths} height={icoHeight}  fill={color}>
                    <path d="M22.355 28.237l-11.483-10.9c-.607-.576-1.714-.396-2.48.41l.674-.71c-.763.802-.73 2.071-.282 2.496l11.37 10.793-.04.039 2.088 2.196 1.098-1.043 12.308-11.682c.447-.425.48-1.694-.282-2.496l.674.71c-.766-.806-1.873-.986-2.48-.41L22.355 28.237z" fill-rule="evenodd"></path>
                </svg>
            )
            case "uparrow": return (
                <svg width={iconWidths} height={icoHeight} xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1024 1024" version="1.1" p-id="1378"  fill={color} >
                    <path xmlns="http://www.w3.org/2000/svg" d="M65.582671 735.208665l446.417329-446.41733 446.417329 446.41733z" p-id="1493"/>
                </svg>
            )
            default: return null;
        }

    }
}