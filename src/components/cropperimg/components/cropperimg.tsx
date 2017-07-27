import * as  React from 'react';
import { IProps } from '../constants/cropperimg';
import { hoc } from '../containers/cropperimg';
import { Upload, Button, Icon } from 'antd';

import '../styles/cropperimg.scss';


export class CropperImgComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }
    state = {
        fileList: [{
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
    }
    handleChange = (info) => {
        let fileList = info.fileList;

        // 1. Limit the number of uploaded files
        //    Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-4);

        // 2. read from response and show file link
        fileList = fileList.map((file) => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url;
            }
            return file;
        });

        // 3. filter successfully uploaded files according to response from server
        fileList = fileList.filter((file) => {
            if (file.response) {
                return file.response.status === 'success';
            }
            return true;
        });

        this.setState({ fileList });
    }
    render(): JSX.Element {
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange: this.handleChange,
            multiple: true,
            listType: 'picture',
            className: 'upload-list-inline',
        };
        console.log(this.state.fileList)
        return (
            <div>
                <Upload {...props} 
                    fileList={this.state.fileList}
                    accept="image">
                    <Button>
                        <Icon type="upload" /> upload
                    </Button>
                </Upload>
            </div>

        );
    }
}

export const CropperImgComponentHoc = hoc(CropperImgComponent);