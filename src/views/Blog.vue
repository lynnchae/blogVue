<style lang="scss">

    .fadeIn {
        animation-duration: 300ms;
    }
    .has-text-grape {
        color: #7957d5
    }
    .margin-0-50 {
        margin: 0px 30px;
    }
    .span-align-middle {
        vertical-align: middle!important;
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
    .scroll-top {
        width:25px!important;
        height:25px!important;
        line-height: 22px!important;
        position: fixed!important;
        bottom: 25px!important;
        right: 20px!important;
        z-index: 99!important;
        text-align: center!important;
        color: #fff!important;
        font-size: 20px!important;
        /*display: none!important;*/
        cursor: pointer!important;
        border-radius: 3px!important;
        vertical-align: center;
        padding: 0px 5px!important;
    }
    .scroll-top:after {
        position: absolute!important;
        z-index: -1!important;
        content: ''!important;
        top: 100%!important;
        left: 5%!important;
        height: 10px!important;
        width: 90%!important;
        opacity: 1!important;
        background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 80%)!important;
    }

    .fade-enter-active .fade-leave-active{
        transition: ease .5s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }


</style>
<template>
    <div class="container is-widescreen">
        <div class="pageloader is-left-to-right" style="background-color: #7957d5" v-bind:class="{'is-active': loading}"><span class="title">Loading Blog</span></div>
        <div class="tile is-ancestor is-vertical" style="background: url('https://pic.codelinn.com/map.png') no-repeat center center;">
            <div class="tile is-parent">
                <div class="tile is-child">
                    <b-navbar class="navbar" shadow :mobile-burger="mobileBurger" >
                        <template slot="brand">
                            <b-navbar-item class="pulse animated infinite" tag="router-link" :to="{ path: '/' }">
                                <img src="https://pic.codelinn.com/logo/finalLogo.png"/>
                            </b-navbar-item>
                        </template>
                    </b-navbar>
                </div>
            </div>
            <toc-menu :toc="toc"/>
            <div>
                <div class="tile is-parent has-text-centered margin-0-50">
                    <div class="tile is-child fadeInDown animated">
                        <span class="title is-size-2-desktop">
                        {{title}}
                        </span>
                    </div>
                </div>
                <div class="tile is-parent is-vertical has-text-right">
                    <div class="tile is-child content fadeInRight animated">
                        <div class="md-content margin-0-50" >
                            <span>
                                <font-awesome-icon :icon="['fab','markdown']"></font-awesome-icon>
                            </span>
                        </div>
                        <div class="md-content margin-0-50" >
                            <span>
                                {{this.createTime}}
                            </span>
                        </div>

                    </div>
                </div>
                <div class="tile is-parent is-vertical has-text-left">
                    <div class="tile is-child content">
                        <div id="blog-main-content" class="md-content margin-0-50" style="padding-top: 30px; ">
                            <div class="fadeInUp animated is-size-5-desktop" v-html="content" v-highlight></div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="section">
                <hr/>
            </div>

            <div class="tile is-parent is-vertical margin-0-50" >
                <div class="tile is-child has-text-left">
                    <span class="title is-large">Comments</span>
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
                                    <small><a @click="clickReply(item.id ,item.id, item.commenter)">Reply</a> · {{item.createTime}}</small>
                                </p>
                            </div>
                            <br>
                                <figure v-show="currentClickCommentId == item.id" :class="currentClickCommentId == item.id ? 'fadeIn animated' : '' " class="media-content" >
                                    <div v-if="!$cookies.isKey('userInfo')" class="tile is-ancestor is-vertical">
                                        <div class="tile is-parent" style="margin-top: 5px">
                                            <div class="tile is-child is-2">
                                                <b-field label="Name" label-position="on-border">
                                                    <b-input v-model="user"></b-input>
                                                </b-field>
                                            </div>
                                        </div>
                                        <div class="tile is-parent">
                                            <div class="tile is-child is-3">
                                                <b-field label="Email" label-position="on-border">
                                                    <b-input v-model="userEmail"></b-input>
                                                </b-field>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <b-field >
                                            <textarea v-model="newComment" class="textarea" placeholder="Add a comment..."></textarea>
                                        </b-field>
                                    </div>
                                    <div class="field">
                                        <p class="control">
                                            <button class="button is-primary" @click="sendComment">Post Reply</button>
                                        </p>
                                        <br/>
                                    </div>
                                </figure>


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
                                            <br>
                                            {{c.comment}}<strong><span class="has-text-primary">{{'  @' + c.replyTo + ' '}}</span></strong>
                                            <br>
                                            <br>
                                            <small><a @click="clickReply(item.id, c.id, c.commenter)">Reply</a> · {{c.createTime}}</small>
                                        </p>
                                    </div>
                                        <figure v-show="currentClickCommentId == c.id" :class="currentClickCommentId == c.id ? 'fadeIn animated' : '' " class="media-content" >
                                            <div v-if="!$cookies.isKey('userInfo')" class="tile is-ancestor is-vertical">
                                                <div class="tile is-parent" style="margin-top: 5px">
                                                    <div class="tile is-child is-2">
                                                        <b-field label="Name" label-position="on-border">
                                                            <b-input v-model="user"></b-input>
                                                        </b-field>
                                                    </div>
                                                </div>
                                                <div class="tile is-parent">
                                                    <div class="tile is-child is-3">
                                                        <b-field label="Email" label-position="on-border">
                                                            <b-input v-model="userEmail"></b-input>
                                                        </b-field>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <b-field >
                                                    <textarea v-model="newComment" class="textarea" placeholder="Add a comment..."></textarea>
                                                </b-field>
                                            </div>
                                            <div class="field">
                                                <p class="control">
                                                    <button class="button is-primary" @click="sendComment">Post Reply</button>
                                                </p>
                                                <br/>
                                            </div>
                                        </figure>

                                </div>
                            </article>
                        </div>
                    </article>
                    <article class="media">

                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img class="is-rounded" :src="$cookies.isKey('userInfo') ? $cookies.get('userInfo').avatarUrl : 'https://pic.codelinn.com//random/header5.png'">
                            </p>
                        </figure>
                        <div class="media-content">
                            <figure class="media-content" >
                                <div v-if="!$cookies.isKey('userInfo')" class="tile is-ancestor is-vertical">
                                    <div class="tile is-parent" style="margin-top: 5px">
                                        <div class="tile is-child is-2">
                                            <b-field label="Name" label-position="on-border">
                                                <b-input v-model="user" ></b-input>
                                            </b-field>
                                        </div>
                                    </div>
                                    <div class="tile is-parent">
                                        <div class="tile is-child is-3">
                                            <b-field label="Email" label-position="on-border">
                                                <b-input v-model="userEmail"></b-input>
                                            </b-field>
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <b-field >
                                        <textarea v-model="newComment" class="textarea" placeholder="Add a comment..."></textarea>
                                    </b-field>
                                </div>
                                <div class="field">
                                    <p class="control">
                                        <button class="button is-outlined" @click="postComment">Post Comment</button>
                                    </p>
                                    <br/>
                                </div>
                            </figure>
                        </div>
                    </article>
                </div>
            </div>
            <a class="button scroll-top is-primary" href="#">
                <font-awesome-icon class="has-text-white" :icon="['fa','angle-up']"/>
            </a>
        </div>

    </div>
