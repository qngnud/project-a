<template>
    <v-app id="main-app">
        <SideBar/>
        <AppBar/>

        <router-view/>

        <Footer/>
    </v-app>
</template>

<script>

    import AppBar from "./components/AppBar";
    import SideBar from "./components/SideBar";
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        components: {SideBar, Footer, AppBar},
    };
</script>
