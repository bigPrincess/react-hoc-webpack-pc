import * as  React from 'react';
import { IProps } from '../constants/message';
import { hoc } from '../containers/message';
import { message, Button } from 'antd';



import '../styles/message.scss';

export class MessageComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }
    render(): JSX.Element {
        
        return (
            <div>
                <div id="tableuu"></div>
                <Button onClick={() => {
                    message.config({
                        top: 100,
                        duration: 200,
                        getContainer:()=>document.getElementById("tableuu"),
                    });
                    message.loading(<div style={{ color: "red" }}>8888</div>, 0);                    
                }}>Display a loading indicator</Button>
                <Button onClick={() => { message.destroy() }}>Display a loading indicator</Button>
            </div>
            
        );
    }
}

export const MessageComponentHoc = hoc(MessageComponent);