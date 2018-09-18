<template>
    <div class="container">
        <h1>Logiq.One Web Laboratory</h1>
        <nav>
            <router-link class="custon-nav-link" to="/">Home</router-link>
            <router-link class="custon-nav-link" to="/science">Science</router-link>
            <router-link class="custon-nav-link" to="/resume">Resume</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
    export default {
      data: function() {
        return {

        }
      }
    }
</script>

<style lang="scss" scoped>
    h1 {
        margin-top: 50px;
    }
    .container {
        nav {
            margin-top: 20px;
            font-size: 20px;
        }
    }
    .custon-nav-link {
        padding-right: 30px;
        display: inline-block;
    }
</style>