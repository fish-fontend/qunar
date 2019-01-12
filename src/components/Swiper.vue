<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="../assets/p1.jpeg"></swiper-slide>
    <swiper-slide><img src="../assets/p2.jpeg"></swiper-slide>
    <swiper-slide><img src="../assets/p3.jpeg"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data: () => {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  components: {
  }
}
</script>
<style scope lang="scss">
// 通过vw来设置宽高比
img{
  width: 100%;
  height: 66vw;
}
</style>
