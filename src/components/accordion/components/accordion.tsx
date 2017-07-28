import * as  React from 'react';
import { IProps } from '../constants/accordion';
import { hoc } from '../containers/accordion';
// import { Link } from 'react-router-dom';
import {IconComments} from '../../icons';


import '../styles/accordion.scss';

export class AccordionComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }
    /**
	 * 创建一级菜单栏
	 */
    renderCreateMenu(menuarrs,accData) {
        let own = this;

        return (
            <ul>
                {
                    menuarrs.map(function (key, index) {
                        return (
                                <li>
                                    <div className="link">
                                        <input type="hidden" className="pageUrl" value={(key.url && key.url.length >0) ? (key.url) : null}/>
                                        <input type="hidden" className="objId" value={(key.id && key.id.length >0) ? (key.id) : null}/>
                                        <IconComments  width={accData.width || 20} height={accData.height || 20} color={accData.currentColor} type={accData.lefticon}/>                                                         
                                        <span className='menu-name'>{key.name}</span>  
                                        <IconComments classname={(!key.submenu) ? "more" : null} width={accData.width || 16} height={accData.height || 16} color={accData.currentColor} type={accData.righticon || 'more'}/>         
                                    </div>
                                    {(key.submenu && key.submenu.length > 0) ? own.renderCreateSubMenu(key.submenu,accData) : null}
                                </li>
                            )
                    })
                }
            </ul>
        )
    }

    /**
	 * 创建submenu菜单栏
	 */
    renderCreateSubMenu(SubMenu,accData) {
        let own = this;
        return (
            <ul className="submenu">
                {
                    SubMenu.map(function (key, index) {
                        return (
                            <li>
                                <div className="link">
                                    <input type="hidden" className="pageUrl" value={(key.url && key.url.length > 0) ? (key.url) : null}/>
                                    <input type="hidden" className="objId" value={(key.id && key.id.length > 0) ? (key.id) : null}/>
                                    <IconComments  width={accData.width || 20} height={accData.height || 20} color={accData.currentColor} type={accData.lefticon}/>                                                         
                                    <span className='menu-name'>{key.name}</span>  
                                    <IconComments classname={(!key.submenu) ? "more" : null}  width={accData.width || 16} height={accData.height || 16} color={accData.currentColor} type={accData.righticon || 'more'}/>         
                                </div>
                                {(key.submenu && key.submenu.length > 0) ? (own.renderCreateSubMenu(key.submenu,accData)) : null}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    render(): JSX.Element {
    // render() {
        let accData = this.props;
        let menuArrs  =  accData.menuArrs || '';
        return (
            <div id="accordion" className="m-accordion" style={{}}>
                {(menuArrs && menuArrs.length > 0) ? this.renderCreateMenu(menuArrs,accData) : null}
            </div>
        );
    }
}

export const AccordionComponentHoc = hoc(AccordionComponent);