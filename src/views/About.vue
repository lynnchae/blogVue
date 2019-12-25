<style lang="scss">
    html{
        height: 0px!important;
    }
    #app{
        margin-top: 0px;
    }

    .about-hero {
        background: url('https://pic.codelinn.com/blog/background/willian-justen-de-vasconcellos-FfpZPMVV_M8-unsplash.jpg') no-repeat center center;
        background-size: 100% 100%;
        height: 100%;
        position: fixed;
        width: 100%;
    }
    .span-align-middle {
        vertical-align: middle!important;
    }

    @media screen and (max-width: 1023px){
        .navbar-menu {
            /*background-color: white;*/
            background: transparent!important;
            -webkit-box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1)!important;
            box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1)!important;
            padding: 0.5rem 0!important;
        }
    }

    @media screen and (max-width: 1023px){
         .navbar-menu {
             -webkit-box-shadow: 0 0px 0px rgba(10, 10, 10, 0.1)!important;
             box-shadow: 0 0px 0px rgba(10, 10, 10, 0.1)!important;
              padding: 0rem 0!important;
         }
    }

    @media screen and (max-width: 768px) and (min-width: 100px) {

        #app {
            margin-left: 0px !important;
            margin-right: 0px !important;
        }

    }

    a.navbar-item:hover {
        background-color: transparent!important;
    }

</style>
<template>
    <div>
        <section class="hero about-hero"  >
            <div class="hero-body" >
                <div class="container">
                    <div class="tile">
                        <b-navbar class="is-transparent navbar is-fixed-top" :mobile-burger="mobileBurger">
                            <template slot="brand">
                                <b-navbar-item class="is-medium" tag="router-link" :to="{ path: '/' }">
<!--                                    <img src="https://pic.codelinn.com/logo/finalLogo.png"/>-->
                                    <font-awesome-icon class="has-text-white" :icon="['fas','home']"></font-awesome-icon>
                                </b-navbar-item>
                            </template>
                        </b-navbar>
                    </div>
                    <div class="columns ">
                        <div class="column container has-text-left has-text-white is-three-quarters " style="padding-top: 200px" >
                            <div class="container">
                                <article class="content has-text-white">
                                    <p class="title is-large has-text-white">Lynn Chae</p>
                                    <p class="sub-title is-large">A Programmer</p>
                                    <p>Hi，我是一位来自魔都的程序员，这是我的第一个简单博客网站</p>
                                    <p>V1版采用 SpringBoot + thymeleaf 实现</p>
                                    <p>V2版（当前）尝试 Vue + SpringBoot，第一次尝试～</p>

                                </article>
                                <div class="container">
                                    <span class="icon has-text-info">
                                        <a @click="toPage('contact')"><font-awesome-icon class="has-text-white" :icon="['fas','at']"/></a>
                                    </span>
                                    <span class="icon has-text-success">

                                    </span>
                                    <span class="icon has-text-warning">
                                      <a href="https://www.weibo.com/lynnchae" target="_blank"><font-awesome-icon class="has-text-white" :icon="['fab','weibo']"/></a>
                                    </span>
                                    <span class="icon has-text-success">

                                    </span>
                                    <span class="icon has-text-danger">
                                        <div class="dropdown is-hoverable is-up">
                                          <div class="dropdown-trigger">
                                              <span aria-haspopup="true" aria-controls="dropdown-menu4" class="icon is-small">
                                                <font-awesome-icon class="has-text-white" :icon="['fab','weixin']"/>
                                              </span>
                                          </div>
                                          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                            <div class="dropdown-content">
                                              <div class="dropdown-item">
                                                <img src="https://pic.codelinn.com/blog/wechat.jpg" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                mobileBurger: false
            };
        }
    }
</script>

