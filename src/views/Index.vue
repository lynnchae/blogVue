<style lang="scss">
.box {
      box-shadow:0 10px 12px 0 rgba(10,10,10,0.1)!important;
}
  .image {
    height: 100%;
    img{
      height: 100%!important;
      object-fit: cover!important;
    }
  }
  .footer {
    padding: 1.5rem 1.5rem 3rem!important;
  }

  .swiper {
    height: 500px;
  }

@media screen and (min-width:100px) and (max-width:768px){
  .swiper{
    height: 100%
  }
}

</style>
<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <b-navbar class="container is-full-widescreen navbar is-fixed-top" shadow="true" spaced="true">
          <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img src="http://img.codelinn.com/logo.png"/>
            </b-navbar-item>
          </template>
          <template slot="start">
            <div class="field is-grouped">
              <b-navbar-item href="#" >
                <b-icon pack="fas" icon="search"></b-icon>
                Home
              </b-navbar-item>
              <b-navbar-dropdown hoverable label="Info">
                <b-navbar-item href="/about">
                  About
                </b-navbar-item>
                <b-navbar-item href="#">
                  Contact
                </b-navbar-item>
              </b-navbar-dropdown>
            </div>
          </template>
        </b-navbar>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="container tile is-parent swiper" >
              <swiper :options="swiperOption" class="container is-widescreen is-mobile tile is-child">
                <swiper-slide v-for="item in imgList" :key="item.id">
                  <figure class="image" >
                    <img :src="item.url">
                  </figure>
                </swiper-slide>
<!--                <div class="swiper-pagination" slot="pagination"></div>-->
              </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor columns">
      <div class="column">
        <div class="tile is-parent is-vertical has-text-left">
          <div class="tile box">
            <article>
              <p class="subtitle">2019-08-29</p>
              <div class="tile is-vertical" >
                <div class="tile is-child">
                  <p><b-tag type="is-info">实战</b-tag></p>
                </div>
                <div class="tile is-child">
                  <a class="title " href="/b/集群Master-Unique工作节点的设计">集群Master-Unique工作节点的设计</a>
                </div>
              </div>
              <div class="tile is-child content">
<!--                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>-->
              </div>
            </article>
          </div>
          <div class="tile box">
            <article>
              <p class="subtitle">2019-05-06</p>
              <div class="tile is-vertical" >
                <div class="tile is-child">
                  <b-tag type="is-info">公告</b-tag>
                </div>
                <div class="tile is-child">
                  <a class="title " href="/b/Warning--本站数据被黑">Warning--本站数据被黑</a>
                </div>
              </div>
              <div class="tile is-child content">
<!--                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>-->
              </div>
            </article>
          </div>
          <div class="tile box">
            <article>
              <p class="subtitle">2018-09-06</p>
              <div class="tile is-vertical" >
                <div class="tile is-child">
                  <b-tag type="is-info">介绍</b-tag>
                </div>
                <div class="tile is-child">
                  <a class="title " href="/b/Cmd Markdown编辑阅读器预览">Cmd Markdown编辑阅读器预览</a>
                </div>
              </div>
              <div class="tile is-child">
<!--                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>-->
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="column is-one-third">
          <div class="tile is-parent is-vertical ">
            <div class="tile is-child box">
              <b-field>
                <b-input placeholder="Search..." icon="search" @keyup.enter.native="query">
                  <font-awesome-icon class="is-primary" :icon="['fab','fort-awesome']"></font-awesome-icon>
                </b-input>
              </b-field>
            </div>
            <div class="tile is-child box">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-96x96 is-rounded">
                    <img src="http://img.codelinn.com/193.jpeg" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="subtitle is-6">AboutMe</p>
                  <p class="title is-4">LiNn@codlinn</p>
                </div>
              </div>
              <article class="tile is-child has-text-left ">
                <p class="subtitle"></p>
                <div class="content is-capitalized">
                  hi，我是一位来自魔都的程序员，这是我自建的个人博客网站，很久没接触前端，网站做的相对简单，但主要还是以内容为主，对于类教学式的内容分享，语言组织还需要加强，还请各位多多指教，本站仅支持本人发表文章，您可以阅览点赞、评论及分享哦~ 本站文章使用Markdown语法。
                </div>
              </article>
            </div>
          </div>
      </div>

    </div>
    <footer class="footer" footer-spadding="3rem 1.5rem 1.5rem">
      <div class="content has-text-centered">
        <p>
          Copyright © 2019.<a href="https://www.weibo.com/lynnchae">LynnChae</a> All rights reserved. 皖ICP备18026164号-1
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import BNavbar from 'buefy/src/components/navbar/Navbar'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import BIcon from "buefy/src/components/icon/Icon";
export default {
  name: "index",
  components: {
    BIcon,
    BNavbar,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        speed: 3000
      },
      imgList: [
        {id: 1, url: 'http://img.codelinn.com/swiper1.jpg'},
        {id: 2, url: 'http://img.codelinn.com/swiper2.jpg'},
        // {id: 3, url: 'http://img.codelinn.com/swiper3.jpg'},
        {id: 4, url:'http://img.codelinn.com/swiper4.jpg'}
      ]
    }
  },
  methods: {
    query(){
      this.$buefy.notification.open({
        message: 'Something happened correctly!',
        type: 'is-info'
      })
    }
  }
}
</script>
