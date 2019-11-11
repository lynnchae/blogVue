<template>
    <div class="container is-widescreen">
        <div class="tile is-ancestor is-vertical" style="background: url('http://img.codelinn.com/map.png') no-repeat center center;">
            <div class="tile is-parent">
                <div class="tile is-child">
                    <b-navbar class=" navbar is-fixed-top" >
                        <template slot="start">
                            <div class="field is-grouped">
                                <b-navbar-item href="/" >
                                    <b-icon pack="fas" icon="angle-double-left"></b-icon>
                                    <span>Home</span>
                                </b-navbar-item>
                            </div>
                        </template>
                    </b-navbar>
                </div>
            </div>
            <div class="tile is-parent has-text-centered">
                <div class="tile is-child">
                    <span class="title is-large">
                    {{title}}
                    </span>
                </div>
            </div>
            <div class="tile is-parent is-vertical has-text-left">
                <div class="tile is-child content">
                    <div id="blog-main-content" class="md-content"><h3 id="warning">Warning</h3>
                        <p>最近github仓库被黑客攻击，导致大部分repo被黑，黑客需要0.1 BTC作为赎金，而本站也在受害者名单中！以下为黑客留言</p>
                        <blockquote>
                            <p>To recover your lost Database and avoid leaking it: Send us 0.1 Bitcoin (BTC) to our Bitcoin address 143RTPNZEbLMTPagX72jA2QxL5z7EyLshu and contact us by Email with your Server IP or Domain name and a Proof of Payment. If you are unsure if we have your data, contact us and we will send you a proof. Your Database is downloaded and backed up on our servers. Backups that we have right now: lynn . If we dont receive your payment in the next 10 Days, we will make your database public or use them otherwise.</p>
                        </blockquote>
                        <p>博客数据相对来说重要性可能不是那么高，但这次事件也警醒自己要时常做数据的备份，以及提高安全意识。</p>
                        <p>博客数据正尝试恢复中...但恢复的可能性应该不大了</p>
                    </div>
                </div>
            </div>

            <div class="section">
                <hr/>
            </div>
            <div class="tile is-parent is-vertical">
                <div class="tile is-child has-text-left">
                    <span class="title is-large">评论区</span>
                </div>
                <div class="tile is-child">
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-64x64 " >
                                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/128x128.png">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Barbara Middleton</strong>
                                    <br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                                    <br>
                                    <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                                </p>
                            </div>

                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-48x48">
                                        <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Sean Brown</strong>
                                            <br>
                                            Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                                            <br>
                                            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                        </p>
                                    </div>

                                    <article class="media">
                                        Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                                    </article>

                                    <article class="media">
                                        Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                                    </article>
                                </div>
                            </article>

                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-48x48">
                                        <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Kayli Eunice </strong>
                                            <br>
                                            Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                                            <br>
                                            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/128x128.png">
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
            title: this.$route.params.title
        };
    }
}
</script>

