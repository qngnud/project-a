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
                                    <v-card-title class="headline">{{item.name}}</v-card-title>
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
                                            <v-card-text>{{item.detail}}</v-card-text>
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

    const api = 'http://localhost:3000/getTags';

    export default {
        name: "Home",
        components: {
            InfiniteLoading
        },
        data: () => ({
            list: [],
            errors: '',
            page: 1,
        }),
        methods: {
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
