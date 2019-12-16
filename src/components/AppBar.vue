<template>
    <v-app-bar
            app
            prominent
            extended
            flat
    >
        <v-toolbar-title color="primary"><span class="grey--text text--darken-2">Main content</span></v-toolbar-title>

        <v-spacer/>

        <div class="toggle-group">
            <v-btn icon color="black" v-bind:class="{ 'active': layout === 'list'}" v-on:click="layout = 'list'">
                <v-icon>mdi-view-list</v-icon>
            </v-btn>

            <v-btn icon color="black" v-bind:class="{ 'active': layout === 'grid'}" v-on:click="layout = 'grid'">
                <v-icon>mdi-apps</v-icon>
            </v-btn>
        </div>

    </v-app-bar>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                layout: 'grid'
            }
        }
    }
</script>

<style scoped>
    .toggle-group{
        position: absolute;
        top: 50%;
        right: 5%;
    }
</style>