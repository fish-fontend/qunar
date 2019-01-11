css-loader style-loader 好像被包含在vue-loader 里面了

```
<style scoped>
  button{
    background-color: antiquewhite
  }
</style>
```
加上scoped后，style里面所有的代码只会影响到所在的组件，原理是CSS属性选择器

但是注意，如果给模板一个类名，则它有可能受到全局环境的CSS样式影响

## 链接
因为有一个编译的过程，所以并不能直接使用 相对路径来链接
要使用
- router-link
- img 直接使用相对路径就行了，真的神奇666,不过webpack真的难配置