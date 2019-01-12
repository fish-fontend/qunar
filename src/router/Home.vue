<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
    <Recommend></Recommend>
    <Ajax></Ajax>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Swiper from '@/components/Swiper.vue'
import Icons from '@/components/Icons.vue'
import Recommend from '@/components/Recommend.vue'
import Ajax from '@/components/Ajax.vue'

export default {
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Ajax
  }
}
</script>
<style>
</style>
