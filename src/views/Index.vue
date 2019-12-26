<style lang="scss" scoped>
    .fadeInUp {
        animation-duration: 5s;
    }

    .fadeInRight {
        animation-duration: 1s;
    }

    .delay-200ms {
        animation-delay: 200ms;
    }

    .delay-400ms {
        animation-delay: 500ms;
    }
    .box {
        box-shadow: 0 10px 12px 0 rgba(10, 10, 10, 0.1) !important;
    }

    .md-content{
        word-break: break-word;
    }

    .md-content pre code {
        margin: 0;
        padding: 0;
        white-space: pre;
        border: none;
        background: transparent;
    }

    .image {
        height: 100%;

        img {
            height: 100% !important;
            object-fit: cover !important;
        }
    }

    .footer {
        padding: 1.5rem 1.5rem 3rem !important;
    }

    .swiper {
        height: 500px;
    }
    .hover:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 100px) and (max-width: 768px) {
        .swiper {
            height: 100%
        }
        #app {
            margin-left: 12px !important;
            margin-right: 12px !important;
        }
    }

</style>
<template>
    <div class="container">
        <div class="pageloader is-right-to-left" style="background-color: #7957d5" v-bind:class="{'is-active': loading}"><span class="title">Loading</span></div>

        <div id="quickviewDefault" v-bind:class="{'is-active' : showReview}" class="quickview" style="border-left: 3px solid #7957d5;box-shadow: rgba(121, 87, 213, 0.3) -3px 0px 5px 0px">
            <header class="quickview-header">
                <p class="title">{{blog.title}}</p>
                <span class="delete" @click="review(currentReviewId)"></span>
            </header>

            <div class="quickview-body">
                <div class="quickview-block content has-text-left" style="margin:20px 10px" >
                    <div class="md-content" v-html="blog.content" v-highlight>

                    </div>
                </div>
            </div>

        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child is-full-widescreen">
                    <div class="container">
                        <b-navbar class="container navbar is-fixed-top fadeInDown animated" shadow>
                            <template slot="brand">
                                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                                    <img src="https://pic.codelinn.com/logo/finalLogo.png"/>
                                </b-navbar-item>
                            </template>
                            <template slot="start">
                                <div class="field is-grouped">
                                    <b-navbar-item href="#">
                                        Home
                                    </b-navbar-item>
                                    <b-navbar-dropdown hoverable label="Info">
                                        <b-navbar-item @click="toPage('about')">
                                            About
                                        </b-navbar-item>
                                        <b-navbar-item @click="toPage('contact')">
                                            Contact
                                        </b-navbar-item>
                                    </b-navbar-dropdown>
                                    <b-navbar-item @click="toPage('album')">
                                        Albums
                                    </b-navbar-item>
                                </div>
                            </template>
                            <template slot="end">
                                <b-navbar-item tag="div">
                                    <div v-if="!$cookies.isKey('token')" class="buttons">
                                        <!--                                <a class="button is-primary">-->
                                        <!--                                    <strong>Sign up</strong>-->
                                        <!--                                </a>-->
                                        <a @click="loginModel = true" class="button is-light">
                                            Log in
                                        </a>
                                    </div>
                                    <div v-if="$cookies.isKey('token')" class="fadeInDownBig animated">
                                        <b-tooltip class="hover" :label="'Hi! '+user.name"
                                                   position="is-bottom"
                                                   animated>
                                            <img @click="toPage('admin')" :src="user.avatarUrl">
                                        </b-tooltip>
                                    </div>
                                </b-navbar-item>
                            </template>
                        </b-navbar>
                    </div>
                </div>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-6 ">
                <div class="tile">
                    <b-modal :active.sync="loginModel"  has-modal-card
                             trap-focus
                             aria-role="dialog"
                             aria-modal>
                        <div class="modal-card" style="width:auto;" >
                            <header class="modal-card-head">
                                <p class="modal-card-title">Login In</p>
                            </header>
                            <section class="modal-card-body">
                                <a class="button is-medium has-icons-left" href="https://github.com/login/oauth/authorize?client_id=6efcfbe7062c229dc622" >
                                    <span class="icon">
                                      <font-awesome-icon :icon="['fab','github']"></font-awesome-icon>
                                    </span>
                                    <span>Login with <strong>GitHub</strong></span>
                                </a>
                                <!--                                <b-checkbox>Remember me</b-checkbox>-->
                            </section>
                            <footer class="modal-card-foot has-no-border" style="background-color: white;border-top: white;">

                            </footer>
                        </div>

                    </b-modal>
                </div>
            </div>
            <div class="tile">

            </div>
        </div>


        <div class="tile is-ancestor">
            <div class="tile is-vertical">
                <div class="tile">
                    <div class="container tile is-parent swiper" style="padding-top: 50px;margin: 0px 12px;">
                        <swiper :options="swiperOption" class="container is-widescreen is-mobile tile is-child">
                            <swiper-slide v-for="item in imgList" :key="item.id" class="has-text-left image">
                                <figure class="image">
                                    <!--                                <div class="title has-text-white" style="padding-left: 200px" data-swiper-parallax="-100">Slide 1</div>-->
                                    <!--                                                      <br>-->
                                    <!--                                                      <div class="subtitle has-text-white" data-swiper-parallax="-200">Subtitle</div>-->
                                    <!--                                                      <div class="text has-text-white" data-swiper-parallax="-300">-->
                                    <!--                                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>-->
                                    <!--                                                      </div>-->
                                    <img :src="item.url">
                                </figure>
                            </swiper-slide>
                            <!--                <div class="swiper-pagination" slot="pagination"></div>-->
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
        <div class="tile is-ancestor columns ">
            <div class="column">
                <div class="tile is-parent is-vertical has-text-left">
                    <div class="tile box is-vertical fadeInUpBig animated" v-for="item in blogs" :key="item.id">
                        <div class="tile is-child">
                            <article>
                                <div class="columns is-mobile">
                                    <div class="column" style="align-self: center">
                                        <span class="subtitle">{{item.createTime}}</span>
                                        <span style="padding-left: 10px" class="has-text-primary hover">
                                            <font-awesome-icon v-if="currentReviewId === item.id" class="is-primary" :icon="['fa','feather-alt']" @click="review(item.id)"></font-awesome-icon>
                                            <font-awesome-icon v-if="currentReviewId !== item.id" class="is-primary" :icon="['fa','feather']" @click="review(item.id)"></font-awesome-icon>
                                        </span>
                                    </div>
                                </div>
                                <div class="tile is-vertical">
                                    <div class="tile is-child">
                                        <p>
                                            <b-tag type="is-primary">{{item.tags}}</b-tag>
                                        </p>
                                    </div>
                                    <div class="tile is-child">
                                        <a class="title " @click="toPage('blog',{title:item.title,id:item.id})">{{item.title}}</a>
                                    </div>
                                </div>

                            </article>
                        </div>
                            <nav class="level is-mobile">
                                <div class="level-left is-8">
                                    <div class="level-item has-text-left">
                                        <div>
                                            <p class="heading"><font-awesome-icon icon="heart"></font-awesome-icon> ({{item.likes}})</p>
                                            <p ></p>
                                        </div>
                                    </div>
                                    <div class="level-item has-text-centered">
                                        <div>
                                            <p class="heading"><font-awesome-icon icon="comment"></font-awesome-icon> ({{item.comments}})</p>
                                            <p ></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="level-right" >
                                    <div class="level-item has-text-right">
                                        <p>Posted by <strong>{{item.name}}</strong></p>
                                    </div>
                                </div>
                            </nav>
                    </div>
                </div>
            </div>
            <div class="column is-one-third">
                <div class="tile is-parent is-vertical ">
                    <div class="tile is-child box fadeInRight animated">
                        <b-field>
                            <b-input v-model="searchWord" placeholder="Search..." icon="search"
                                     @keyup.enter.native="query">
                                <font-awesome-icon class="is-primary"
                                                   :icon="['fab','fort-awesome']"></font-awesome-icon>
                            </b-input>
                        </b-field>
                    </div>
                    <article class="message is-primary fadeInRight animated delay-200ms" style="box-shadow: 0 10px 12px 0 rgba(10, 10, 10, 0.1);background-color: #FFFFFF">
                        <div class="message-header">
                            <p>更新</p>
                        </div>
                        <div class="message-body has-text-left" style="color: #555555;">
                            <ul style="list-style: none" >
                                <li>
                                    <font-awesome-icon class="has-text-primary" icon="check-circle"></font-awesome-icon>
                                    加入github三方登录
                                </li>
                                <li>
                                    <font-awesome-icon class="has-text-primary" icon="dot-circle"></font-awesome-icon>
                                    发布博文功能
                                </li>
                                <li>
                                    <font-awesome-icon class="has-text-primary" icon="check-circle"></font-awesome-icon>
                                    Contact_Me功能迁移
                                </li>
                                <li>
                                    <font-awesome-icon class="has-text-primary" icon="check-circle"></font-awesome-icon>
                                    首页Search、评论功能迁移
                                </li>
                                <li>
                                    <font-awesome-icon class="has-text-primary" icon="check-circle"></font-awesome-icon>
                                    <span>
                                        前后端分离，Vue + SpringBoot
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </article>

                    <div class="tile is-child box fadeInRight animated delay-400ms">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-96x96 is-rounded">
                                    <img src="https://pic.codelinn.com/193.jpeg" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="subtitle is-6">AboutMe</p>
                                <p class="title is-4">LiNn</p>
                            </div>
                        </div>
                        <article class="tile is-child has-text-left ">
                            <p class="subtitle"></p>
                            <div class="content is-capitalized">
                                hi，我是一位来自魔都的程序员，这是我自建的个人博客网站，很久没接触前端，网站做的相对简单，但主要还是以内容为主，对于类教学式的内容分享，语言组织还需要加强，还请各位多多指教，本站仅支持本人发表文章，您可以阅览点赞、评论及分享哦~
                                本站文章使用Markdown语法。
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </div>
        <footer class="footer" footer-spadding="3rem 1.5rem 1.5rem">
            <div class="content has-text-centered">
                <p>
                    Copyright © 2019.<a href="https://www.weibo.com/lynnchae">LynnChae</a> All rights reserved.
                    皖ICP备18026164号-1
                </p>
            </div>
        </footer>
    </div>
