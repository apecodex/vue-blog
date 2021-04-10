<template>
  <tr>
    <td class="td td-username">{{ username }}</td>
    <td class="td td-id">{{ id }}</td>
    <td class="td td-sex">{{ sex }}</td>
    <td class="td td-email">{{ email }}</td>
    <td class="td td-qq">{{ qq }}</td>
    <td class="td td-wechat">{{ wechat }}</td>
    <td class="td td-register">{{ register }}</td>
    <td class="td td-last">{{ last }}</td>
    <td class="td td-status"><span :class="{'normal': status, 'deactivate': !status}">{{ changeStatus }}</span></td>
  </tr>
</template>

<script setup>
  import {computed, defineProps, ref} from "vue";

  const props = defineProps({
    username: String,
    id: String,
    sex: String,
    email: String,
    qq: String,
    wechat: String,
    register: String,
    last: String,
    status: Boolean
  })
  const changeStatus = ref(computed(() => {
    return props.status ? 'ok':'no'
  }))
</script>

<style scoped>
  tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  tr:last-child {
    border-bottom: 0;
  }

  tr:nth-child(even) {
    background: rgba(0,0,0,.1);

  }

  tr:hover {
    background: #03a9f4;
    cursor: url('assets/cursor/mouse2.cur'), auto;
  }


  td {
    text-align: center;
    padding: 20px 0;
    word-break: break-word;
  }

  td.td-username {
    text-align: left;
    padding-left: 5px;
  }

  td.td-status span {
    padding: 2px 15px;
    text-align: center;
    border-radius: 4px;
    color: #ffffff;
  }

  .normal {
    background: green;
  }

  .deactivate {
    background: darkred;
  }
</style>