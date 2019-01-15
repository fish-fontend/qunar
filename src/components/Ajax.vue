<template>
  <div>
    <div v-for='item of list' :key="item.id">
      Hello {{ item.name }}!
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: [{
        id:'aaa',
        name: 'shuai'
      }]
    }
  },
  mounted () {
    var _this = this
    var xhr = new XMLHttpRequest()
    xhr.onload = (res) => {
      var result = JSON.parse(res.target.responseText)
      _this.list = result.list
    }
    xhr.open('GET', '/static/mock/list.json')
    xhr.send()
  }
}
</script>

<style lang="sass" scoped>

</style>
