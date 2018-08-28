<template>
  <div class="my-card">
    <div class="my-card__header" v-if="$slots.headerHandle || header">
      <span class="name">{{ header }}</span>
      <div style="float: right;" >
        <slot name="headerHandle"></slot>
      </div>
    </div>
    <div class="my-card__body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyCard',
  props: ['header']
}
</script>
