<template>
  <div class="header flex">
    <div class="container flex">
      <div class="return">返回</div>
      <div class="input"><input placeholder="搜索城市"></div>
      <router-link to='/city'>
        <div class="city">城市</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import '../assets/variables.scss';

$height: 38px;
$input_height: 25px;
$color: white;
$margin_sides: 8px;
.flex{
  display: flex;
  align-items: center;
}
.header{
  background: $bgcolor;
  height: $height;
}
.container{
  width: 100%;
  justify-content: space-between;
  color: $color;
}
.return{
  margin-left: $margin_sides;
}
.input{
  width: 50%;
}
input{
  border-radius: 5px;
  height: $input_height;
  width: 100%;
}
.city{
  margin-right: $margin_sides;
}
</style>
