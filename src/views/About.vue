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
                <div class="level ">
                    <div class="level-item container has-text-left has-text-white is-narrow" style="padding-top: 200px" >
                        <div class="container">
                            <article class="content has-text-white">
                                <p class="title is-large has-text-white">Lynn Chae</p>
                                <p class="sub-title is-large">A Programmer</p>
                                <p>Hi，我是一位来自魔都的程序员，这是我的第一个简单博客网站，很久没接触前端，springboot+thymeleaf也是第一次尝试，还请各位多多指教.....</p>

                            </article>
                            <div>
                                <nav class=" breadcrumb" aria-label="breadcrumbs">
                                    <ul>
                                        <li><a href="/contact"><font-awesome-icon class="has-text-white" :icon="['fas','at']"/></a></li>
                                        <li><a href="https://www.weibo.com/lynnchae" target="_blank"><font-awesome-icon class="has-text-white" :icon="['fab','weibo']"/></a></li>
                                        <li><a href="/contact"><font-awesome-icon class="has-text-white" :icon="['fab','weixin']"/></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">

            </div>



        </div>
    </section>
</template>
<script>
</script>

