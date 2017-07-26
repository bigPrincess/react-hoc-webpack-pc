import { compose,withHandlers,withState } from "recompose";
import { IProps } from '../constants/imgzoomin';

export const hoc = compose<IProps, any>(
    withState("isOpen", "setOpenState", false),
    withHandlers({
        zoomIn:(props: IProps)=>{
            return()=>{
                props.setOpenState(true);
            }
        },
        zoomOut:(props: IProps)=>{
            return()=>{
                props.setOpenState(false);
            }
        },
    })
);