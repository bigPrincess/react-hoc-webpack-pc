import { compose, lifecycle, withHandlers } from "recompose";

import { IProps } from '../constants/accordion';
// import { getBrowserHoc } from '../../hoc/browser';

export const hoc = compose<IProps, any>(
    withHandlers({
        renderClickItem: (props: IProps) => {
            return () => {
                // let accordion = document.getElementById('accordion');
                let list = document.getElementsByClassName("link");
                let reg = new RegExp('(\\s|^)' + 'active' + '(\\s|$)');
                for (let i = 0; i < list.length; i++) {
                    list[i].onclick = function () {
                        //获取当前点击的li元素是否有子菜单,有这展开子菜单,没有则添加跳转链接跳转页面                    
                        let submenu = list[i].parentNode.getElementsByTagName('ul');
                        // alert(this.innerHTML);
                        if (submenu.length > 0) {
                            //判断当前li元素是否有class名为'active'
                            if (!!!this.parentNode.className.match(reg)) {
                                this.parentNode.className += " " + 'active';
                                // debugger;
                            } else {
                                this.parentNode.className = this.parentNode.className.replace(reg, ' ');
                                // debugger;
                            }
                        } else {

                        }
                    };
                }
            }
        }
    }),
    lifecycle({
        componentDidMount: function () {
             this.props.renderClickItem()
        }
    })
);