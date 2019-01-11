<template>
  <div class="container">
    <!-- 这样写的话src就不会被编译，目前我还不知道如何解决这个问题
    <img v-for="i of [1,2,3,4,5,6,7,8]" 
      :src="`../assets/icons/${i}.png`" :key="i"> -->
      <img src="../assets/icons/1.png">
      <img src="../assets/icons/2.png">
      <img src="../assets/icons/3.png">
      <img src="../assets/icons/4.png">
      <img src="../assets/icons/5.png">
      <img src="../assets/icons/6.png">
      <img src="../assets/icons/7.png">
      <img src="../assets/icons/8.png">
  </div>
</template>

<script>
export default {
}
</script>
<style scoped lang="scss">
.container{
  display: flex;
  flex-wrap: wrap;
}
img{
  width: 25vw;
  height: 25vw;
}
</style>