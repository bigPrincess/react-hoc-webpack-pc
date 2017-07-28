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
     * 设置行的背景颜色
     */
    currentBgColor?:string;
    /**
     * 文本内容器宽度
     */
    width?:number;
    /**
     * 文本内容器高度
     */
    height?:number;

    /**
     * 设置右边icon
     */
    rightIcon?:string;
     /**
     * 设置右边icon宽度
     */
    rightWidth?:number;
    /**
     * 设置右边icon高度
     */
    rightHeight?:number;

    /**
     * 设置右边icon高度
     */
    rightColor?:string;

   /**
     * 设置左边icon
     */
    leftIcon?:string;
    /**
     * 设置左边icon宽度
     */
    leftWidth?:number;
    /**
     * 设置左边icon高度
     */
    leftHeight?:number;

    /**
     * 设置右边icon高度
     */
    leftColor?:string;
  /**
     * 设置文本的颜色
     */
    currentColor?:string;
    /**
     * 设置点击事件回调函数
     */
    onClick?:Function;
}