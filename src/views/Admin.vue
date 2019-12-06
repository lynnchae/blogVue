<template>
    <section class="hero is-medium">
        <div class="hero-body" style="padding-top: 10px">
            <div class="container">
                <div class="tile">
                    <b-navbar class="navbar is-fixed-top has-background-white" :mobile-burger="false">
                        <template slot="brand">
                            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                                <img src="https://pic.codelinn.com/logo.png"/>
                            </b-navbar-item>
                        </template>
                    </b-navbar>
                </div>
                <div class="tile is-ancestor">
                    <div class="tile is-12 is-parent">
                        <div class="tile is-child is-2" style="border-right: 1px #7957d5;box-shadow: rgba(121, 87, 213, 0.3) 3px 0px 0px 0px">
                            <aside class="menu has-text-left" >
                                <ul class="menu-list">
                                    <li><a>LiNn</a></li>
                                    <p class="menu-label">
                                        Personnal Center
                                    </p>
                                    <li>
                                        <a class="">Blogs</a>
                                        <ul>
                                            <li><a v-bind:class="{'is-active':currentMenu == 'Posted'}" @click="tab('Posted')" class="">Posted</a></li>
                                            <li><a v-bind:class="{'is-active':currentMenu == 'Edit'}" @click="tab('Edit')" >Edit</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div class="tile is-child is-10" >
                            <div v-show="currentMenu === 'Edit'"  class="tile is-vertical is-parent">
                                <div class="tile is-child is-4 control">
                                    <div class="field">
                                        <p class="control has-icons-left has-icons-right">
                                            <input v-model="blog.title" class="input" type="text" placeholder="Blog Title">
                                            <span class="icon is-small is-left has-text-primary">
                                      <font-awesome-icon icon="leaf"></font-awesome-icon>
                                    </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="tile is-child is-4">
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
                                <div class="tile is-child is-flex ">
                                    <button v-bind:class="{'is-loading': buttonLoading}" class="button is-primary" disabled @click="submit">Submit</button>
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

    export default {
        // 注册
        components: {
            mavonEditor,
        },
        data() {
            return {
                currentMenu: '',
                blog: {
                    title: '',
                    tags: '',
                    content: '',
                    done: 1
                },
                buttonLoading: false,
                blogs: []
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
                    this.axios.get('/api/blog/getUserBlogs?userId=1').then((res) => {
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
            this.tab('Posted')
        }
    }
</script>
