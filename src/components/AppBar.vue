<template>
    <v-app-bar
            app
            flat
            hide-on-scroll
            color="#fafafa"
    >
        <v-spacer/>
        <v-text-field
                class="mt-5"
                label="Search"
        />
        <v-spacer/>


        <div class="toggle-group">
            <v-btn icon v-bind:class="{ 'active': layout === 'list'}" v-on:click="changeLayoutToList">
                <v-icon v-bind:class="{ 'white--text' : layout === 'list'}">mdi-view-list</v-icon>
            </v-btn>

            <v-btn icon v-bind:class="{ 'active': layout === 'grid'}" v-on:click="changeLayoutToGrid">
                <v-icon v-bind:class="{ 'white--text' : layout === 'grid'}">mdi-apps</v-icon>
            </v-btn>
        </div>


    </v-app-bar>
</template>

<script>
    export default {
        name: "Sidebar",
        computed: {
            layout() {
                return this.$store.state.layout
            }
        },
        methods: {
            changeLayoutToGrid() {
                this.$store.commit('changeLayoutToGrid')
            },
            changeLayoutToList() {
                this.$store.commit('changeLayoutToList')
            },
            changeMiniVariant() {
                this.$store.commit('changeMiniVariant')
            }
        }
    }
</script>

<style scoped>
    .active {
        background: #F15F79;
    }
</style>
