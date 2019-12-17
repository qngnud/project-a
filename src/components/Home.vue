<template>
    <v-content>
        <v-container fluid>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col cols="10">
                    <v-row v-if="this.$store.state.layout === 'grid'"
                           class="grid d-flex flex-row justify-lg-space-between">
                        <v-col
                                cols="12"
                                md="4"
                                v-for="item in data"
                                :key="item.id"
                        >

                            <v-card
                                    class="mx-auto"
                                    max-width="250"
                                    min-height="300"
                                    shaped
                                    :color="item.bgColor"
                            >
                                <v-img
                                        class="align-end"
                                        height="150px"
                                        :src="item.linkImage"
                                >
                                </v-img>
                                <v-card-title>{{item.name}}</v-card-title>

                                <v-card-actions>
                                    <v-btn class="mb-5 mx-auto"
                                           fab
                                           dark
                                           @click="playSound(item.linkSound)"
                                    >
                                        <v-icon>mdi-play-circle-outline</v-icon>
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
                            >
                                <v-img
                                        class="align-end"
                                        width="50px"
                                        height="150px"
                                        :src="item.linkImage"
                                >
                                </v-img>
                                <v-card-title>{{item.title}}</v-card-title>


                                <v-card-actions>

                                    <v-btn
                                            color="orange"
                                            icon
                                            class="mx-auto"
                                            @click="playSound('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')"
                                    >
                                        <v-icon>mdi-play-circle-outline</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-content>

</template>

<script>
    import axios from 'axios'

    export default {
        name: "Home",
        data: () => ({
            layout: 'list',
            data: Array,
            errors: ''
        }),
        mounted() {
            axios.get('http://localhost:3000/app')
                .then(response => {
                        this.error = '';
                        this.data = response.data.Data;
                    }
                )
                .catch(e => {
                        this.errors.push(e);
                    }
                )
        },
        methods: {
            playSound(url) {
                if (url) {
                    let audio = new Audio(url)
                    audio.play();
                }

            }
        }
    }
</script>

<style scoped>

</style>