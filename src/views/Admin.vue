<template>
    <section class="hero is-medium">
        <div class="pageloader is-left-to-right" style="background-color: #7957d5" v-bind:class="{'is-active': loading}"><span class="title">Loading</span></div>
        <div class="hero-body" style="padding-top: 10px">
            <div class="container">
                <div class="tile is-vertical is-ancestor">
                    <div class="tile is-parent">
                        <div class="tile is-child">
                            <b-navbar class="navbar is-fixed-top has-background-white" :mobile-burger="false">
                                <template slot="brand">
                                    <b-navbar-item tag="router-link" :to="{ path: '/' }">
                                        <img src="https://pic.codelinn.com/logo.png"/>
                                    </b-navbar-item>
                                </template>
                            </b-navbar>
                        </div>
                    </div>
                    <div class="tile is-12 is-parent" style="margin-top: 20px">
                        <div class="tile is-child is-2" style="border-right: 1px #7957d5;box-shadow: rgba(121, 87, 213, 0.3) 3px 0px 0px 0px">
                            <aside class="menu has-text-left" >
                                <ul class="menu-list">
                                    <li>
                                        <a v-bind:class="{'is-active':currentMenu == 'User'}" @click="tab('User')" >
                                            <font-awesome-icon icon="user"></font-awesome-icon> {{user.name | nameFilter}}
                                        </a>
                                    </li>
                                    <p class="menu-label">
                                        Personnal Center
                                    </p>
                                    <li>
                                        <a class=""><font-awesome-icon icon="blog"></font-awesome-icon> Blogs</a>
                                        <ul>
                                            <li><a v-bind:class="{'is-active':currentMenu == 'Posted'}" @click="tab('Posted')" class="">
                                                <font-awesome-icon icon="paper-plane"></font-awesome-icon> Posted</a></li>
                                            <li><a v-bind:class="{'is-active':currentMenu == 'Edit'}" @click="tab('Edit')" >
                                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon> Edit</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div class="tile is-10" >
                            <div v-show="currentMenu === 'Edit'"  class="tile is-vertical is-parent">
                                <div class="tile is-child control">
                                    <b-field grouped>
                                        <b-field expanded>
                                            <p class="control has-icons-left ">
                                                <b-input v-model="blog.title"  placeholder="Blog Title"
                                                         type="text">
                                                </b-input>
                                                <span class="icon is-small has-text-primary is-left">
                                                    <font-awesome-icon icon="leaf"></font-awesome-icon>
                                                </span>
                                            </p>
                                        </b-field>
                                        <b-field expanded>
                                            <button v-bind:class="{'is-loading': buttonLoading}" class="button is-primary" disabled @click="submit">
                                                <b-icon
                                                        pack="fas"
                                                        icon="paper-plane"
                                                        size="is-small">
                                                </b-icon>
                                            </button>
                                        </b-field>
                                    </b-field>
                                </div>
                                <div class="tile is-child is-2">
                                    <div class="field">
                                        <p class="control has-icons-left has-icons-right">
                                            <input v-model="blog.tags" class="input" type="text" placeholder="Tags">
                                            <span class="icon is-small has-text-primary is-left">
                                      <font-awesome-icon icon="tag"></font-awesome-icon>
                                    </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="tile is-child">
                                    <mavon-editor
                                            v-model="blog.content"
                                            ref="md"
                                            @change="change"
                                            style="min-height: 500px"
                                    />
                                </div>
                            </div>


                            <div v-show="currentMenu === 'Posted'"  class="tile is-vertical is-parent">
                                <div class="tile is-child is-8 control" v-for="item in blogs" :key="item.id">
                                    <div class="box">
                                        <article class="media">
                                            <div class="media-content">
                                                <div class="content">
                                                    <div class="tile is-vertical is-parent">
                                                        <div class="level">
                                                            <div class="level-left">
                                                                <strong><a @click="toPage('blog',{title:item.title,id:item.id})">{{item.title}}</a></strong>
                                                            </div>
                                                            <div class="level-right">
                                                               <span @click="edit(item.id)" class="has-text-primary hover is-small">
                                                                <font-awesome-icon class="is-primary is-small" :icon="['fa','pencil-alt']"></font-awesome-icon>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="tile is-child">
                                                            <small>@</small> <small>{{item.createTime}}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>

                            <div v-show="currentMenu === 'User'"  class="tile is-vertical is-6 is-parent">
                                <div class="box card has-text-left">
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-128x128">
                                                    <img class="is-rounded" style="border: 2px solid rgb(121, 87, 213);box-shadow: 0px 0px 5px 2px rgba(121,87,123,.3);" :src="user.avatarUrl">
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-4">{{user.name}}</p>
                                                <p class="subtitle is-6">{{user.email}}</p>
                                            </div>
                                        </div>

                                        <div class="level">
                                            <div class="level-item level-right">
                                                <div class=" content">
                                                    <br/>
                                                    <time datetime="2016-1-1">Registered at <strong style="color:#7957d5">{{user.createTime}}</strong></time>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

