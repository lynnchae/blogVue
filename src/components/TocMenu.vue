<template>
    <div>
        <div class="switcher" :class="[clickTimes % 2 == 0 ? 'switcher-show' : '']">
            <div class="switch-btn">
                <b-button type="is-primary" @click="addClick"><font-awesome-icon v-if="clickTimes % 2 == 0" class="has-text-white" :icon="['fas','angle-double-left']"/>
                    <font-awesome-icon v-if="clickTimes % 2 == 1" class="has-text-white" :icon="['fas','angle-double-right']"/></b-button>
            </div>
            <div class="switch-menu">
                <h5 class="title">目录</h5>
                <div id="toc" style="position: relative" class="toc-div" >
                    <div class="table-of-contents">
                        <div class="toc has-text-left" v-html="toc">
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tocMenu',
    props: {
        toc: {}
    },
    data() {
        return {
            clickTimes: 1
        }
    },
    methods: {
        addClick() {
            this.clickTimes ++
        }
    }
}
</script>
<style lang="scss">
    .switcher .switch-btn button {
        width:35px;
        height:35px;
        border:none;
        /*color:#fff;*/
        font-size: 18px;
        outline: none;
        border-radius: 0px;
    }
    .switcher .switch-btn {
        position: absolute;
        right: -35px;
        z-index: 999;
    }
    .switcher {
        position: fixed;
        top:90px;
        z-index: 999;
        left: -250px;
        -webkit-transition: all .4s ease-in-out;
        -moz-transition: all .4s ease-in-out;
        -ms-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }
    .switcher .switch-menu {
        width:250px;
        background: #3e3e3e;
        position: relative;
        padding-bottom: 20px;
    }
    .switcher.switcher-show {
        left:0;
    }
    /*.switcher .switch-menu .switcher-container {padding: 0 10px;}*/
    .switcher .switch-menu h5.title {
        margin:0 0 10px 0;
        line-height: 35px;
        text-align: center;
        font-size:17px;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        color:#fff;
        font-weight: 500;
    }
    .switcher .switch-menu .switcher-container h5 {
        color:#fff;
        font-size:15px;
        text-align: center;
        margin-bottom: 15px;
    }
    .switcher #styleOptions {padding: 0;margin: 0 -5px;}
    .switcher #styleOptions li {
        float:left;
        width:20%;
        padding: 0 5px;
        height:32px;
        margin-bottom: 10px;
    }
    .switcher #styleOptions li a {
        display: block;
        width:100%;
        height:100%;
        position: relative;
        overflow: hidden;
    }
    .switcher #styleOptions li a.color1 {background: #0366D6;}
    .switcher #styleOptions li a.color2 {background: #1c9ce5;}
    .switcher #styleOptions li a.color3 {background: #0fdad0;}
    .switcher #styleOptions li a.color4 {background: #4ebf80;}
    .switcher #styleOptions li a.color5 {background: #ff6a5d;}
    .switcher #styleOptions li a.color6 {background: #5580e9;}
    .switcher #styleOptions li a.color7 {background: #2da731;}
    .switcher #styleOptions li a.color8 {background: #be9656;}
    .switcher #styleOptions li a.color9 {background: #cc2d6f;}
    .switcher #styleOptions li a.color10 {background: #f7892f;}
    .switcher .theme-demo {margin: 0 -5px;text-align: center;}
    .switcher .theme-demo li {float: left;padding: 0 5px;width: 50%;}
    .switcher .theme-demo h6 {
        text-transform: uppercase;
        color: #fff;
        margin-top: 5px;
        font-weight: normal;
        font-size: 17px;
    }
    .switcher .theme-demo li a {border: 1px solid rgba(255,255,255,0.6);}
    .toc-div {
        background-clip: padding-box;
        border-radius: 4px;
        /*float: left;*/
        font-size: 15px;
        list-style: none outside none;
        margin: 2px 0 0;
        min-width: 160px;
        position: absolute;
        padding: 5px 0 20px;
        top: 100%;
        z-index: 1000;
        font-family: 'Ubuntu','Open Sans';
    }

    .table-of-contents {
        overflow-x: hidden;
        overflow-y: auto;
        max-height: 450px;
        padding: 5px 5px;
    }

    .toc>ul{
        margin:0;
    }
    .toc ul{
        margin-left: 15px;
        list-style-type: none;
    }

    .toc ul ul,.toc ul ol,.toc ol ol,.toc ol ul{
        margin-bottom: 0;
    }

    .toc li{
        line-height: 25px;
        display: list-item;
        text-align: -webkit-match-parent;
    }
    .toc a{
        color: #FFFFFF;
        font-size: 16px;
    }
    .toc a:hover{
        color:#7957d5;
    }

    .table-of-contents::-webkit-scrollbar {
        display: none;
    }
</style>
