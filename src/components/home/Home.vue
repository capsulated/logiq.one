<template>
    <div class="container">
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

<style scoped>
    .custon-nav-link {
        padding: 10px;
        display: inline-block;
    }
</style>