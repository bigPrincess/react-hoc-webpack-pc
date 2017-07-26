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
                
                props.execute("value", ModelProxyKeys.api_post_noheader_params, {
                    data: {
                        wxUrl: window.location.href,
                        wxSource:  "MMALL"
                    }
                })
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