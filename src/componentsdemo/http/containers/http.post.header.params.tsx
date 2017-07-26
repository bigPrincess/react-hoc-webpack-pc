import { compose,lifecycle,withState,withHandlers} from "recompose";
import { ModelProxyKeys } from '../constants/index';
import { getProxyHoc } from '../../../modelproxy/hoc/proxy';
import { IProps } from '../constants/http';

export const hoc = compose<IProps, any>(
    getProxyHoc("value"),
    withState("http_reault","set_http_reault",null),
    withHandlers({
        http_request:(props: IProps) => {
            return()=>{
                let  params = {
                    mobile: "13333333333",
                    gender: 0,
                    name: "1333",
                    verifyCode: "131233",
                    orderType: 1,
                    source: 1
                }
                 props.execute("value", ModelProxyKeys. api_post_header_params,  {
                    data: params, settings: { headers: { "x-auth-token": "213csxardwaeq1231" } }})
                 .then((data)=>{
                    console.log(data);
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