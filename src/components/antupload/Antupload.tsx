import * as React from "react";
import styles from "./Antupload.module.scss";
import { Upload, message, Button, Icon } from 'antd';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
class Antupload extends React.Component<{
    location?: any;
}> {
    public render(): React.ReactNode {
        return (
    <Upload {...props}>
        <Button>
            <Icon type="upload" /> Click to Upload
        </Button>
    </Upload>
        );
    };
};

export default Antupload;