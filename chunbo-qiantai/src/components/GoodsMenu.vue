<template lang="jade">
  #dropdown-list
    .dropdown-list(data-name="")
      dl
        dt
          router-link(index="/") 1
        dd
          router-link(index="/") 2
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({ goodsmenu: 'GoodsMenu' })
  }
}
</script>
