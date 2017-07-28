export interface IProps {
    /**
     * 菜单数据
     */
    menuArrs ?: '';

    /**
     * 事件类型
     */
    eveType ?: string;
    /**
     * 调用子菜单
     */
    renderCreateSubMenu ?: null; 

    /**
     * 设置行的背景颜色
     */
    currentBgColor?:string;
    /**
     * 右边符号宽度
     */
    width?:number;
    /**
     * 右边符号高度
     */
    height?:number;
    /**
     * 设置右边icon
     */
    righticon?:string;
    /**
     * 设置左边icon
     */
    lefticon?:string;
    /**
     * 设置字体,icon的颜色
     */
    currentColor?:string;
}