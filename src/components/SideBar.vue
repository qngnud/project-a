<template>
    <v-navigation-drawer
            app
            flat
            floating
            width="350px"

            class="navigation-drawer"

    >
        <img class="logo" src="../assets/logo.svg" alt=""/>
        <img src="../assets/top-background.svg" alt=""/>

        <div class="d-flex flex-column justify-space-around mx-auto mt-auto">

            <router-link v-for="item in router" :key="item.icon" :to="item.router" class="mx-auto">

                <v-btn class="ma-2 router-button"
                       :class="{ 'active' : item.active === true}"
                       x-large
                       rounded
                       depressed
                       v-bind:outlined="item.active!==true"
                       v-bind:color="item.active === true ? '#828282' : ''"
                       v-on:click="changeActive(item.name)"
                       @click="changeCurrentPage(item.name)"
                >
                    <v-icon left
                            v-bind:color="item.active === true ? 'white' : '#828282'"
                    >
                        {{item.icon}}
                    </v-icon>
                    <span :class="{ 'active-text' : item.active === true}">
                        {{item.name}}
                    </span>

                </v-btn>

            </router-link>

        </div>

        <div class="d-flex flex-row mx-auto social-link justify-space-around mb-5">
            <a
                    v-for="link in links"
                    :key="link.name"
                    :href="link.href"
                    :target="link.target"
                    rel="noopener noreferrer">
                <v-icon large color="white darken-2">{{ link.icon }}</v-icon>
            </a>
        </div>

        <img class="bottom-background" src="../assets/bot-background.svg"/>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "SideBar",
        computed: {
            router () {
                return this.$store.state.router
            }
        },
        data: () => ({
            links: [
                {
                    name: "facebook",
                    href: "http://fb.com",
                    target: "_blank",
                    icon: 'mdi-facebook'
                },
                {
                    name: "github",
                    href: "https://www.github.com/qngnud/project-a",
                    target: "_blank",
                    icon: 'mdi-github-circle'
                },
                {
                    name: "twitter",
                    href: "https://www.twitter.com",
                    target: "_blank",
                    icon: 'mdi-twitter'
                }
            ]
        }),
        methods: {
            changeActive: function (name) {
                for (let i = 0; i < this.router.length; i++) {
                    this.router[i].active = this.router[i].name === name;
                }
            },
            changeCurrentPage: function (name) {
                this.$store.state.currentPage = name;
            }
        }
    }
</script>

<style scoped>
    .bottom-background {
        position: absolute;
        bottom: 0px;
    }

    .logo {
        position: absolute;
        top: 50px;
        left: 20px;
    }

    .social-link {
        position: absolute;
        bottom: 0;
        z-index: 2;
    }

    .active {
        background: linear-gradient(90deg, #C84E89 0%, #F15F79 100%);
    }

    .active-text {
        color: white;
    }

    a {
        text-decoration: none;
    }

    .router-button {
        width: 200px;
    }

    .social-link {
        width: 350px;
    }
</style>