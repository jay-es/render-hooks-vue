<script setup lang="ts">
import { useChecks } from './useChecks'

const labels = ['check 1', 'check 2', 'check 3']

const [isAllChecked, Checks] = useChecks(labels)
</script>

<template>
  <div>
    <Checks />

    <p>
      <button :disabled="!isAllChecked">次へ</button>
    </p>
  </div>
</template>
