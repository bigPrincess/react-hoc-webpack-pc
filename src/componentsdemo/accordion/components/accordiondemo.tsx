import * as React from 'react';

import { hoc } from '../containers/accordiondemo';
import { IProps } from '../constants/accordion';
import { AccordionComponent } from "../../../components/accordion/index";

import '../styles/accordion.scss';

export class AccordionDemoComponent extends React.Component<IProps, any> {
    render() {
        let accordarr = [
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "url": ""
                    },
                    {
                        "name": "二级菜单",
                        "url": ""
                    }
                ]
            },
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "url": ""
                    },
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "submenu": [
                                    {
                                        "name": "四级菜单",
                                        "url": ""
                                    }
                                ]
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                            }
                        ]
                    },
                    {
                        "name": "二级菜单",
                        "url": ""
                    },
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "submenu": [
                                    {
                                        "name": "四级菜单",
                                        "url": ""
                                    },
                                    {
                                        "name": "四级菜单",
                                        "submenu": [
                                            {
                                                "name": "五级菜单",
                                                "url": ""
                                            },
                                            {
                                                "name": "五级菜单",
                                                "url": ""
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                            }
                        ]
                    },
                    {
                        "name": "二级菜单",
                        "url": ""
                    }
                ]
            },
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "url": ""
                    },
                    {
                        "name": "二级菜单",
                        "url": ""
                    },
                    {
                        "name": "二级菜单",
                        "url": ""
                    }
                ]
            }
        ]
        return (
            <div >
                <AccordionComponent menuArrs={accordarr} eveType = {'click'} title="这个是插件DEMO页哦"/>
            </div>
        );
    }
}

export const AccordionDemoComponentWithHoc = hoc(AccordionDemoComponent);