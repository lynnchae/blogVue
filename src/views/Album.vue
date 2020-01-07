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
                        <stack monitor-images-loaded :column-min-width="320" :gutter-width="8" :gutter-height="8">
                            <stack-item style="transition: transform 300ms" v-for="(item, i) in targetAlbum.imgs" :key="i">
<!--                                <img class="" :src="item.url" />-->
                                <img :preview="targetAlbum.title" :src="item.url" />
                            </stack-item>
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
                            {url:'https://pic.codelinn.com/albums/marry/1.png',id:1},
                            {url:'https://pic.codelinn.com/albums/marry/2.jpg',id:2},
                            {url:'https://pic.codelinn.com/albums/marry/3.jpg',id:3},
                            {url:'https://pic.codelinn.com/albums/marry/3B3A5638.JPG',id:4},
                            {url:'https://pic.codelinn.com/albums/marry/3B3A5523.jpg',id: 5},
                            {url:'https://pic.codelinn.com/albums/marry/3B3A5779.jpg',id:6},
                            {url:'https://pic.codelinn.com/albums/marry/3B3A5809.jpg',id:7}
                        ]}
                ],
                targetAlbum: {},
                imgsArr: ['https://pic.codelinn.com/blog/background/markus-spiske-x1QSu6XexIw-unsplash.jpg',
                    'https://pic.codelinn.com/193.jpeg',
                    'https://pic.codelinn.com/blog/index/swipera1.jpg',
                    'https://pic.codelinn.com/logo/IMG_5928.PNG',
                    'https://pic.codelinn.com/blog/background/willian-justen-de-vasconcellos-FfpZPMVV_M8-unsplash.jpg'
                ]
            }
        },
        methods:{
            showAlbum(id){
                this.targetAlbum = this.albums[id]
                this.currentId = id
            },
            allAlbums(){
                this.targetAlbum = {}
                this.currentId = ''
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
