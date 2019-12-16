<template>
    <v-content>
        <v-container fluid>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col cols="10">
                    <v-row v-if="layout === 'grid'" class="grid d-flex flex-row justify-lg-space-between">
                        <v-col
                                cols="12"
                                md="4"
                                v-for="item in articles"
                                :key="item.id"
                        >
                            <v-card
                                    class="mx-auto"
                                    max-width="250"
                                    min-height="300"
                            >
                                <v-img
                                        class="align-end"
                                        height="150px"
                                        :src="item.image.large"
                                >
                                </v-img>
                                <v-card-title>{{item.title}}</v-card-title>

                                <v-card-actions>
                                    <v-btn
                                            color="orange"
                                            icon
                                            class="mx-auto"
                                    >
                                        <v-icon>mdi-play-circle-outline</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row v-if="layout === 'list'" class="list d-flex flex-column justify-lg-space-between">
                        <v-col
                                cols="12"
                                md="12"
                                v-for="item in articles"
                                :key="item.id"
                        >
                            <v-card
                                    class="mx-auto d-flex flex-row justify-space-between"
                            >
                                <v-img
                                        class="align-end"
                                        width="50px"
                                        height="150px"
                                        :src="item.image.large"
                                >
                                </v-img>
                                <v-card-title>{{item.title}}</v-card-title>

                                <v-card-actions>
                                    <v-btn
                                            color="orange"
                                            icon
                                            class="mx-auto"
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
    export default {
        name: "Home",
        data: () => ({
            layout: 'list',
            articles: [
                {
                    id: 1,
                    title: "What You Need To Know About CSS Variables",
                    url: "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
                    image: {
                        large: "https://tutorialzine.com/media/2016/03/css-variables.jpg",
                        small: "https://tutorialzine.com/media/2016/03/css-variables.jpg"
                    }
                },
                {
                    id: 2,
                    title: "Freebie: 4 Great Looking Pricing Tables",
                    url: "https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
                    image: {
                        large: "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg",
                        small: "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg"
                    }
                },
                {
                    id: 3,
                    title: "20 Interesting JavaScript and CSS Libraries for February 2016",
                    url: "https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
                    image: {
                        large: "https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg",
                        small: "https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg"
                    }
                },
                {
                    id: 4,
                    title: "Quick Tip: The Easiest Way To Make Responsive Headers",
                    url: "https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
                    image: {
                        large: "https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png",
                        small: "https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png"
                    }
                },
                {
                    id: 5,
                    title: "Learn SQL In 20 Minutes",
                    url: "https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
                    image: {
                        large: "https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png",
                        small: "https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png"
                    }
                },
                {
                    id: 6,
                    title: "Creating Your First Desktop App With HTML, JS and Electron",
                    url: "https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
                    image: {
                        large: "https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png",
                        small: "https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png"
                    }
                }
            ]
        })
    }
</script>

<style scoped>

</style>