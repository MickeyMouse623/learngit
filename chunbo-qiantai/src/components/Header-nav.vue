//主导航
<template lang="jade">
  nav.header-nav(role="navigation")
    .container
      .row
        #drop-nav.drop-nav
          ul.nav
            li.dropdown
              router-link.dropdown-toggle(to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false") 浏览所有食品
                span.caret
              ul#dropdown-menu.dropdown-menu(style="display:block")
                li(v-for="item in goodsmenu.classA" v-if="item.isPcMenu === 1")
                  router-link(:to="'/list?level=00&cid=' + item._id")
                    img(:src="staticServer + item.sicon")
                    {{item.name}}
                    span
            li.divider
            li
              router-link(to="/cookbook") 大厨食谱
            li.divider
            li
              router-link(to="/") 良心联盟
            li.divider
            li
              router-link(to="/") 春播标准
            li.mess
              i.label-icon-square
                  #dropdown-list
</template>

<script>
import { staticServer } from '../config/Global.config'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      staticServer
    }
  },
  computed: mapGetters({ goodsmenu: 'GoodsMenu' }),
  created () {
    this.$store.dispatch('GetGoodsMenu')
  }
}
</script>
