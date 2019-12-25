<template>
    <v-navigation-drawer
            app
            flat
            class="navigation-drawer"
            overflow
            :mini-variant="minivariant"
    >

        <v-list-item
                class="pt-2"
        >

            <v-list-item-content>
                <v-img src="../assets/logo.svg"
                       max-width="50px"
                       max-height="50px"
                       v-if="minivariant"
                />
                <v-list-item-title v-if="!minivariant"
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

            <router-link v-for="item in router" :key="item.icon" :to="item.router">
                <v-list-item
                        link
                        @click="changeCurrentPage(item.name)"
                        v-on:click="changeActive(item.name)"
                        :class="{ 'active' : item.active === true}"
                >
                    <v-list-item-icon

                    >
                        <v-icon
                                v-bind:color="item.active === true ? 'white' : '#828282'"
                        >
                            {{ item.icon }}
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content
                            v-bind:class="item.active === true ? 'white--text' : 'grey--text'"
                    >
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
        </v-list>


        <template v-slot:append>
            <div class="d-flex mx-auto justify-space-around mb-5 mx-auto"
                 :class="minivariant === true ? 'flex-column' : 'flex-row'"
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
        computed: {
            router() {
                return this.$store.state.router
            },
            minivariant() {
                return this.$store.state.miniVariant
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
    .active {
        background: linear-gradient(90deg, #C84E89 0%, #F15F79 100%);
    }

    .social-icon {
        color: #F15F79;
    }

    .active-text {
        color: white;
    }

    a {
        text-decoration: none;
    }
</style>
