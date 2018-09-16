<template>
    <div class="page">
        <div class="container">
            <h1>Имитационная модель исследований</h1>
            <p>Приступим к моделированию: будем подбрасывать игральный кубик. Ниже представлен листинг программирования модели подбрасывания одного кубика (Диаграмма 1). Кубик может принимать одно из шести значений.</p>
            <div id="bar-place">
                <Bar/>
            </div>
        </div>
    </div>
</template>

<script>
  import Bar from './components/BarChart'

  export default {
    name: 'Science',
    components: {
      Bar,
    }
  }

</script>

<style scoped>
    .page {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
    }

    .container {
        position: ;
        width: 1280px;
        margin: 0 auto 0 auto;
    }

    #bar-place {
        width: 450px;
        margin: 50px auto 50px auto;
    }
    h1 {
        font-family: "Ubuntu", sans-serif;
        color: #35495e;
        margin: 5px 0;
        font-weight: 400;
        font-size: 28px;
    }

    p {
        font-family: "Ubuntu", sans-serif;
        font-size: 16px;
        line-height: 28px;
    }
</style>