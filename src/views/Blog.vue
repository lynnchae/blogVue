<style lang="scss">
    .has-text-grape {
        color: #7957d5
    }
    .margin-0-50 {
        margin: 0px 50px;
    }
    .span-align-middle {
        vertical-align: middle!important;
    }
</style>
<template>
    <div class="container is-widescreen">
        <div class="tile is-ancestor is-vertical" style="background: url('https://pic.codelinn.com/map.png') no-repeat center center;">
            <div class="tile is-parent">
                <div class="tile is-child">
                    <b-navbar class=" navbar is-fixed-top" >
                        <template slot="brand">
                            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                                <img src="https://pic.codelinn.com/logo.png"/>
                            </b-navbar-item>
                        </template>
                        <template slot="start">
                            <div class="field is-grouped">
                                <b-navbar-item @click="toPage('index')" >
                                    <b-icon class="span-align-middle" pack="fas" icon="angle-double-left"></b-icon>
                                    <span class="span-align-middle">Home</span>
                                </b-navbar-item>
                            </div>
                        </template>
                    </b-navbar>
                </div>
            </div>
            <div class="section">
            </div>
            <div class="tile is-parent has-text-centered margin-0-50">
                <div class="tile is-child ">
                    <span class="title is-large">
                    {{title}}
                    </span>
                </div>
            </div>
            <div class="tile is-parent is-vertical has-text-left">
                <div class="tile is-child content">
                    <div id="blog-main-content" class="md-content margin-0-50" style="padding-top: 80px; ">
                        <div v-html="content"></div>
                    </div>
                </div>
            </div>

            <div class="section">
                <hr/>
            </div>

            <div class="tile is-parent is-vertical margin-0-50" >
                <div class="tile is-child has-text-left">
                    <span class="title is-large">评论区</span>
                </div>
                <div class="tile is-child">
                    <article class="media" v-for="item in comments" :key="item.id">
                        <figure class="media-left">
                            <p class="image is-48x48 " >
                                <img class="is-rounded" :src="item.avatar">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong class="has-text-grape">{{item.commenter}}</strong>
                                    <br>
                                    {{item.comment}}
                                    <br>
                                    <br>
                                    <small><a>Reply</a> · {{item.createTime}}</small>
                                </p>
                            </div>

                            <article class="media " v-for="c in item.comments" :key="c.id">
                                <figure class="media-left">
                                    <p class="image is-32x32">
                                        <img class="is-rounded" :src="c.avatar">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong class="has-text-grape">{{c.commenter}}</strong>
                                            <br>
                                            {{c.comment}}
                                            <br>
                                            <br>
                                            <small><a>Reply</a> · {{c.createTime}}</small>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img class="is-rounded" src="https://pic.codelinn.com//random/header5.png">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="field">
                                <p class="control">
                                    <textarea class="textarea" placeholder="Add a comment..."></textarea>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control">
                                    <button class="button is-outlined">Post comment</button>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            title: '',
            content: '',
            comments: []
        };
    },
    created() {
        sessionStorage.setItem(this.id,this.id)
        this.getBlog()
    },
    methods: {
        getBlog(){
            let id = 0;
            if(this.$route.params.id){
                id = this.$route.params.id
            }else{
                id = sessionStorage.getItem(this.id)
            }
            this.axios.get('/api/blog/gBlog?id='+id).then(res => {
                window.console.info(res)
                if(res.data.code){
                    this.$buefy.notification.open({
                        message: '没有找到相关文章！',
                        type: 'is-warning'
                    })
                }else {
                    this.title = res.data.title
                    this.content = res.data.content
                    if(res.data.comments){
                        this.comments = res.data.comments
                    }
                }

            })
        }
    }
}
</script>

