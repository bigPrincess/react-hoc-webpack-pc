import { compose,withHandlers,withState } from "recompose";
import { IProps } from '../constants/message';

export const hoc = compose<IProps, any>(
    withState("", "", ""),
    withHandlers({
        
    })
);