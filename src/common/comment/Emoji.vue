<template>
  <div class="emoji-box">
    <button @click.stop="openEmoji">{{entitiestoUtf16('&#128512;')}}</button> 
    <div class="emoji-item" v-show="emojiStatus" ref="showPanel">
      <ul>
        <li v-for="(item, index) in emojis" :key="index" @click="emojiItem(item)"><span>{{entitiestoUtf16(item)}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineEmit, onMounted} from "vue";

  import { utf16toEntities, entitiestoUtf16 } from "utils/utils.js"

  const emit = defineEmit(['getEmoji'])

  const emojiStatus = ref(false)
  const showPanel = ref(null)

  // 点击其他地方关闭表情包
  onMounted(() => {
    document.addEventListener('click',()=>{
      if(showPanel.value){
        if(emojiStatus.value){
          emojiStatus.value = false
        }
      }
    })
  })

  const emojis = ref([
    '&#128512;','&#128516;','&#127773;','&#128517;','&#129315;','&#128514;','&#128521;',
    '&#128522;','&#128525;','&#128536;','&#128540;','&#128541;','&#128527;',
    '&#128530;','&#128580;','&#128543;','&#128577;','&#128532;','&#128564;','&#128567;','&#129326;',
    '&#129397;','&#128526;','&#128558;','&#128560;','&#128557;','&#128561;',
    '&#128553;','&#128545;','&#128128;','&#128125;','&#129299;','&#129395;',
    '&#129300;','&#128570;','&#128569;','&#128571;','&#129306;','&#128169;',
    '&#128077;','&#128078;','&#128079;','&#128076;','&#128591;','&#128170;','&#128147;','&#128148;'
  ])

  const openEmoji = () => {
    emojiStatus.value = !emojiStatus.value
  }

  const emojiItem = emoji => {
    emit('getEmoji', emoji)
    emojiStatus.value = !emojiStatus.value
  }
</script>

<style scoped>
  .emoji-box {
    position: relative;
  }

  button {
    border: 0;
    margin-left: 10px;
    font-size: 25px;
    outline: none;
    background: transparent;
  }

  .emoji-item {
    position: absolute;
    bottom: 110%;
    left: 0;
    right: 0;
    width: 200px;
    height: 120px;
    border: 1px solid rgba(0, 0, 0, .3);
    background: rgba(0, 0, 0, .6);
    border-radius: 6px;
    overflow-x: hidden;
  }

  .emoji-item ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 2px;
  }

  .emoji-item ul li {
    padding: 3px 0;
    font-size: 22px;
  }

  .emoji-item::-webkit-scrollbar {
    width: 10px;
  }
  .emoji-item::-webkit-scrollbar-thumb {
    border-radius: 4px;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.8);
    background-clip: border-box;
  }
</style>