import { IHeaderColor } from "../../../components/header/hoc/header";

export interface IProps extends IHeaderColor {
    //滑动距离
    sTop:number;
    setScrollTop:Function;
    handleScroll?:Function;

}
