<script setup lang="ts">
import { computed, ref } from 'vue'

const labels = ['check 1', 'check 2', 'check 3']

const checkList = ref([false, false, false])

// index番目のチェック状態を反転させる
const handleCheckClick = (index: number) => {
  checkList.value[index] = !checkList.value[index]
}

const isAllChecked = computed(() => checkList.value.every((x) => x))
</script>

<template>
  <div>
    <ul>
      <li v-for="(label, idx) in labels" :key="idx">
        <label>
          <input
            type="checkbox"
            :checked="checkList[idx]"
            @click="handleCheckClick(idx)"
          />
          {{ label }}
        </label>
      </li>
    </ul>

    <p>
      <button :disabled="!isAllChecked">次へ</button>
    </p>
  </div>
</template>
