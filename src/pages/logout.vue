<template>
  <div>即将退出登录...</div>
</template>
<script>
  export default {
    beforeCreate () {
      this.$router.back()
    }
  }
</script>
