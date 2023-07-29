import {
  computed,
  defineComponent,
  h,
  ref,
  type ComputedRef,
  type DefineComponent
} from 'vue'
import Checks from './Checks.vue'

type UseChecksResult = [
  ComputedRef<boolean>,
  DefineComponent<{}, {}, {}, {}, {}> // eslint-disable-line @typescript-eslint/ban-types
]

export const useChecks = (labels: readonly string[]): UseChecksResult => {
  const checkList = ref(labels.map(() => false))

  const handleCheckClick = (index: number) => {
    checkList.value[index] = !checkList.value[index]
  }

  const isAllChecked = computed(() => checkList.value.every((x) => x))

  const AttachedChecks = defineComponent({
    setup() {
      return () =>
        h(Checks, {
          checkList: checkList.value,
          labels,
          onCheck: handleCheckClick
        })
    }
  })

  return [isAllChecked, AttachedChecks]
}
