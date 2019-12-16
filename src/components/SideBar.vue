<template>
    <v-navigation-drawer
            app
            flat
            floating
            width="350px"
            class="navigation-drawer"

    >
        <img class="logo" src="../assets/logo.svg"/>
        <img src="../assets/top-background.svg"/>

        <div class="d-flex flex-column justify-space-around mx-auto">

            <router-link v-for="item in router" :key="item.icon" :to="item.router" class="mx-auto">

                <v-btn v-if="item.active === true" class="ma-2 active router-button" x-large rounded>
                    <v-icon left color="white">{{item.icon}}</v-icon>
                    <span class="active-text">{{item.name}}</span>
                </v-btn>

                <v-btn v-if="item.active === false" class="ma-2 router-button" x-large rounded outlined color="#828282">
                    <v-icon left color="#828282">{{item.icon}}</v-icon>
                    <span>{{item.name}}</span>
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
        data: () => ({
            router: [
                {
                    icon: 'mdi-home',
                    name: 'Home',
                    router: '/',
                    active: true
                },
                {
                    icon: 'mdi-compass',
                    name: 'Explore',
                    router: '/explore',
                    active: false
                },
                {
                    icon: 'mdi-share',
                    name: 'Share',
                    router: '/share',
                    active: false
                },
                {
                    icon: 'mdi-home',
                    name: 'Feedback',
                    router: '/feedback',
                    active: false
                }
            ],
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
        methods: {}
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