import { IProxyHocProps } from '../../../modelproxy/hoc/proxy';
import { TableProps } from 'antd/lib/table/Table';

interface column {
    gender?:any;
    name?:any;
    email?:any;
}

export interface IProps extends IProxyHocProps{
    getData?:Function;
    dataList?:TableProps<column>;
    setDataList?:Function;
    handleTableChange?:any;
}
