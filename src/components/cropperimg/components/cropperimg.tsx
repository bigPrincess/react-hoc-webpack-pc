import * as  React from 'react';
import { IProps } from '../constants/cropperimg';
import { hoc } from '../containers/cropperimg';

import '../styles/cropperimg.scss';

export class CropperImgComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }
    render(): JSX.Element {
        return (
            <div>
                666
            </div>
            
        );
    }
}

export const CropperImgComponentHoc = hoc(CropperImgComponent);