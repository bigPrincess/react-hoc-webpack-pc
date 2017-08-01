import * as  React from 'react';
import { IProps } from '../constants/cropperimg';
import { hoc } from '../containers/cropperimg';
import { Upload, Button, Icon, Modal, message } from 'antd';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import '../styles/cropperimg.scss';
let cropperFile,cropperUrl;
export class CropperImgComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }
    state = {
        previewVisible: false,
        previewImage: '',
        showCropper: false,
        fileList: [{
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
    }
    beforeUpload = (file) => {
        console.log(this.props.picSize);
        const picSizeM = this.props.picSize || 2;
        const isLtM = file.size / 1024 / 1024 < picSizeM;
        if (!isLtM) {
            message.warning('图片要小于' + picSizeM + 'M!');
        }
        return isLtM;
    }
    handleCancel = () => this.setState({ previewVisible: false })
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    cropperImg = (file) => {
        cropperFile = file[file.length - 1];
        cropperUrl = window.URL.createObjectURL(cropperFile);
        URL.revokeObjectURL(cropperUrl);
        console.log(file);
        this.setState({ showCropper: true });
    }
    handleChange = ({ fileList }) => {
        if (this.props.cropper && !this.props.multiple) {
            this.cropperImg(fileList)
        } else {
            this.setState({ fileList })
        }
    }
    closeCropper = () => {
        this.setState({ showCropper: false });
    }

    doCrop() {
        let fileList = this.state.fileList;
        let urlData = this.refs.cropper.getCroppedCanvas().toDataURL();
        let bytes = window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte

        //处理异常,将ascii码小于0的转换为大于0
        let ab = new ArrayBuffer(bytes.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
        }
        let fileName = cropperFile.name.substring(0, cropperFile.name.lastIndexOf("."));
        let file = new File([new Blob([ab], { type: 'image/png' })], fileName + ".png", { type: 'image/png' });
        let newFile = {
            uid: -1,
            name: fileName + ".png",
            status: 'done',
            originFileObj:file,
            url:""
        }
        this.state.fileList.push(newFile);
        this.setState({
            fileList:this.state.fileList
        })
        console.log(this.state.fileList);
        this.setState({ showCropper: false });
    }

    render(): JSX.Element {
        const { previewVisible, previewImage, fileList } = this.state;
        const props = this.props;
        const picLength = props.picLength || 3;
        const uploadProps = {
            action: props.action,
            onChange: this.handleChange,
            multiple: props.multiple || false,
            listType: 'picture-card',
            className: 'upload-list-inline',
            fileList: fileList,
            accept: "image",
            onPreview: this.handlePreview,
            beforeUpload: this.beforeUpload,

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
                    {fileList.length >= picLength ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                {this.state.showCropper &&
                    <div id="cropper-popup" className="cropper-popup-style">
                        <div className="cropper-wrapper">
                            <div className="cropper-header">
                                <p className="cropper-header-title">剪切图片</p>
                                <a className="close-btn" onClick={this.closeCropper}>X</a>
                            </div>
                            <div className="container">
                                <Cropper
                                    ref='cropper'
                                    src={cropperUrl}
                                    style={{ height: 400, width: '100%' }}
                                    aspectRatio={props.aspectRatio}
                                    viewMode={1}
                                    guides={false}
                                />
                            </div>
                            <div className="cropper-footer">
                                <button type="button" className="do-crop-btn" onClick={this.doCrop.bind(this)}>Crop</button>
                            </div>
                        </div>
                    </div>
                }
            </div>

        );
    }
}

export const CropperImgComponentHoc = hoc(CropperImgComponent);