import * as  React from 'react';
import { IProps } from '../constants/cropperimg';
import { hoc } from '../containers/cropperimg';
import Lightbox from 'react-image-lightbox';


import '../styles/cropperimg.scss';

export class CropperImgComponent extends React.Component<IProps, any>{
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

export const CropperImgComponentHoc = hoc(CropperImgComponent);