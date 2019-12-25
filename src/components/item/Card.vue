<template>
    <v-hover v-slot:default="{ hover }"
    >
        <v-card
                class="mx-auto"
                width="200px"
                dark
                :color="this.props.color"
                :elevation="hover ? 12 : 2"
        >
            <v-img
                    class="align-end"
                    height="150px"
                    :src="this.props.image"
            >
            </v-img>
            <v-card-title class="headline">{{this.props.name}}</v-card-title>
            <v-card-subtitle>phien am</v-card-subtitle>

            <v-card-actions>
                <v-btn class="mx-auto"
                       fab
                       text
                       @click="playSound(this.props.sound)"
                >
                    <v-icon large>mdi-play-circle-outline</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: "Card",
        data: () => ({

        }),
        methods: {
            playSound(url) {
                if (url) {
                    let audio = new Audio(url)
                    audio.play();
                }
            },
        }
    }
</script>

<style scoped>

</style>
