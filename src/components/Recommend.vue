<template>
  <div class="container">
    <div>本周热门榜单</div>
    <ul>
      <li v-for='(item,index) in items' :key=index>
        <img :src="require(`../assets/icons/${item}.png`)">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        1, 2, 3, 4, 5, 3, 3, 5,
        7, 10]
    }
  }
}
</script>
<style scoped lang="scss">
$icon_width: 100px;
ul{
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
ul li{
  // 这个就很关键了，不然会挤在一起
  min-width: $icon_width;

  height: $icon_width;
  padding: 20px;
}

// 覆盖swiper.css给的样式
img{
  height: 100%;
}
</style>
