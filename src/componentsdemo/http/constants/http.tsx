import { IProxyHocProps } from '../../../modelproxy/hoc/proxy';

export interface IProps extends IProxyHocProps {
    http_request?:Function;
    http_request1?:Function;
    http_reault?:any;
    set_http_reault?:Function;
}
