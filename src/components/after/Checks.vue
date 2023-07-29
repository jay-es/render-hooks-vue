<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
defineProps<{
  checkList: readonly boolean[]
  labels: readonly string[]
  onCheck: (index: number) => void
}>()
</script>

<template>
  <ul>
    <li v-for="(label, idx) in labels" :key="idx">
      <label>
        <input
          type="checkbox"
          :checked="checkList[idx]"
          @click="onCheck(idx)"
        />
        {{ label }}
      </label>
    </li>
  </ul>
</template>
