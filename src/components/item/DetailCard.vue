<template>
    <v-hover v-slot:default="{ hover }"
             v-if="this.props.detail === true"
    >
        <v-card
                class="mx-auto"
                dark
                :color="this.props.bgColor"
                :elevation="hover ? 12 : 2"
                @click="this.props.expandDetail"
        >
            <v-img
                    class="align-end"
                    :src="this.props.linkImage"
            >
            </v-img>
            <v-card-title class="headline">{{this.props.name}}</v-card-title>
            <v-card-subtitle>phien am</v-card-subtitle>

            <v-card-actions>
                <v-btn class="mx-auto"
                       fab
                       text
                       @click="this.props.playSound"
                >
                    <v-icon large>mdi-play-circle-outline</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: "DetailCard"
    }
</script>

<style scoped>

</style>