</template>
<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import BField from "buefy/src/components/field/Field";

    export default {
        filters: {
            nameFilter(name){
                if(name ===''){
                    return 'Visitor'
                }else{
                    return name
                }
            }
        },
        // 注册
        components: {
            BField,
            mavonEditor,
        },
        data() {
            return {
                loading: true,
                currentMenu: '',
                blog: {
                    title: '',
                    tags: '',
                    content: '',
                    done: 1
                },
                buttonLoading: false,
                blogs: [],
                user: {
                    userId: 0,
                    name: '',
                    avatarUrl: '',
                    email: ''
                }
            }
        },
        methods: {
            // 所有操作都会被解析重新渲染
            change(value, render){
                // render 为 markdown 解析后的结果[html]
                // this.blog.content = render;
            },
            // 提交
            submit(){
                this.buttonLoading = true
                this.axios.post('/api/blog/ssssBlog',this.blog).then(res => {
                    if(res && res.data.data === true){
                        this.$buefy.notification.open({
                            message: '提交成功！！',
                            type: 'is-success'
                        })
                        this.tab('Posted')
                    }
                }).finally(() => {
                    this.buttonLoading = false
                })
            },
            tab(menu){
                this.currentMenu = menu
                if(menu === 'Posted'){
                    this.axios.get('/api/blog/getUserBlogs?userId=' + this.user.userId).then((res) => {
                        this.blogs = res.data.data.list
                        // indexLoading.close()
                        // this.loading = false
                    }).catch(() => {
                    })
                }
            },
            edit(id){
                this.axios.get('/api/blog/gBlog?id='+id).then(res => {
                    if(res.data.code){
                        this.$buefy.notification.open({
                            message: '没有找到相关文章！',
                            type: 'is-warning'
                        })
                    }else {
                        this.blog.title = res.data.title
                        this.blog.content = res.data.contentOrigin
                        this.blog.tags = res.data.tags
                        this.tab('Edit')
                    }
                    // this.indexLoading.close()
                })
            }
        },
        mounted() {
            const token = sessionStorage.getItem('token');
            if(token){
                this.axios.get('/api/user/info?accessToken='+ token).then((res) => {
                    this.user = res.data.data
                    window.console.info(this.user)
                }).catch(() => {
                })
            }
            const code = this.$route.query.code;
            if(code){
                if (location.href.indexOf("?code=") !== -1) {
                    const newUrl = location.href.split("?")[0];
                    history.pushState('', '', newUrl);
                }
                this.axios.post('/api/user/auth/github?code='+ code).then((res) => {
                    this.user = res.data.data
                    sessionStorage.setItem('token',res.data.data.token)
                }).catch(() => {
                })
            }

            this.tab('User')
            this.$nextTick(() => {
                this.loading = false
            })
        }
    }
</script>
