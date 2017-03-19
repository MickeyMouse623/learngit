<template>
  <div class="content">
    <nav-fixed-top></nav-fixed-top>
    <header-nav></header-nav>
  </div>
</template>

<script>
import navFixedTop from '../components/Header-top'
import headerNav from '../components/Header-nav'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    navFixedTop,
    headerNav
  }
}
</script>
