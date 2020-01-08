<template>
    <div class="container">
        <div class="tile is-vertical is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child">
                    <div class="container">
                        <b-navbar class="container navbar is-fixed-top fadeInDown animated" shadow>
                            <template slot="start">
                                <div class="field is-grouped">
                                    <b-navbar-item tag="div">
                                        <div v-show="this.currentId !==''" class="buttons">
                                            <a @click="allAlbums" class="text is-primary">
                                                <font-awesome-icon class="has-text-primary" :icon="['fa','images']"></font-awesome-icon>
                                                All Albums
                                            </a>
                                        </div>
                                    </b-navbar-item>
                                </div>
                            </template>
                            <template slot="end">
                                <b-navbar-item @click="toPage('index')">
                                    <font-awesome-icon class="has-text-primary" :icon="['fas','home']"></font-awesome-icon>
                                </b-navbar-item>
                            </template>
                        </b-navbar>
                    </div>
                </div>

            </div>
            <div class="tile is-parent fadeIn animated albums" v-bind:class="{'is-hidden' : this.currentId !== '' }" style="padding-top: 50px">
                <div class="tile is-child">
                    <div class=" ">
                        <div class="photo" style="height:180px;width: 267px;padding:5px;display: block;float: left">
                            <img class="image-thumbnail" @click="showAlbum(0)" src="https://pic.codelinn.com/blog/index/swipera6.jpg" />
                            <div class="title">The Swiper</div>
                        </div>
                        <div class="photo" style="height:180px;width: 267px;padding:5px;display: block;float: left" >
                            <img class="image-thumbnail" @click="showAlbum(1)" src="https://pic.codelinn.com/blog/background/samrat-khadka-pK27drHOpbY-unsplash.jpg" />
                            <div  class="title">The Wallpapers</div>
                        </div>
                        <div class="photo" style="height:180px;width: 267px;padding:5px;display: block;float: left" >
                            <img class="image-thumbnail" @click="showAlbum(2)" src="https://pic.codelinn.com/albums/marry/3B3A5638.JPG" />
                            <div  class="title">Wedding</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile is-parent" style="padding-top: 50px">
                <div class="tile is-child">
                    <div>
                        <stack :monitor-images-loaded="imagesLoaded" :column-min-width="320" :gutter-width="8" :gutter-height="8">
                            <scroller
                                    :on-infinite="infinite">
                                <stack-item style="transition: transform 300ms" v-for="(item, i) in targetAlbum.imgs" :key="i">
                                    <!--                                <img class="" :src="item.url" />-->
                                    <img :preview="targetAlbum.title" :src="item.url" />
                                </stack-item>
                            </scroller>

                        </stack>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Stack, StackItem } from 'vue-stack-grid'
    export default {
        name: 'album',
        components: { Stack, StackItem },
        data() {
            return {
                imagesLoaded: true,
                gallery: null,
                currentId: '',
                options: { inline: false, button: true, navbar: true, title: false, toolbar: true, tooltip: true, movable: false, zoomable: false, rotatable: false, scalable: false, transition: true, fullscreen: false, keyboard: true, url: "data-source" },
                albums: [
                    {
                        title:'img1',
                        imgs:[
                            {url: 'https://pic.codelinn.com/blog/index/swipera1.jpg',id:1},
                            {url: 'https://pic.codelinn.com/blog/index/swipera2.jpg',id:2},
                            {url: 'https://pic.codelinn.com/blog/index/swipera3.jpg',id:3},
                            {url: 'https://pic.codelinn.com/blog/index/swipera4.jpg',id:4},
                            {url: 'https://pic.codelinn.com/blog/index/swipera5.jpg',id:5},
                            {url: 'https://pic.codelinn.com/blog/index/swipera6.jpg',id:6},
                            {url: 'https://pic.codelinn.com/blog/index/swipera7.jpg',id:7},
                            {url: 'https://pic.codelinn.com/blog/index/swipera8.jpg',id:8},
                        ]},
                    {
                        title:'img2',
                        imgs:[
                            {url:'https://pic.codelinn.com/blog/background/willian-justen-de-vasconcellos-FfpZPMVV_M8-unsplash.jpg',id:3},
                            {url:'https://pic.codelinn.com/blog/background/tim-marshall-9ZYKtx9nPCc-unsplash.jpg',id:2},
                            {url: 'https://pic.codelinn.com/blog/background/samrat-khadka-pK27drHOpbY-unsplash.jpg',id: 1},
                            {url:'https://pic.codelinn.com/blog/background/markus-spiske-x1QSu6XexIw-unsplash.jpg',id:4}
                        ]},
                    {
                        title:'img3',
                        imgs:[
                            {url:'https://pic.codelinn.com/album/wedding74.jpg',id:74},
                            {url:'https://pic.codelinn.com/album/wedding73.jpg',id:73},
                            {url:'https://pic.codelinn.com/album/wedding72.jpg',id:72},
                            {url:'https://pic.codelinn.com/album/wedding71.jpg',id:71},
                            {url:'https://pic.codelinn.com/album/wedding70.jpg',id:70},
                            {url:'https://pic.codelinn.com/album/wedding69.jpg',id:69},
                            {url:'https://pic.codelinn.com/album/wedding68.jpg',id:68},
                            {url:'https://pic.codelinn.com/album/wedding67.jpg',id:67},
                            {url:'https://pic.codelinn.com/album/wedding66.jpg',id:66},
                            {url:'https://pic.codelinn.com/album/wedding65.jpg',id:65},
                            {url:'https://pic.codelinn.com/album/wedding64.jpg',id:64},
                            {url:'https://pic.codelinn.com/album/wedding62.jpg',id:62},
                            {url:'https://pic.codelinn.com/album/wedding60.jpg',id:60},
                            {url:'https://pic.codelinn.com/album/wedding61.jpg',id:61},
                            {url:'https://pic.codelinn.com/album/wedding58.jpg',id:58},
                            {url:'https://pic.codelinn.com/album/wedding57.jpg',id:57},
                            {url:'https://pic.codelinn.com/album/wedding56.jpg',id:56},
                            {url:'https://pic.codelinn.com/album/wedding55.jpg',id:55},
                            {url:'https://pic.codelinn.com/album/wedding54.jpg',id:54},
                            {url:'https://pic.codelinn.com/album/wedding53.jpg',id:53},
                            {url:'https://pic.codelinn.com/album/wedding52.jpg',id:52},
                            {url:'https://pic.codelinn.com/album/wedding51.jpg',id:51},
                            {url:'https://pic.codelinn.com/album/wedding50.jpg',id:50},
                            {url:'https://pic.codelinn.com/album/wedding49.jpg',id:49},
                            {url:'https://pic.codelinn.com/album/wedding48.jpg',id:48},
                            {url:'https://pic.codelinn.com/album/wedding47.jpg',id:47},
                            {url:'https://pic.codelinn.com/album/wedding46.jpg',id:46},
                            {url:'https://pic.codelinn.com/album/wedding45.jpg',id:45},
                            {url:'https://pic.codelinn.com/album/wedding44.jpg',id:44},
                            {url:'https://pic.codelinn.com/album/wedding41.jpg',id:41},
                            {url:'https://pic.codelinn.com/album/wedding42.jpg',id:42},
                            {url:'https://pic.codelinn.com/album/wedding40.jpg',id:40},
                            {url:'https://pic.codelinn.com/album/wedding39.jpg',id:39},
                            {url:'https://pic.codelinn.com/album/wedding38.jpg',id:38},
                            {url:'https://pic.codelinn.com/album/wedding34.jpg',id:34},
                            {url:'https://pic.codelinn.com/album/wedding28.jpg',id:28},
                            {url:'https://pic.codelinn.com/album/wedding26.jpg',id:26},
                            {url:'https://pic.codelinn.com/album/wedding25.jpg',id:25},
                            {url:'https://pic.codelinn.com/album/wedding21.jpg',id:21},
                            {url:'https://pic.codelinn.com/album/wedding19.jpg',id:19},
                            {url:'https://pic.codelinn.com/album/wedding18.jpg',id:18},
                            {url:'https://pic.codelinn.com/album/wedding16.jpg',id:16},
                            {url:'https://pic.codelinn.com/album/wedding15.jpg',id:15},
                            {url:'https://pic.codelinn.com/album/wedding13.jpg',id:13},
                            {url:'https://pic.codelinn.com/album/wedding10.jpg',id:10}
                        ]}
                ],
                targetAlbum: {
                    title: '',
                    imgs: []
                },
                imgsArr: ['https://pic.codelinn.com/blog/background/markus-spiske-x1QSu6XexIw-unsplash.jpg',
                    'https://pic.codelinn.com/193.jpeg',
                    'https://pic.codelinn.com/blog/index/swipera1.jpg',
                    'https://pic.codelinn.com/logo/IMG_5928.PNG',
                    'https://pic.codelinn.com/blog/background/willian-justen-de-vasconcellos-FfpZPMVV_M8-unsplash.jpg'
                ],
                page: 0
            }
        },
        mounted() {
            window.addEventListener('scroll',this.handleScroll)
        },
        methods:{
            showAlbum(id){
                this.page = 0
                this.currentId = id
                // this.targetAlbum = this.albums[id]
                this.getAlbumsNextPage()
            },
            allAlbums(){
                this.targetAlbum = {
                    title: '',
                    imgs: []
                }
                this.currentId = ''
                this.page = 0
            },
            getAlbumsNextPage(){
                const id = this.currentId
                this.targetAlbum.title = this.albums[id].title
                this.page += 1
                const startIndex = (this.page - 1) * 10
                const endIndex = startIndex + 10
                if(startIndex > this.albums[id].length){
                    return
                }
                this.targetAlbum.imgs = this.targetAlbum.imgs.concat(this.albums[id].imgs.slice(startIndex,endIndex))
            },
            handleScroll(){
                if(this.currentId === ''){
                    return
                }
                if((document.documentElement.scrollTop + window.outerHeight) > document.body.offsetHeight){
                    this.getAlbumsNextPage()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .delay-200ms {
        animation-delay: 200ms;
    }
    .image-thumbnail {
        cursor: pointer;
        object-fit: cover;
        height: 100%;
    }
    .image {
        /*width: calc(20% - 10px);*/
        cursor: pointer;
        margin: 5px;
        display: inline-block;
        /*float: left;*/
        box-shadow: 0 10px 12px 0 rgba(10, 10, 10, 0.1) ;
    }
    .image-thumbnail:hover {
        opacity: 0.3;
        color: #fff;
    }

    .image-thumbnail:hover+ .title {
        display: block!important;
    }

    .title{
        display: none;
        position: absolute;
        bottom:20px;
        left:0px;
        text-align: center;
        right:0px;
        font-size:24px;
        font-weight: bold;
        color: #7957d5;
    }
    .photo {
        position: relative;
    }

</style>