</template>
<script>
import TocMenu from "../components/TocMenu";
export default {
    components: {TocMenu},
    data(){
        return {
            createTime: null,
            loading: true,
            indexLoading: null,
            fullpage: false,
            id: 0,
            title: '',
            content: '',
            comments: [],
            toc: '',
            clickTimes: 1,
            mobileBurger: false,
            currentClickCommentId : 0,
            newComment: '',
            replyTo: '',
            comment: {
                blogId: 0,
                commenter: '',
                commenterEmail: '',
                replyTo: '',
                comment: '',
                parentId: '',
                visitorId: null
            },
            user: this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').name : '',
            userEmail: this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').email : '',
            userId: this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').userId : '',
            parentId: 0
        };
    },
    created() {
        if(!this.$cookies.isKey('userInfo') && this.$cookies.isKey('commenter')){
            this.user = this.$cookies.get('commenter')
        }
        if(!this.$cookies.isKey('userInfo') && this.$cookies.isKey('commenterEmail')){
            this.userEmail = this.$cookies.get('commenterEmail')
        }
        // this.indexLoading = this.$loading({
        //     text: 'Loading',
        //     type: 'bars',
        //     background: '#7957d5'
        // })
        this.getBlog()
    },
    methods: {
        getBlog(){
            let id = 0;
            if(this.$route.params.id){
                id = this.$route.params.id
                sessionStorage.setItem(location.href ,id)
            }else{
                id = sessionStorage.getItem(location.href)
            }
            this.id = id
            this.axios.get('/api/blog/gBlog?id='+id).then(res => {
                if(res.data.code){
                    this.$buefy.notification.open({
                        message: '没有找到相关文章！',
                        type: 'is-warning'
                    })
                }else {
                    this.title = res.data.title
                    this.content = res.data.content
                    this.toc = res.data.toc
                    this.createTime = res.data.createTime
                    if(res.data.comments && res.data.comments.length > 0){
                        this.comments = res.data.comments
                    }
                    this.loading = false
                }
                // this.indexLoading.close()
            })
        },
        addClick() {
            this.clickTimes ++
        },
        clickReply(parentId, id, replyTo) {
            this.resetComment()
            this.currentClickCommentId = id;
            this.replyTo = replyTo
            this.parentId = parentId
        },
        resetComment(){
            this.comment = {
                blogId: 0,
                commenter: '',
                commenterEmail: '',
                replyTo: '',
                comment: '',
                parentId: '',
                visitorId: null
            }
            this.newComment = ''
            this.parentId = 0
        },
        sendComment(){
            if(!this.$cookies.isKey('commenter')){
                this.$cookies.set('commenter',this.user,'30D')
            }
            if(!this.$cookies.isKey('commenterEmail')){
                this.$cookies.set('commenterEmail',this.userEmail,'30D')
            }
            this.comment.blogId = this.id
            this.comment.commenter = this.user
            this.comment.commenterEmail = this.userEmail
            this.comment.comment = this.newComment
            this.comment.replyTo = this.replyTo
            this.comment.parentId = this.parentId
            this.comment.visitorId = this.userId
            this.axios.post('/api/comment/sendComment',this.comment).then(res => {
                this.$buefy.notification.open({
                    message: 'comment success！',
                    type: 'is-success'
                })
                this.getBlog()
            }).finally(info => {
                this.currentClickCommentId = 0
                this.resetComment()
            })
        },
        postComment(){
            if(this.newComment === '') {
                return
            }
            this.comment.blogId = this.id
            this.comment.commenter = this.user
            this.comment.commenterEmail = this.userEmail
            this.comment.comment = this.newComment
            this.comment.replyTo = ''
            this.comment.parentId = 0
            this.comment.visitorId = this.userId
            this.$cookies.set('commenter',this.user,'30D')
            this.$cookies.set('commenterEmail',this.userEmail,'30D')
            window.console.info(this.userId)
            this.axios.post('/api/comment/sendComment',this.comment).then(res => {
                this.$buefy.notification.open({
                    message: 'comment success！',
                    type: 'is-success'
                })
                this.getBlog()
            }).finally(info => {
                this.resetComment()
            })
        }
    }
}
</script>

