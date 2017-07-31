export interface IProps {
    //图片上传后处理
    handleChange:Function;

    //剪切图片url
    originCropperUrl:string;
    setOriginCropperUrl:Function;

    //剪切图片url
    doCrop:()=>void;

    //关闭查看大图弹窗
    handleCancel:()=>void;

    //打开查看大图弹窗
    handlePreview:()=>void;

    //图片上传前大小处理
    beforeUpload:Function;

    //图片剪切预处理
    showCropperImg:Function;

    
    //上传图片地址
    action:string;
    
    //是否可以批量上传
    multiple?:boolean;
    
    //图片大小
    picSize?:number;
    
    //可以上传多少张图片
    picLength?:number;
    
    //是否可以剪切图片
    cropper?:boolean;
    
    //剪切图片长宽比
    aspectRatio?:number;
    
    //查看大图
    previewVisible?:boolean;
    setPreviewVisible?:Function;

    //预览图
    previewImage?:string;
    setPreviewImage?:Function;

    //显示剪切弹窗
    showCropper:boolean;
    setShowCropper:Function;
    closeCropper:()=>void;

    //文件列表
    fileList:Array<any>;
    setFileList:Function;
    
}