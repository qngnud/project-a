<template>
    <v-content>
        <v-container fluid>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col cols="10">

                    <v-row v-if="this.$store.state.layout === 'grid'"
                           class="grid d-flex flex-row justify-space-between">
                        <v-col
                                cols="12"
                                md="3"
                                v-for="item in data"
                                :key="item.id"
                        >

                            <v-card
                                    class="mx-auto"
                                    max-width="250"
                                    max-height="300px"
                                    shaped
                                    dark
                                    :color="item.bgColor"
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
                        </v-col>
                    </v-row>

                    <v-row v-if="this.$store.state.layout === 'list'"
                           class="list d-flex flex-column justify-lg-space-between">
                        <v-col
                                cols="12"
                                md="12"
                                v-for="item in data"
                                :key="item.id"
                        >
                            <v-card
                                    class="mx-auto d-flex flex-row justify-space-between"
                                    dark
                                    :color="item.bgColor"
                                    max-height="250px"
                                    shaped
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
                        </v-col>
                        <infinite-loading @infinite="infiniteHandler"/>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-content>

</template>

<script>
    import axios from 'axios'
    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        name: "Home",
        components: {
            InfiniteLoading
        },
        data: () => ({
            data: [],
            errors: '',
            page: 1,
        }),
        // mounted() {
        //     this.getData()
        // },
        methods: {
            playSound(url) {
                if (url) {
                    let audio = new Audio(url)
                    audio.play();
                }

            },
            infiniteHandler($state) {
                axios.get('http://localhost:3000/app', {
                    params: {
                        page: this.page,
                    },
                }).then(({response}) => {
                    if (response.Data.length) {
                        this.page += 1;
                        this.data.push(...response.Data);
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