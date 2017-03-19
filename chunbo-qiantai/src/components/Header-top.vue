<template lang="jade">
  nav.header-top.navbar-fixed-top
    .container
      .row
        router-link.header-logo(to="/")
        address.site(data-toggle="modal" data-target="#myAddress")
          | 合肥
          br
          strong#site 切换城市
        .search-box
          .form
            label.sr-only(for=".search-input")
            .input-group
              input.form-control.search-input(autocomplete="off" placeholder="搜索" type="text")
              router-link#sbtn.search-btn.input-group-addon(to="/")
        .header-top-right
          #Cart.header-cart
            span.badge 19
            router-link.btn.btn-cart(to="/cart" role="button")
              span.icon-shopping-cart
              | 我的购物车
            #CartMenu.cart-menu.hide
              .loading
                .loader
          .header-info
            if user
               router-link(to="/member") #{user.name}
            else
              router-link(to="/signup" onclick="return showModal(this)") 注册
              span |
              router-link(to="/signin" onclick="return showModal(this)") 登陆
            span |
            .dropdown
              router-link(to="/member" data-toggle="dropdown") 我的春播
                span.caret
              ul.dropdown-menu
                li
                  router-link(to="/") 退出
</template>

<script>
  import '../assets/css/nav-header.css'

  export default {
  }
</script>
