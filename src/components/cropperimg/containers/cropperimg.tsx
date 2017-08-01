import { compose, withHandlers, withState } from "recompose";
import { IProps } from '../constants/cropperimg';
import { message } from 'antd';

let cropperFile, cropperUrl;
export const hoc = compose<IProps, any>(
    withState("previewVisible", "setPreviewVisible", false),
    withState("previewImage", "setPreviewImage", ""),
    withState("showCropper", "setShowCropper", false),
    withState("originCropperUrl", "setOriginCropperUrl", ""),
    withState("fileList", "setFileList", [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }]),
    withHandlers({
        showCropperImg: (props: IProps) => {
            return (file) => {
                let URL = window.URL || window.webkitURL;
                cropperFile = file[file.length - 1].originFileObj;
                let originCropperUrl = URL.createObjectURL(cropperFile);
                props.setOriginCropperUrl(originCropperUrl);
                props.setShowCropper(true);
            }
        },
        handlePreview: (props: IProps) => {
            return (file) => {
                props.setPreviewVisible(true);
                props.setPreviewImage(file.url || file.thumbUrl);
            }
        },
        closeCropper: (props: IProps) => {
            return () => {
                props.setShowCropper(false);
            }
        },
        doCrop: (props: IProps) => {
            return (own) => {
                let fileList = props.fileList;
                let urlData = own.refs.cropper.getCroppedCanvas().toDataURL();
                let bytes = window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte

                //处理异常,将ascii码小于0的转换为大于0
                let ab = new ArrayBuffer(bytes.length);
                let ia = new Uint8Array(ab);
                for (let i = 0; i < bytes.length; i++) {
                    ia[i] = bytes.charCodeAt(i);
                }
                let fileName = cropperFile.name.substring(0, cropperFile.name.lastIndexOf("."));
                let file = new File([new Blob([ab], { type: 'image/png' })], fileName + ".png", { type: 'image/png' });
                cropperUrl = window.URL.createObjectURL(file);
                let newFile = {
                    uid: Math.floor((Math.random() * Math.pow(10, 6))),
                    name: fileName + ".png",
                    status: 'done',
                    originFileObj: file,
                    url: cropperUrl
                }
                fileList.push(newFile);
                props.setFileList(fileList);
                props.setShowCropper(false);
            }
        },
    }),
    withHandlers({
        beforeUpload: (props: IProps) => {
            return (file) => {
                const picSizeM = props.picSize || 2;
                const isLtM = file.size / 1024 / 1024 < picSizeM;
                if (!isLtM) {
                    message.warning('图片要小于' + picSizeM + 'M!');
                }
                return isLtM;
            }
        },
        handleCancel: (props: IProps) => {
            return () => {
                props.setPreviewVisible(false)
            }
        },
        handleChange: (props: IProps) => {
            return ({ fileList }) => {
                if (props.cropper && !props.multiple) {
                    props.showCropperImg(fileList)
                } else {
                    props.setFileList(fileList);
                }
            }
        },
    })
);