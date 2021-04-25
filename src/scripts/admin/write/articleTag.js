import {ref} from "vue";

const tagValue = ref([])

const tags = ref([{
  value: 'HTML',
  label: 'HTML'
}, {
  value: 'CSS',
  label: 'CSS'
}, {
  value: 'JavaScript',
  label: 'JavaScript'
}])

export {
  tagValue,
  tags
}