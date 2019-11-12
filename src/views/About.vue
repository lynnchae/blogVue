<style lang="scss">
    html{
        height: 0px!important;
    }
    #app{
        margin-top: 0px;
    }

    .hero {
        background: url('http://img.codelinn.com/10.jpg') no-repeat center center;
        background-size: 100% 100%;
        height: 100%;
        position: fixed;
        width: 100%;
    }
</style>
<template>
    <div>
        <section class="hero"  >
            <div class="hero-body" >
                <div class="container">
                    <div class="tile">
                        <b-navbar class="is-transparent navbar is-fixed-top" >
                            <template slot="start">
                                <div class="field is-grouped">
                                    <b-navbar-item class="has-text-white" href="/" >
                                        <b-icon pack="fas" icon="angle-double-left"></b-icon>
                                        <span >Home</span>
                                    </b-navbar-item>
                                </div>
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
                                        <a href="#/contact.html"><font-awesome-icon class="has-text-white" :icon="['fas','at']"/></a>
                                    </span>
                                    <span class="icon has-text-success">

                                    </span>
                                    <span class="icon has-text-warning">
                                      <a href="https://www.weibo.com/lynnchae" target="_blank"><font-awesome-icon class="has-text-white" :icon="['fab','weibo']"/></a>
                                    </span>
                                    <span class="icon has-text-success">

                                    </span>
                                    <span class="icon has-text-danger">
                                      <a href="#/contact.html"><font-awesome-icon class="has-text-white" :icon="['fab','weixin']"/></a>
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
            };
        }
    }
</script>

