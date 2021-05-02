<template>
  <div class="pagination">
    <ul class="pagination-ul" :class="{'dark': dark}" ref="paginationRef">
    </ul>
  </div>
</template>

<script setup>
  import {computed, defineProps, onBeforeMount, onMounted, ref, watchEffect} from "vue";

  const props = defineProps({
    currentPage: Function,
    totalPage: {
      type: Number,
      default: 1
    },
    page: {
      type: Number,
      default: 1
    },
    dark: {
      type: Boolean,
      default: false
    }
  })

  const page = ref(props.page)
  const totalPage = ref(props.totalPage)

  import {paginationRef, element, currentPage} from './js/pagination'

  onMounted(() => {
    watchEffect(() => {
      props.currentPage(currentPage.value)
    })
    element(totalPage.value, page.value)
  })
</script>

<script>
export default {
  name: "MyPagination"
}
</script>

<style scoped>

</style>

<style>
   .pagination {
     display: flex;
     justify-content: center;
     width: 100%;
   }
  .pagination ul.pagination-ul {
    display: flex;
    justify-content: center;
    background: #ffffff;
    border: 1px solid #2f3640;
    padding: 4px;
    border-radius: 50px;
    z-index: 999!important;
  }

  .pagination ul.pagination-ul li {
    color: #20b2aa;
    line-height: 35px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    cursor: url('assets/cursor/mouse2.cur'), auto;
    border-radius: 50px;
    transition: all .3s ease;
  }

  .pagination ul.pagination-ul li.numb {
    height: 35px;
    width: 35px;
    margin: 0 3px;
  }

  .pagination ul.pagination-ul li.dots {
    font-size: 16px;
    cursor: default;
  }

  .pagination ul.pagination-ul li.btn {
    padding: 0 10px;
  }

  .pagination ul.pagination-ul li.prev {
    border-radius: 25px 5px 5px 25px;
  }

  .pagination ul.pagination-ul li.next {
    border-radius: 5px 25px 25px 5px;
  }

  .pagination ul.pagination-ul li.active,
  .pagination ul.pagination-ul li.numb:hover,
  .pagination ul.pagination-ul li.btn:hover {
    color: #ffffff;
    background: #20b2aa;
  }

   .pagination ul.dark {
     background: #2f3640;
     border: 1px solid #ffffff;
   }

  @media screen and (max-width: 1000px){
    .pagination ul.pagination-ul li {
      line-height: 25px;
    }
    .pagination ul.pagination-ul li.numb {
      width: 25px;
      height: 25px;
    }
  }
</style>