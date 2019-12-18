<template>
    <v-footer
            :inset="true"
            app
    >
        <v-spacer/>
        <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>