</template>
<script>
    import BNavbar from 'buefy/src/components/navbar/Navbar'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    import 'swiper/dist/css/swiper.css'

    export default {
        name: "index",
        components: {
            BNavbar,
            swiper,
            swiperSlide
        },
        data() {
            return {
                nothingShow: true,
                loginModel: false,
                showReview: false,
                currentReviewId: 0,
                blog: {
                    title: '',
                    content: ''
                },
                loading: true,
                searchWord: '',
                fullpage: false,
                id: 1,
                swiperOption: {
                    // parallax: true,
                    loop: true,
                    effect: 'fade',
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    speed: 5000
                },
                imgList: [],
                blogs: [],
                user: {
                    name: '',
                    avatarUrl: '',
                    email: ''
                }
            }
        },
        created() {
            let picList = [
                {id: 1, url: 'https://pic.codelinn.com/blog/index/swipera7.jpg'},
                {id: 2, url: 'https://pic.codelinn.com/blog/index/swipera2.jpg'},
                {id: 3, url: 'https://pic.codelinn.com/blog/index/swipera8.jpg'},
                {id: 4, url: 'https://pic.codelinn.com/blog/index/swipera4.jpg'},
                {id: 5, url: 'https://pic.codelinn.com/blog/index/swipera5.jpg'},
                {id: 6, url: 'https://pic.codelinn.com/blog/index/swipera6.jpg'},
                {id: 7, url: 'https://pic.codelinn.com/blog/index/swipera1.jpg'},
                {id: 8, url: 'https://pic.codelinn.com/blog/index/swipera3.jpg'},
                {id: 9, url: 'https://pic.codelinn.com/blog/index/swipera9.jpg'},
                {id: 12, url: 'https://pic.codelinn.com/blog/index/swipera12.jpg'}
            ]
            this.imgList = this.shuffle(picList)
            // let indexLoading = this.$loading({
            //     text: 'Loading',
            //     type: 'bars',
            //     background: '#7957d5'
            // })
            this.axios.get('/api/blog/getUserBlogs?userId=',{timeout:5000}).then((res) => {
                this.blogs = res.data.data.list
                // indexLoading.close()

            }).catch(error => {
                window.console.info(error)
            }).finally(() => {
                this.loading = false
                if(this.blogs.length == 0){
                    this.nothingShow = true
                }
            })
            const token =this.$cookies.get('token')
            if(token){
                this.axios.get('/api/user/info?accessToken='+ token).then((res) => {
                    this.user = res.data.data
                    this.$cookies.set('token',res.data.data.token,"30D")
                    this.$cookies.set('userInfo',res.data.data,"30D")
                }).catch(() => {
                }).finally(() => {
                    this.loading = false
                })
            }
        },
        methods: {
            query() {
                if (this.searchWord) {
                    this.axios.post('/api/s/blogs?word=' + this.searchWord).then((res) => {
                        if(res.data.data[0]){
                            this.blogs = []
                            this.blogs.push(res.data.data[0])
                        }else{
                            this.$buefy.notification.open({
                                message: '没有找到相关文章哦～',
                                type: 'is-warning'
                            })
                        }
                        indexLoading.close()
                    }).catch(error => {
                        window.console.info(error)
                    })
                }

            },
            review(id){
                if(this.showReview && this.currentReviewId === id){
                    this.showReview = false
                    this.currentReviewId = 0
                    return
                }
                this.currentReviewId = id
                this.axios.get('/api/blog/gBlog?id='+id).then(res => {
                    if(!res.data.code){
                        this.blog.title = res.data.title
                        this.blog.content = res.data.content
                        this.showReview = true
                    }
                })
            },
            shuffle(arr) {
                let i = arr.length;
                while (i) {
                    let j = Math.floor(Math.random() * i--);
                    [arr[j], arr[i]] = [arr[i], arr[j]];
                }
                return arr;
            }
        }
    }
</script>
