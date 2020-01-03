<template>
    <v-content>
        <v-container fluid>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col cols="10">
                    <v-row v-if="this.$store.state.layout === 'grid'"
                           class="d-flex flex-row"
                    >

                        <v-col
                                v-for="item in list"
                                :key="item.id"
                                class="shrink"
                        >
                            <v-hover v-slot:default="{ hover }"
                            >
                                <v-card
                                        class="mx-auto"
                                        width="200px"
                                        dark
                                        :color="item.bgColor"
                                        :elevation="hover ? 12 : 2"
                                >
                                    <v-img
                                            class="align-end"
                                            height="150px"
                                            :src="item.linkImage"
                                    >
                                    </v-img>
                                    <v-card-title class="headline">{{item.name}}</v-card-title>
                                    <v-card-subtitle>phien am</v-card-subtitle>

                                    <v-card-actions>
                                        <v-btn class="mx-auto"
                                               fab
                                               text
                                               @click="playSound(item.linkSound)"
                                        >
                                            <v-icon large>mdi-play-circle-outline</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-hover>
                        </v-col>

                    </v-row>

                    <v-row v-if="this.$store.state.layout === 'list'"
                           class="list d-flex flex-column justify-lg-space-between">
                        <v-col
                                cols="12"
                                md="12"
                                v-for="item in list"
                                :key="item.id"
                        >
                            <v-hover v-slot:default="{ hover }">
                                <v-card
                                        class="mx-auto d-flex flex-row justify-space-between"
                                        dark
                                        :color="item.bgColor"
                                        max-height="250px"
                                        :elevation="hover ? 12 : 2"
                                >
                                    <v-row>
                                        <v-col cols="12"
                                               md="3"
                                        >
                                            <v-img
                                                    class="align-start"
                                                    width="300px"
                                                    :src="item.linkImage"
                                            >
                                            </v-img>

                                        </v-col>
                                        <v-col
                                                cols="12"
                                                md="8"
                                        >
                                            <v-card-title>{{item.name}}</v-card-title>
                                            <v-card-subtitle>Ahihi</v-card-subtitle>
                                            <v-card-text>{{item.detail}}</v-card-text>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                md="1"
                                        >
                                            <v-card-actions>

                                                <v-btn
                                                        color="white"
                                                        icon
                                                        class="mx-auto my-auto"
                                                        @click="playSound('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')"
                                                >
                                                    <v-icon x-large>mdi-play-circle-outline</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-hover>
                        </v-col>

                    </v-row>

                    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
                </v-col>
            </v-row>

        </v-container>
    </v-content>

</template>

<script>
    import axios from 'axios'
    import InfiniteLoading from 'vue-infinite-loading';

    const api = 'http://localhost:3000/getbrands';

    export default {
        name: "Home",
        components: {
            InfiniteLoading
        },
        data: () => ({
            list: [],
            errors: '',
            page: 1,
            dialog: false
        }),
        methods: {
            playSound(url) {
                if (url) {
                    let audio = new Audio(url)
                    audio.play();
                }
            },
            infiniteHandler($state) {
                axios.get(api, {
                    params: {
                        page: this.page,
                    },
                }).then(({data}) => {
                    if (data.Data.length) {
                        this.page += 1;
                        this.list.push(...data.Data);
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
