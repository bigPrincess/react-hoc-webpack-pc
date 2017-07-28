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
	 * 创建一级菜单栏和子集菜单栏
	 */
    renderCreateMenu(menuarrs,accData,count) {
        let own = this;
        ++count;
        return (
            <ul className={(count > 1) ? "submenu" : null}>
                {
                    menuarrs.map(function (key, index) {
                        return (
                                <li  onClick={(e)=>{
                                    e.stopPropagation();
                                    accData.onClick(e);
                                    }}>
                                    <div className="link">
                                        <input type="hidden" className="pageUrl" value={(key.url && key.url.length >0) ? (key.url) : null}/>
                                        <input type="hidden" className="objId" value={(key.id && key.id.length >0) ? (key.id) : null}/>
                                        <IconComments  width={accData.width || 20} height={accData.height || 20} color={accData.currentColor} type={accData.lefticon}/>                                                         
                                        <span className='menu-name'>{key.name}</span>  
                                        <IconComments classname={(!key.submenu) ? "more" : null} width={accData.width || 16} height={accData.height || 16} color={accData.currentColor} type={accData.righticon || 'more'}/>         
                                    </div>
                                    {(key.submenu && key.submenu.length > 0) ? own.renderCreateMenu(key.submenu,accData,count) : null}
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
        // accData.count == 1;
        return (
            <div id="accordion" className="m-accordion" style={{}}>
                {(menuArrs && menuArrs.length > 0) ? this.renderCreateMenu(menuArrs,accData,0) : null}
            </div>
        );
    }
}

export const AccordionComponentHoc = hoc(AccordionComponent);