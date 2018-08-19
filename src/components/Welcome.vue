<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Remote Golang and Vue.js web developer</h2>
    <p>Male, 33 years, born on 29 July 1985</p>

    <h3>Preffered Skills</h3>
    <p>
      <b>Sphere:</b> Web development, Data Structures, System Architecture<br>
      <b>Technologies:</b> Golang, Vue.js, Nuxt.js, Git, Linux, Highload, RabbitMQ, JavaScript, HTML, CSS, TCP/IP, PostgreSQL, Tarantool<br>
    </p>

    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://gitlab.com/logiq.tech" target="_blank" rel="noopener">Gitlab</a></li>
      <li><a href="https://github.com/logiqone" target="_blank" rel="noopener">Github</a></li>
    </ul>

    <h3>Contacts</h3>
    <p>
      Mobile / WatsApp / Viber / Telegram <b>+7 (963) 711-81-79</b><br>
      Telegram <b>@logiqone</b><br>
      Skype <b>nikita_sirius</b><br>
      <a href="https://www.linkedin.com/in/nikita-romanov-34100430" target="_blank" rel="noopener">LinkedIn</a><br>
      <a href="https://hh.ru/resume/b5e535ffff023e723a0039ed1f657161473155" target="_blank" rel="noopener">Head Hunters</a><br>
    </p>

    <br>
    <h2>Work experience 14 years 4 months:</h2>


    <h2>Logiq.One</h2>
    <a href="#" target="_blank" rel="noopener">logiq.one</a><br>
    <p>
      <b>June 2011 — until now</b><br>
      Company Owner<br>
      Web development<br><br>
      Clients:<br><br>
      <a href="http://gamma-it.com" target="_blank" rel="noopener">Gamma Group</a><br>
      Python django, REST API, js, jquery, ajax, bootstrap<br><br>

      <a href="http://loveme-collection.ru" target="_blank" rel="noopener">Iolite</a><br>
      PHP, js, jquery, ajax<br><br>

      <a href="http://original-knife.ru" target="_blank" rel="noopener">Original-Knife</a><br>
      PHP yii + yii2, js, jquery, ajax<br><br>
    </p>

    <h3>Full-time experience:</h3>

    <h2>Binatex</h2>
    <a href="https://binatex.com" target="_blank" rel="noopener">binatex.com</a><br>
    <p>
      <b>June 2017 — April 2018</b><br>
      Golang Developer<br>
      Binary options trading<br><br>
      Development of binary options trading platform on golang microservices with rabbitMQ, PostgreSQL and Tarantool.
    </p>

    <h2>Adnow</h2>
    <a href="https://adnow.com" target="_blank" rel="noopener">adnow.com</a><br>
    <p>
      <b>June 2016 — June 2017</b><br>
      PHP,JS Web Development / Team Lead<br>
      Native Advertising Network<br><br>
      Development / support of advertising networks of the holding, which deals with the advertising business, namely RTB advertising (banners, teasers and others). Development and modification of many different RTB systems: SSP, DSP, advertising exchanges, advertising networks, management systems of all this and much more.
    </p>

    <h2>Moscow State Technical University of Civil Aviation (MSTUCA)</h2>
    <a href="http://www.mstuca.ru" target="_blank" rel="noopener">mstuca.ru</a><br>
    <p>
      <b>September 2009 — July 2014</b><br>
      Senior Lecturer<br><br>
      Conducting lectures, seminars, practical and laboratory classes in subjects:<br>
      Computer networks and telecommunications (OSI, TCP / IP, C ++) (ANDREW S. TANENBAUM Vrije Universiteit Amsterdam, The Netherlands DAVID J. WETHERALL)<br>
      Computer graphics (C ++)<br>
      Design and technological support of production.<br>
    </p>

    <h2>Scientific-Technical Center Promtechaero</h2>
    <a href="http://promtehaero.ru/" target="_blank" rel="noopener">promtehaero.ru</a><br>
    <p>
      <b>December 2010 — June 2014</b><br>
      Senior specialist<br><br>
      Development of outline and technical projects, accompanying documentation on R&D of a aeronautical information database.
    </p>

    <h2>State Scientific Research Institute of Air Navigation</h2>
    <a href="http://gosniiga.ru/" target="_blank" rel="noopener">gosniiga.ru</a><br>
    <p>
      <b>August 2008 — December 2010</b><br>
      First category engineer<br><br>
      Development of a GIS module for a large information database (ASP.NET, Java).<br>
      Development of a web-based user interface for the information system (HTML, CSS, JavaScript, jQuery)<br>
    </p>

    <h2>Sheremetyevo Сargo</h2>
    <a href="https://www.shercargo.ru" target="_blank" rel="noopener">shercargo.ru</a><br>
    <p>
      <b>August 2008 — December 2010</b><br>
      Software Engineer<br>
      Airfreights<br><br>
      Development of modules of enterprise decision support system (C # and Oracle)
    </p>

  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
