<template>
  <tr>
    <td>{{ title }}</td>
    <td>{{ author }}</td>
    <td>{{ createTime }}</td>
    <td><span class="status" :class="{'publish': status, 'noPublish': !status}">{{ changeStatus }}</span></td>
  </tr>
</template>

<script setup>
import {computed, defineProps, ref} from "vue";

  const props = defineProps({
    title: String,
    author: String,
    createTime: String,
    status: Boolean
  })

  const changeStatus = ref(computed(() => {
    return props.status ? 'Publish':'No Publish'
  }))
</script>

<style scoped>
table tr {
  border-bottom: 1px solid rgba(0,0,0,.1);
}

table tbody tr:last-child {
  border-bottom: none;
}

table tbody tr:nth-child(odd) {
  background: rgba(137, 179, 217, 0.1);
}

table tbody tr:hover {
  background: #03a9f4;
  color: #fff;
}

table tr td {
  padding: 9px 5px;
}

table tbody tr td:last-child {
  text-align: right;
}

table tbody tr td:nth-child(2) {
  text-align: right;
  padding-right: 20px;
}

table tbody tr td:nth-child(3) {
  text-align: center;
}

.status {
  position: relative;
  padding: 2px 4px;
  background: #f00;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
}

.publish {
  background: #66a220;
}

</style>