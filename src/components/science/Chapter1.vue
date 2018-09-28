<template>
    <div class="page">
        <div class="container">
            Chapter 1
            <nav>
                <router-link class="custon-nav-link" to="/">Главная</router-link>
                <router-link class="custon-nav-link" to="/science/">Статья к Публикации</router-link>
                <router-link class="custon-nav-link" to="/science/abstract">Автореферат</router-link>
                <router-link class="custon-nav-link" to="/science/сhapter-1">Глава 1</router-link>
                <router-link class="custon-nav-link" to="/science/сhapter-2">Глава 2</router-link>
                <router-link class="custon-nav-link" to="/science/сhapter-3">Глава 3</router-link>
                <router-link class="custon-nav-link" to="/science/сhapter-4">Глава 4</router-link>
            </nav>
            <router-view />
        </div>
    </div>
</template>

<script>
  export default {
    name: "Chapter1"
  }
</script>

<style scoped>
    .page {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        color: #35495e;
    }

    .container {
        width: 1280px;
        margin: 0 auto 0 auto;
    }

    h1 {
        margin: 25px 0;
        font-family: "Ubuntu", sans-serif;
        color: #35495e;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
    }

    h2 {
        font-family: "Ubuntu", sans-serif;
        color: #35495e;
        margin: 5px 0 25px 0;
        font-weight: 400;
        font-size: 22px;
        text-transform: none;
    }

    h3 {
        font-family: "Ubuntu", sans-serif;
        color: #35495e;
        margin: 5px 0 15px 0;
        font-weight: 400;
        font-size: 20px;
        text-transform: none;
    }

    p {
        font-family: "Ubuntu", sans-serif;
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 25px;
    }


    nav {
        margin-top: 20px;
        font-size: 16px;
    }

    .custon-nav-link {
        padding-right: 30px;
        display: inline-block;
    }
</style>