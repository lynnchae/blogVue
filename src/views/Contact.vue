<style lang="scss">
    .padding-top{
        padding-top: 50px;
    }

    .contact-padding {
        padding-top: 80px;
    }
</style>
<template>
    <div class="container is-widescreen">
        <div class="colums ">
            <div class="column">
                <b-navbar class="is-transparent navbar is-fixed-top" :mobile-burger="mobileBurger">
                    <template slot="brand">
                        <b-navbar-item tag="router-link" :to="{ path: '/' }">
                            <img src="https://pic.codelinn.com/logo.png"/>
                        </b-navbar-item>
                    </template>
                </b-navbar>
            </div>
            <section>
                <hr/>
            </section>
            <div id="submit" class="column is-half is-offset-one-quarter contact-padding">
                <span class="title ">
                    Contact
                </span>
                <div class="has-text-left padding-top">
                    <b-field horizontal label="Name" message="Please enter your name">
                        <b-input v-model="messageObj.sender" name="sender" expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Email" message="Please enter your email">
                         <b-input v-model="messageObj.email" name="email" type="email" placeholder="nobody@nowhere.com" expanded></b-input>
                    </b-field>

                    <b-field horizontal label="Message" message="Please enter your words">
                        <b-input v-model="messageObj.message" name="message" type="textarea" ></b-input>
                    </b-field>

                    <b-field horizontal><!-- Label left empty for spacing -->
                        <p class="control">
                            <button :loading="buttonLoading" class="button is-primary" :class="[buttonLoading? 'is-loading':'']" @click="sendMsg">
                                Send message
                            </button>
                        </p>
                    </b-field>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'contact',
        data(){
            return {
                mobileBurger: false,
                messageObj: {
                    sender: '',
                    email: '',
                    message: ''
                },
                buttonLoading: false
            }
        },
        created() {

        },
        methods: {
            sendMsg() {
                this.buttonLoading = true
                this.axios.post('/api/message/leavingMessage',this.messageObj).then(res => {
                    this.$buefy.notification.open({
                        message: '发送成功！！',
                        type: 'is-success'
                    })
                    this.messageObj = {}
                }).catch(error=> {
                    window.console.error(error)
                }).finally(obj => {
                    this.buttonLoading = false
                })

            }
        }
    }
</script>
