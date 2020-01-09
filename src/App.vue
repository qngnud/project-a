<template>
    <v-app id="main-app">
        <SideBar/>
        <AppBar/>

        <router-view/>

        <Footer/>
    </v-app>
</template>

<script>

    import AppBar from "./components/layout/AppBar";
    import SideBar from "./components/layout/SideBar";
    import Footer from "./components/layout/Footer";

    export default {
        name: 'App',
        components: {SideBar, Footer, AppBar}
    };
</script>
