<template>
<swiper :options="swiperOption" ref="mySwiper">
 <swiper-slide v-for='i in slidesCount' :key='i'>
  <div class="container">
    <!--直接循环8次，因为最后一个slide可能没有8个图标
        所以需要使用v-if来判断一下, 避免出错-->
    <div v-for="j in 8" :key='j' class="icon">
      <!-- 如果索引值为undefined，就是越界了，通过v-if决定
            (i-1) * 8 + j - 1 计算当前元素在数组中的下标-->
      <img v-if='items[(i-1) * 8 + j - 1]'
        :src="require(`../assets/icons/${items[(i-1) * 8 + j - 1]}.png`)">
    </div>
  </div>
 </swiper-slide>
</swiper>
</template>

<script>
export default {
  data: () => {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      // 每个元素代表图片的下标
      items: [
        1, 2, 3, 4, 5, 6, 7, 8,
        2, 2, 4, 6, 7, 8, 3, 4,
        4, 5, 6, 7, 9]
    }
  },
  computed: {
    slidesCount: function () {
      // 决定有几个slides Math.ceil向上取整
      return Math.ceil(this.items.length / 8)
    }
  }
}
</script>
<style scoped lang="scss">
.container{
  display: flex;
  flex-wrap: wrap;
}

// 让图标小一点，(19 + 3 * 2) * 4  === 100；
.icon{
  width: 19vw;
  height: 19vw;
  padding: 3vw;
}
</style>
