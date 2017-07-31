import * as  React from 'react';
import { IProps } from '../constants/cropperimg';
import { hoc } from '../containers/cropperimg';
import { Upload, Icon, Modal, message } from 'antd';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import '../styles/cropperimg.scss';

export class CropperImgComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }

    render(): JSX.Element {
        //const { previewVisible, previewImage, fileList,handleCancel } = this.props;
        const props = this.props;
        const picLength = props.picLength || 3;
        const uploadProps = {
            action: props.action,
            onChange: props.handleChange,
            multiple: props.multiple || false,
            listType: 'picture-card',
            className: 'upload-list-inline',
            fileList: props.fileList,
            accept: "image",
            onPreview: props.handlePreview,
            beforeUpload: props.beforeUpload,

        };
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        if (!props.action) {
            message.warning('请输入图片上传的地址 action！');
            return <div></div>
        }
        return (
            <div className="">
                <Upload {...uploadProps}>
                    {props.fileList.length >= picLength ? null : uploadButton}
                </Upload>
                <Modal visible={props.previewVisible} footer={null} onCancel={props.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={props.previewImage} />
                </Modal>
                {props.showCropper &&
                    <div id="cropper-popup" className="cropper-popup-style">
                        <div className="cropper-wrapper">
                            <div className="cropper-header">
                                <p className="cropper-header-title">剪切图片</p>
                                <a className="close-btn" onClick={props.closeCropper}>X</a>
                            </div>
                            <div className="container">
                                <Cropper
                                    ref='cropper'
                                    src={props.originCropperUrl}
                                    style={{ height: 400, width: '100%' }}
                                    aspectRatio={props.aspectRatio}
                                    viewMode={1}
                                    guides={false}
                                />
                            </div>
                            <div className="cropper-footer">
                                <button type="button" className="do-crop-btn" onClick={props.doCrop.bind(this,this)}>Crop</button>
                            </div>
                        </div>
                    </div>
                }
            </div>

        );
    }
}

export const CropperImgComponentHoc = hoc(CropperImgComponent);