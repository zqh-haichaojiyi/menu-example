<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
    >
      <el-menu-item index="/home">
        首页
      </el-menu-item>
      <el-menu-item index="/rank">
        排行榜
      </el-menu-item>
      <el-menu-item index="/userCenter">
        个人中心
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  data () {
    return {
      activeIndex: '/home'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .logo {
    height: 56px;
  }
  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
</style>
