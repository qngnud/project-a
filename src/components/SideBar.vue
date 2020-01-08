<template>
    <v-navigation-drawer
            app
            flat
            permanent
    >
        <v-list-item
                class="pt-2"
        >
            <v-list-item-content>
                <v-list-item-title
                        class="title"
                >
                    Brand
                </v-list-item-title>
                <v-list-item-subtitle>
                    Did you pronounce it correctly?
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>


        <v-list>
            <router-link to="/" class="nav-link">
                <v-list-item
                        link
                        :class="[currentPage !== '/' ? '' : activeClass, 'nav-item']"
                >
                    <v-list-item-icon
                    >
                        <v-icon
                                v-bind:color="currentPage === '/' ? 'white' : ''"
                        >
                            mdi-home
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content
                            v-bind:class="[currentPage !== '/' ? 'grey--text' : 'white--text']"
                    >
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link to="/explore" class="nav-link">
                <v-list-item
                        link
                        :class="[currentPage.includes('explore') ? activeClass : '', 'nav-item']"
                >
                    <v-list-item-icon
                    >
                        <v-icon
                                v-bind:color="currentPage === '/explore' ? 'white' : ''"
                        >
                            mdi-compass
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content
                            v-bind:class="[currentPage.includes('explore') ? 'white--text' : 'grey--text' ]"
                    >
                        <v-list-item-title>Explore</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link to="/share" class="nav-link">
                <v-list-item
                        link
                        :class="[currentPage.includes('share') ? activeClass : '', 'nav-item']"
                >
                    <v-list-item-icon
                    >
                        <v-icon
                                v-bind:color="currentPage === '/share' ? 'white' : ''"
                        >
                            mdi-share
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content
                            v-bind:class="[currentPage.includes('share') ? 'white--text' : 'grey--text' ]"
                    >
                        <v-list-item-title>Share</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link to="/feedback" class="nav-link">
                <v-list-item
                        link
                        :class="[currentPage.includes('feedback') ? activeClass : '', 'nav-item']"
                >
                    <v-list-item-icon
                    >
                        <v-icon
                                v-bind:color="currentPage === '/feedback' ? 'white' : ''"
                        >
                            mdi-message
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content
                            v-bind:class="[currentPage.includes('feedback') ? 'white--text' : 'grey--text' ]"
                    >
                        <v-list-item-title>Feedback</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>

        </v-list>


        <template v-slot:append>
            <div class="d-flex mx-auto justify-space-around mb-5 mx-auto"
            >
                <a
                        class="mx-auto"
                        v-for="link in links"
                        :key="link.name"
                        :href="link.href"
                        :target="link.target"
                        rel="noopener noreferrer">
                    <v-icon large class="social-icon">{{ link.icon }}</v-icon>
                </a>
            </div>
        </template>

    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "SideBar",
        data: () => ({
            model: null,
            activeClass: 'active',
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
        //TODO still bug
        computed: {
            currentPage() {
                return this.$route.path;
            }
        },
        methods: {
            changeCurrentPage: function (name) {
                this.$store.state.currentPage = name;
            }
        }
    }
</script>

<style scoped>
    .active {
        background: linear-gradient(90deg, #C84E89 0%, #F15F79 100%);
    }

    .social-icon {
        color: #F15F79;
    }

    .router-link-active {
        opacity: 1;
        visibility: visible;
        background: linear-gradient(90deg, #C84E89 0%, #F15F79 100%);
        color: white;
        transition: all 0.25s;
    }

    .active {
        opacity: 1;
        visibility: visible;
        background: linear-gradient(90deg, #C84E89 0%, #F15F79 100%);
        color: white;
        transition: all 0.25s;
    }

    .active-text {
        color: white;
    }

    a {
        text-decoration: none;
    }
</style>
