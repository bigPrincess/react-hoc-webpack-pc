import * as  React from 'react';
import { IProps } from '../constants/imgzoomin';
import { hoc } from '../containers/imgzoomin';
import Lightbox from 'react-image-lightbox';


import '../styles/imgzoomin.scss';

export class ImgZoomInComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }
    render(): JSX.Element {
        let props = this.props;
        return (
            <div>
                <img src={props.imgUrl} onClick={(e)=>props.zoomIn(e)} className={props.className}/>
                {props.isOpen &&
                    <Lightbox
                        clickOutsideToClose={false}
                        onCloseRequest={() => props.zoomOut()}
                        mainSrc={props.imgUrl}
                    />
                    
                }
            </div>
            
        );
    }
}

export const ImgZoomInComponentHoc = hoc(ImgZoomInComponent);