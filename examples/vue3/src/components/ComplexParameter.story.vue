<script lang="ts" setup>
import ComplexParameter from './ComplexParameter.vue'

const myParameter = [
  { action: () => { console.log('Hello world!') } },
]
</script>

<template>
  <Story
    title="ComplexParameter"
    :layout="{type: 'single', iframe: false}"
  >
    <ComplexParameter :complex-parameter="myParameter" />
  </Story>
</template>
