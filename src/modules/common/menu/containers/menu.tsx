import { compose, withState, withHandlers, lifecycle } from "recompose";
import { IProps } from '../constants/menu';
import { getProxyHoc } from "../../../../modelproxy/hoc/proxy";
import { ModelProxyKeys } from "../constants/index";

export const hoc = compose<IProps, any>(
    getProxyHoc("value"),
    withState("http_reault","set_http_reault",null),
    withHandlers({
        http_request:(props: IProps) => {
            return()=>{
                 props.execute("value", ModelProxyKeys.get_menu, null)
                 .then((data)=>{
                    props.set_http_reault((value)=>{
                        return JSON.stringify(data);
                    })
                 })
            }
        },
        
    }),
    lifecycle({
        componentDidMount:function(){
            this.props.http_request();
        }
    })
);