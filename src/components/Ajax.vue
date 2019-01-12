<template>
  <div>

  </div>
</template>

<script>
export default {
  mounted () {
    var xhr = new XMLHttpRequest()
    xhr.onload = (res) => {
      console.log(res.target.responseText)
    }
    xhr.open('GET', '/static/mock/li.json')
    xhr.send()
  }
}
</script>

<style lang="sass" scoped>

</style>
