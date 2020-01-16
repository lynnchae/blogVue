<style lang="scss" scoped>
    .rotateOutUpRight {
        animation-duration: 3s;
        animation-delay: 1s;
    }
</style>
<template>
    <section class="hero is-medium">
        <div class="pageloader is-left-to-right" style="background-color: #7957d5" v-bind:class="{'is-active': loading}"><span class="title">Loading</span></div>
        <div class="hero-body" style="padding-top: 10px">
            <div class="container">
                <div class="tile is-vertical is-ancestor">
                    <div class="tile is-parent">
                        <div class="tile is-child">
                            <b-navbar style="z-index: 2000!important;" class="container navbar is-fixed-top has-background-white" :mobile-burger="false">
                                <template slot="brand">
                                    <b-navbar-item class="pulse animated infinite" tag="router-link" :to="{ path: '/' }">
                                        <img src="https://pic.codelinn.com/logo/finalLogo.png"/>
                                    </b-navbar-item>
                                </template>
                                <template slot="end">
                                    <b-navbar-item tag="div">
                                        <div class="buttons">
                                            <a class="button is-light" @click="signOut">
                                                Log Out
                                            </a>
                                        </div>
                                    </b-navbar-item>
                                </template>
                            </b-navbar>
                        </div>
                    </div>
                    <div style="margin-top: 20px" class="tile is-parent">
                        <div class="tile is-vertical is-parent">
                            <div class="has-text-left" >
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <figure class="image is-128x128 fadeIn animated">
                                                <img class="is-rounded" style="box-shadow: 0px 0px 5px 2px rgba(121,87,123,.3);" :src="user.avatarUrl">
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">{{user.name}}</p>
                                            <p class="subtitle is-6">{{user.email}}</p>
                                            <p><time v-if="user.createTime" datetime="2016-1-1">Registered at <strong  style="color:#7957d5">{{user.createTime}}</strong></time></p>
                                        </div>
                                    </div>
                                </div>
                                <b-loading :is-full-page="isFullPage" :active.sync="isLoading" ></b-loading>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 20px" class="tile is-parent">
                        <div class="tile is-child " style="width: 100%;">
                            <b-tabs type="is-boxed" v-model="activeTabIndex" style="width: 100%" @change="tabChange">
                                <b-tab-item label="Posted" icon="paper-plane">
                                    <div class="tile is-vertical is-parent">
                                        <div class="tile is-child control" v-for="item in blogs" :key="item.id">
                                            <div style="border-bottom: 1px solid #f0f0f0!important;">
                                                <article class="media">
                                                    <div class="media-content">
                                                        <div class="content">
                                                            <div class="tile is-vertical is-parent">
                                                                <div class="level is-mobile">
                                                                    <div class="level-left">
                                                                        <div class="level-item">
                                                                            <strong><a @click="toPage('blog',{title:item.title,id:item.id})">{{item.title}}</a></strong>
                                                                        </div>
                                                                        <div class="level-item">
                                                                        <span @click="edit(item.id)" class="has-text-primary is-small" style="cursor:pointer;">
                                                                            <font-awesome-icon class="is-primary is-small" :icon="['fa','pencil-alt']"></font-awesome-icon>
                                                                        </span>
                                                                        </div>
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
                                </b-tab-item>
                                <b-tab-item label="Edit" icon="pencil-alt">
                                    <div class="tile is-vertical is-parent">
                                        <div class="tile is-child control">
                                            <b-field grouped>
                                                <b-field expanded>
                                                    <p class="control has-icons-left ">
                                                        <b-field>
                                                            <b-input placeholder="title"
                                                                     type="text"
                                                                     v-model="blog.title"
                                                                     required
                                                                     validation-message="title is required!">
                                                            </b-input>

                                                        </b-field>
                                                        <span class="icon is-small has-text-primary is-left">
                                                    <font-awesome-icon icon="leaf"></font-awesome-icon>
                                                </span>
                                                    </p>
                                                </b-field>
                                                <b-field expanded>
                                                    <button :class="buttonLoading === true ? 'animated rotateOutUpRight':''" class="button is-primary" @click="submit">
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
                                                    <b-field>
                                                        <b-input placeholder="tags"
                                                                 type="text"
                                                                 v-model="blog.tags"
                                                                 required
                                                                 validation-message="tag is required!">
                                                        </b-input>

                                                    </b-field>
                                                    <span class="icon is-small has-text-primary is-left">
                                                <font-awesome-icon icon="tag"></font-awesome-icon>
                                            </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="tile is-child" style="width:100%">
                                            <mavon-editor
                                                    v-model="blog.content"
                                                    ref="md"
                                                    @change="change"
                                                    style="min-height: 500px" @imgAdd="imgAdd"
                                            />
                                        </div>
                                    </div>
                                </b-tab-item>
                            </b-tabs>
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
    import {getUserInfo} from "../api/api"
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
                isFullPage: false,
                isLoading: false,
                userLoading: null,
                loading: true,
                currentMenu: '',
                blog: {
                    id: null,
                    title: '',
                    tags: '',
                    content: '',
                    done: 1,
                    userId: null
                },
                buttonLoading: false,
                blogs: [],
                user: {
                    userId: 0,
                    name: '',
                    avatarUrl: 'https://pic.codelinn.com//random/header5.png',
                    email: ''
                },
                isActive: false,
                activeTabIndex: 0,
                fromEdit: true
            }
        },
        methods: {
            tabChange(index){
                if(index === 0 ){
                    this.tab('Posted')
                }else if( index === 1){
                    if(!this.fromEdit) {
                        this.tab('Edit')
                    }
                }
                this.fromEdit = false
            },
            // 所有操作都会被解析重新渲染
            change(value, render){
                // render 为 markdown 解析后的结果[html]
                // this.blog.content = render;
            },
            // 提交
            submit(){
                this.buttonLoading = true
                if(this.blog.title.trim() === '' || this.blog.tags.trim() === '' || this.blog.content.trim() === ''){
                    this.$buefy.notification.open({
                        duration: 3000,
                        message: 'have you filled all things?!',
                        type: 'is-warning'
                    })
                    return;
                }
                if(!this.checkLogin()){
                    this.$buefy.notification.open({
                        duration: 4000,
                        message: 'Log in is required！',
                        type: 'is-warning'
                    })
                    this.buttonLoading = false
                    return;
                }

                const userInfo = getUserInfo(this.$cookies.get('token'))
                userInfo.then((res) => {
                    const userInfo = res
                    if(userInfo && userInfo.userId){
                        this.blog.userId = userInfo.userId
                        this.axios.post('/api/blog/sBlog',this.blog,{
                            headers: {
                                token: this.$cookies.get('token')
                            }
                        }).then(res => {
                            if(res ){
                                if(res.data.data === true){
                                    this.$buefy.notification.open({
                                        duration: 3000,
                                        message: 'submit success！！',
                                        type: 'is-success'
                                    })
                                    this.tab('Posted')
                                    return
                                }
                                this.$buefy.notification.open({
                                    duration: 3000,
                                    message: res.data.message,
                                    type: 'is-warning'
                                })

                            }
                        }).finally(() => {
                            this.buttonLoading = false
                            this.resetBlog()
                        })
                    }
                })

            },
            checkLogin(){
                if(!this.$cookies.isKey('token')){
                    return false
                }
                return true
            },
            tab(menu){
                this.resetBlog()
                this.currentMenu = menu
                if(menu === 'Posted'){
                    this.axios.get('/api/blog/getUserBlogs?userId=' + this.user.userId).then((res) => {
                        this.blogs = res.data.data.list
                        // indexLoading.close()
                        // this.loading = false
                    }).catch(() => {
                    })
                }
                if(menu==='Edit' && !this.checkLogin()){
                    this.$buefy.notification.open({
                        duration: 4000,
                        message: 'Log in is required！',
                        type: 'is-warning'
                    })
                }
            },
            edit(id){
                this.fromEdit = true
                this.axios.get('/api/blog/gBlog?id='+id).then(res => {
                    if(res.data.code){
                        this.$buefy.notification.open({
                            message: 'none blog is found！',
                            type: 'is-warning'
                        })
                    }else {
                        this.activeTabIndex = 1
                        this.blog.title = res.data.title
                        this.blog.content = res.data.contentOrigin
                        this.blog.tags = res.data.tags
                        this.blog.id = id
                    }
                    // this.indexLoading.close()
                })
            },
            signOut(){
                this.currentMenu = 'Logout'
                this.$buefy.dialog.confirm({
                    message: 'Sure to Log Out?',
                    onConfirm: () => {
                        this.$cookies.remove('token')
                        this.$cookies.remove('userInfo')
                        this.$router.push('/')
                    }
                })
                this.resetBlog()
            },
            resetBlog(){
                this.blog = {
                    id: null,
                    title: '',
                    tags: '',
                    content: '',
                    done: 1,
                    userId: null
                }
            },
            imgAdd(pos, $file){
                // 第一步.将图片上传到服务器.
                var formdata = new FormData();
                formdata.append('file', $file);
                this.axios.post('/api/blog/upload', formdata,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }}).then((resp) => {
                    // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                    // $vm.$img2Url 详情见本页末尾
                    this.$refs.md.$img2Url(pos, resp.data.data);
                })
            }
        },
        mounted() {
            const token =this.$cookies.get('token')
            if(token){
                this.isLoading = true
                this.axios.get('/api/user/info?accessToken='+ token).then((res) => {
                    this.user = res.data.data
                    this.$cookies.set('token',res.data.data.token,"30D")
                    this.$cookies.set('userInfo',res.data.data,"30D")
                    this.tab('Posted')
                }).catch(() => {
                }).finally(() => {
                    this.isLoading = false
                })
            }
            const code = this.$route.query.code;
            if(code){
                this.isLoading = true
                if (location.href.indexOf("?code=") !== -1) {
                    const newUrl = location.href.split("?")[0];
                    history.pushState('', '', newUrl);
                }
                this.axios.post('/api/user/auth/github?code='+ code,{
                    timeout:6000
                }).then((res) => {
                    this.user = res.data.data
                    this.$cookies.set('token',res.data.data.token,"30D")
                    this.$cookies.set('userInfo',res.data.data,"30D")
                    this.tab('Posted')
                }).catch(() => {
                    this.$buefy.notification.open({
                        message: 'log in failed！',
                        type: 'is-warning'
                    })
                }).finally(()=> {
                    this.isLoading = false
                })
            }

            this.$nextTick(() => {
                this.loading = false
            })

        }
    }
</script>
