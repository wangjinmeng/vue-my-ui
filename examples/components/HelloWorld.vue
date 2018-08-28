<template>
  <div class="hello">
    <my-card style="width:90%;height: 500px;margin: 10px;" header="好公司">
      <div slot="headerHandle" style="color: var(--color-text-light);">123</div>
      body
    </my-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this components only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
