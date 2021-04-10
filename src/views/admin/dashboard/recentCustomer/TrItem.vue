<template>
  <tr>
    <td width="50px"><div class="imgBx"><img v-if="head === ''" src="~assets/svg/login/avatar.svg" alt=""><img v-else :src="head" alt=""></div></td>
    <td><h4>{{ username }}<b>{{ time }}</b><br><span>from {{ from }}</span><b>{{ ip }}</b></h4></td>
  </tr>
</template>

<script setup>
  import {defineProps} from "vue";

  const props = defineProps({
    head: {
      type: String,
      default: ''
    },
    username: String,
    time: String,
    from: String,
    ip: String
  })
</script>

<style scoped>

.imgBx {
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
}

.imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


table tr td h4 span {
  font-size: 14px;
  color: #999999;
}

table tr {
  margin-left: 5px;
}

table tr:hover,
table tr:hover td h4 span {
  background: #03a9f4;
  color: #fff;
}

table tr td {
  padding: 7px 0;
}

table tr td h4 {
  position: relative;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2em;
}
table tr td h4 b {
  position: absolute;
  right: 6px;
  font-size: 12px;
  color: #6e0832 !important;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}

table thead td {
  font-weight: 600;
}
</style>