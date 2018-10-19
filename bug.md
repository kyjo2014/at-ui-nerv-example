- typescript

  - 语法提示没起作用

- tooltip

  - index.esm.js?a32c:1500 Uncaught TypeError: Cannot read property 'offsetLeft' of undefined

- Menu

  - 嵌入式菜单在第一点击的时候会全部缩回去
  - [嵌入式菜单逻辑有问题]
  - 出现个多重嵌入式菜单层叠时会无法打开 - 解决 因为父 sub 的 mode 没有传给子
  - 出现个多重嵌入式菜单层叠时子嵌入菜单的开闭箭头不会动，层叠时没有缩进 -

- table
  - Uncaught TypeError: Cannot read property 'querySelectorAll' of undefined - 貌似是因为字符串 ref 在新版 nerv 中已经废弃
  - action 需要允许空值，自定义渲染不需要添加事件监听器
  - 字段排序：
    在对日期排序的时候如果传入日期字符串（2001-12-18）排序失效， 如果传入 Date 对象可以排序但日期字段不显示，建议参考 element 的接口实现
    排序按钮的位置错位。
  - 自定义控件在一列中无法找到插入多个按钮并获取对应行的 index 的方法
  - Tables 在 react-router-dom 切换页面时候会报错
    Uncaught (in promise) TypeError: Cannot read property 'refs' of null
    at Object.detach (index.esm.js?600c:274)
    at unmount (index.esm.js?600c:614)
    at unmountChildren (index.esm.js?600c:586)
    at unmount (index.esm.js?600c:607)
    at unmountChildren (index.esm.js?600c:589)
    at unmount (index.esm.js?600c:607)
    at unmountChildren (index.esm.js?600c:589)
    at unmount (index.esm.js?600c:607)
    at unmountChildren (index.esm.js?600c:586)
    at unmount (index.esm.js?600c:607)

- select
    - 在react-router-dom切换页面时会报错 - 貌似是因为calculatePopoverStyle在页面卸载的时候ref获取不到了。

- TextArea
    - 需要把原生的参数也传递到text-area上

-
 
        