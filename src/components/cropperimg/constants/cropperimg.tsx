export interface IProps {
    imgUrl:string;
    zoomIn:Function;
    zoomOut:Function;
    className?:string;
    isOpen?:boolean;
    setOpenState?:Function;
}