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
                        "url": "2"
                    },
                    {
                        "name": "二级菜单",
                        "url": "2"
                    }
                ]
            },
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "url": "2"
                    },
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "submenu": [
                                    {
                                        "name": "四级菜单",
                                        "url": "4"
                                    }
                                ]
                            },
                            {
                                "name": "三级菜单",
                                "url": "3"
                            }
                        ]
                    },
                    {
                        "name": "二级菜单",
                        "url": "2"
                    },
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "submenu": [
                                    {
                                        "name": "四级菜单",
                                        "url": "4"
                                    },
                                    {
                                        "name": "四级菜单",
                                        "submenu": [
                                            {
                                                "name": "五级菜单",
                                                "url": "5"
                                            },
                                            {
                                                "name": "五级菜单",
                                                "url": "5"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "三级菜单",
                                "url": "3"
                            }
                        ]
                    },
                    {
                        "name": "二级菜单",
                        "url": "2"
                    }
                ]
            },
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "url": "2"
                    },
                    {
                        "name": "二级菜单",
                        "url": "2"
                    },
                    {
                        "name": "二级菜单",
                        "url": "2"
                    }
                ]
            }
        ]
        return (
            <div >
                    <AccordionComponent menuArrs={accordarr} currentColor={'rgba(102,102,102,1)'} onClick={(e) => {
                        console.log(e.currentTarget.getElementsByClassName('pageUrl')[0].value);
                    }}/>
            </div>
        );
    }
}

export const AccordionDemoComponentWithHoc = hoc(AccordionDemoComponent);