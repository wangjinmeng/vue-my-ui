<script>
  export default {
  }
</script>
## Card 卡片
将信息聚合在卡片容器中展示。

### 基础用法


包含标题，内容和操作。

<div class="demo-block">
<button>按钮</button>
</div>

:::demo Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。
```html
<button>按钮</button>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以通过 `slot#header` 传入 DOM | string| — | — |
| body-style | 设置 body 的样式| object| — | { padding: '20px' } |
| shadow | 设置阴影显示时机 | string | always / hover / never | always |
