import { compose, lifecycle, withHandlers, withState } from "recompose";
import { IProps } from '../constants/table';
import { getProxyHoc } from "../../../modelproxy/hoc/proxy";
import { ModelProxyKeys } from "../constants/index";

export const hoc = compose<IProps, any>(
    getProxyHoc("value"),
    withState("dataList", "setDataList", { loading: true, dataSource: null, pagination: {total:0,current:1,showSizeChanger:true}, }),
    withHandlers({
        getData: (props: IProps) => {
            return (params) => {
                props.execute("value", ModelProxyKeys.fenye, {params:{...params,results:10}})
                    .then((data) => {
                        props.setDataList((oldValue) => {
                            let value = oldValue;
                            value.pagination.total = 200;
                            value.loading = false;
                            value.dataSource = data.results;
                            return value;
                        })
                    })
            }
        }
    }),
  withHandlers({
        handleTableChange: (props: IProps) => {
            return (pagination, filters, sorter) => {
                let pager = props.dataList.pagination;
                props.setDataList((oldValue)=>{
                    var value = oldValue;
                    value.pagination = pager;
                    value.pagination.current ++;
                    return value;
                })
                props.getData({
                    results: pagination.pageSize,
                    page: pagination.current,
                    sortField: sorter.field,
                    sortOrder: sorter.order,
                    ...filters,
                })
            }
        }
    }),
    lifecycle({
        componentDidMount: function () {
            this.props.getData();
        }
    })
);