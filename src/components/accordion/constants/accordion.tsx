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
     * 头部当前背景颜色
     */
    currentBgColor?:string;

    /**
     * 右箭头icon颜色
     */
    currentColor?:string;
    /**
     * 右边符号宽度
     */
    width?:number;
    /**
     * 右边符号高度
     */
    height?:number;
}