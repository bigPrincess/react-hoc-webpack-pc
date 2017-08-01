import * as React from 'react';
import { hoc } from '../containers/table';
import { IProps } from '../constants/table';
import { Table} from 'antd';

import "../styles/table.scss";

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: 'Email',
    dataIndex: 'email',
}];

class TableComponent extends React.Component<IProps, any> {
  
    render() {
        return (
            <Table   columns={columns}
              rowKey={record => record.registered}
             dataSource={this.props.dataList.dataSource}
              pagination={this.props.dataList.pagination}
              loading={this.props.dataList.loading}
               onChange={this.props.handleTableChange}
            />
        );
    }
}

export const TableComponentHoc = hoc(TableComponent);