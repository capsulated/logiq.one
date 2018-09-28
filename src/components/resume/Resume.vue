<template>
    <div id="page-top">

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Nick Romanov</span>
                <span class="d-none d-lg-block">
              <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./img/romano.png" alt="">
            </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#about" v-on:click="sectionClick">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#experience" v-on:click="sectionClick">Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#education" v-on:click="sectionClick">Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#skills" v-on:click="sectionClick">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#interests" v-on:click="sectionClick">Interests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#awards" v-on:click="sectionClick">Awards</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container-fluid p-0">

            <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div class="my-auto">
                    <h1 class="mb-0">Nick
                        <span class="text-primary">Romanov</span>
                    </h1>
                    <div class="subheading mb-5">Full Stack Web Developer · Golang / Vue.js · +7 (963) 711-8179 ·
                        <a href="mailto:romanov.aero@gmail.com">romanov.aero@gmail.com</a>
                    </div>
                    <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis
                        for high level overviews. Iterative approaches to corporate strategy foster collaborative
                        thinking to further the overall value proposition.</p>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/in/nikita-romanov-34100430/" target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/logiqone" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>

                        <a href="https://twitter.com/RomanovNikita1" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>

                    </div>
                </div>
            </section>

            <hr class="m-0">

            <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div class="my-auto">
                    <h2 class="mb-5">Experience</h2>

                    <div class="resume-item d-flex flex-column flex-md-row mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">Company Owner</h3>
                            <div class="subheading mb-3">Logiq.one Web Laboratory
                                <a href="http://logiq.one/" target="_blank">www.logiq.one</a>
                            </div>
                            <p>Clients:</p>
                            <ul>
                                <li>
                                    <a href="http://gamma-it.com" target="_blank">Gamma Group</a>,
                                    server, network and mining equipment supplier.
                                    Stack of technologies: Python / Django, REST-API, JS, JQuery, ajax, bootstrap.
                                </li>

                                <li>
                                    <a href="http://original-knife.ru" target="_blank">Original Knife</a>, online shop
                                    knives for knife supplier,
                                    Stack of technologies: PHP yii + yii2, js, jquery, ajax
                                </li>

                                <li>
                                    <a href="http://loveme-collection.ru" target="_blank">Iolite</a>,
                                    jewelry manufacturer.
                                    Stack of technologies: PHP, js, jquery, ajax.
                                </li>
                            </ul>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">June 2011 - Present</span>
                        </div>
                    </div>

                    <div class="resume-item d-flex flex-column flex-md-row mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">Golang Developer</h3>
                            <div class="subheading mb-3">Binatex
                                <a href="https://binatex.com" target="_blank">www.binatex.com</a>
                            </div>
                            <p>
                               Development of binary options trading platform on golang
                                microservices with rabbitMQ, PostgreSQL and Tarantool .</p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">June 2017 — April 2018</span>
                        </div>
                    </div>

                    <div class="resume-item d-flex flex-column flex-md-row mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">Team Lead / PHP,JS Web Developer</h3>
                            <div class="subheading mb-3">
                                Adnow Native Advertising
                                <a href="https://adnow.com" target="_blank">www.adnow.com</a>
                            </div>
                            <p>Development / support of advertising networks of the holding, which deals with the advertising business,
                                namely RTB advertising (banners, teasers and others). Development and modification of many different RTB
                                systems: SSP, DSP, advertising exchanges, advertising networks, management systems of all this and much
                                more.
                            </p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">June 2016 — June 2017</span>
                        </div>
                    </div>


                    <div class="resume-item d-flex flex-column flex-md-row  mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">Senior Lecturer</h3>
                            <div class="subheading mb-3">Moscow State Technical University of Civil Aviation (MSTUCA)
                                <a href="http://www.mstuca.ru" target="_blank">www.mstuca.ru</a>
                            </div>
                            <p>Conducting lectures, seminars, practical and laboratory classes in subjects:
                            </p>
                            <ul>
                                <li>Сourse: Computer networks and telecommunications (OSI, TCP / IP, C ++) by
                                    Andrew S. Tanenbaum, Vrije Universiteit Amsterdam, The Netherlands.</li>
                                <li>Computer graphics (C ++)</li>
                                <li>Design and technological support of production.</li>
                            </ul>

                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">September 2009 — July 2014</span>
                        </div>
                    </div>


                    <div class="resume-item d-flex flex-column flex-md-row  mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">Senior specialist</h3>
                            <div class="subheading mb-3">Scientific-Technical Center Promtechaero
                                <a href="http://promtehaero.ru/" target="_blank">www.promtehaero.ru</a>
                            </div>
                            <p>
                                Development of outline and technical projects, accompanying documentation
                                on R&D of a aeronautical information database.
                            </p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">December 2010 — June 2014</span>
                        </div>
                    </div>

                    <div class="resume-item d-flex flex-column flex-md-row  mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">First category engineer</h3>
                            <div class="subheading mb-3">State Scientific Research Institute of Air Navigation
                                <a href="http://gosniiga.ru/" target="_blank">www.gosniiga.ru</a><br>
                            </div>
                            <p>
                                Development of a GIS module for a large information database (ASP.NET, Java).<br>
                                Development of a web-based user interface for the information system (HTML, CSS, JavaScript, jQuery)<br>
                            </p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">December 2010 — June 2014</span>
                        </div>
                    </div>

                    <div class="resume-item d-flex flex-column flex-md-row">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">Software Engineer</h3>
                            <div class="subheading mb-3">Sheremetyevo Cargo
                                <a href="https://www.shercargo.ru" target="_blank">www.shercargo.ru</a><br>
                            </div>
                            <p>
                                Development of modules enterprise decision support system (C # and Oracle)
                            </p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">August 2008 — December 2010</span>
                        </div>
                    </div>

                </div>

            </section>

            <hr class="m-0">

            <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div class="my-auto">
                    <h2 class="mb-5">Higher education</h2>

                    <div class="resume-item d-flex flex-column flex-md-row mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">
                                Moscow State Technical University of Civil Aviation
                                <a href="http://www.mstuca.ru" target="_blank" rel="noopener">www.mstuca.ru</a><br>
                            </h3>
                            <div class="subheading mb-3">Ph.D. Applicant</div>
                            <div>
                                Department of Production Management.
                                Faculty of Computing Machines, Systems, Complexes and Networks.
                            </div>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">November 2016 - Present</span>
                        </div>
                    </div>

                    <div class="resume-item d-flex flex-column flex-md-row mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">
                                Moscow State Technical University of Civil Aviation
                                <a href="http://www.mstuca.ru" target="_blank">www.mstuca.ru</a><br>
                            </h3>
                            <div class="subheading mb-3">Specialist</div>
                            <div>
                                Department of Applied Mathematics and Computer Engineering,
                                Faculty of Computing Machines, Systems, Complexes and Networks.
                            </div>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">August 2002 - May 2008</span>
                        </div>
                    </div>

                </div>
            </section>

            <hr class="m-0">

            <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div class="my-auto">
                    <h2 class="mb-5">Skills</h2>

                    <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item">
                            <img height="32px" src="../../assets/icn-golang-grey.svg" style="position: relative; top: -5px;" />
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-vuejs"></i>
                        </li>
                        <li class="list-inline-item">
                            <img width="40px" src="../../assets/postgresql-inc.svg" style="position: relative; top: -5px;" />
                        </li>
                        <li class="list-inline-item">
                            <img width="32px" src="../../assets/rabbitmq.svg" style="position: relative; top: -5px;" />
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-html5"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-css3-alt"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-js-square"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-sass"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-npm"></i>
                        </li>
                    </ul>

                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Microservice Architecture
                        </li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Highload
                        </li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            RabbitMQ Queues
                        </li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Single / Multi Page Application
                        </li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Responsive Design
                        </li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Agile Development &amp; Scrum
                        </li>
                    </ul>
                </div>
            </section>

            <hr class="m-0">

            <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
                <div class="my-auto">
                    <h2 class="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an
                        avid skier. During the warmer, I enjoy mountain biking, kayaking. Throughout the year, I also
                        practice taekwondo and yoga.</p>
                    <p class="mb-0">When forced indoors, I'm fond of painting and music creation, and I spend a large
                        amount of my free time exploring the latest technology advancements in the web development
                        world, also in the field of science technologies.</p>
                </div>
            </section>

            <hr class="m-0">

            <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
                <div class="my-auto">
                    <h2 class="mb-5">Certifications</h2>
                    <ul class="fa-ul mb-0">
                        <li>
                            <i class="fa-li fa fa-trophy text-warning"></i>
                            Development Go web-services - the basics of the language
                            <a href="https://www.coursera.org/account/accomplishments/verify/868RLXQRVB3U"
                               target="_blank">Coursera Certificate</a>
                        </li>
                        <li>
                            <i class="fa-li fa fa-trophy text-warning"></i>
                            The Ultimate Vue 2 Crash Course - Learn by Example
                            <a href="http://ude.my/UC-QW89EBBW/" target="_blank">Udemy Certificate</a>
                        </li>
                    </ul>
                </div>
            </section>

        </div>

    </div>

</template>

<!--<div class="container">-->
<!--<div class="row">-->
<!--<div class="col-xs-12">-->
<!--<img alt="I am" src="../../assets/photo.png">-->
<!--<div class="hello">-->
<!--<h1>{{ msg }}</h1>-->
<!--<h2>Remote Golang and Vue.js web developer</h2>-->
<!--<p>Male, 33 years, born on 29 July 1985</p>-->

<!--<h3>Preferred Skills</h3>-->
<!--<p>-->
<!--<b>Sphere:</b> Web development, Data Structures, System Architecture<br>-->
<!--<b>Technologies:</b> Golang, GRPC, Protobuf, Vue.js, Nuxt.js, Git, Linux, Highload, RabbitMQ, JavaScript,-->
<!--HTML, CSS, TCP/IP, PostgreSQL, Tarantool<br>-->
<!--</p>-->

<!--<h3>Essential Links</h3>-->
<!--<ul>-->
<!--<li><a href="https://gitlab.com/logiq.tech" target="_blank" rel="noopener">Gitlab</a></li>-->
<!--<li><a href="https://github.com/logiqone" target="_blank" rel="noopener">Github</a></li>-->
<!--</ul>-->

<!--<h3>Contacts</h3>-->
<!--<p>-->
<!--Mobile / WatsApp / Viber / Telegram <b>+7 (963) 711-81-79</b><br>-->
<!--Telegram <b>@logiqone</b><br>-->
<!--Skype <b>nikita_sirius</b><br>-->
<!--<a href="https://www.linkedin.com/in/nikita-romanov-34100430" target="_blank"-->
<!--rel="noopener">LinkedIn</a><br>-->
<!--<a href="https://hh.ru/resume/b5e535ffff023e723a0039ed1f657161473155" target="_blank" rel="noopener">Head-->
<!--Hunters</a><br>-->
<!--</p>-->

<!--<br>-->
<!--<h2>Work experience 14 years 4 months:</h2>-->


<!--<h2>Logiq.One</h2>-->
<!--<a href="#" target="_blank" rel="noopener">logiq.one</a><br>-->
<!--<p>-->
<!--<b>June 2011 — until now</b><br>-->
<!--Company Owner<br>-->
<!--Web development<br><br>-->
<!--Clients:<br><br>-->
<!--<a href="http://gamma-it.com" target="_blank" rel="noopener">Gamma Group</a><br>-->
<!--Python django, REST API, js, jquery, ajax, bootstrap<br><br>-->

<!--<a href="http://loveme-collection.ru" target="_blank" rel="noopener">Iolite</a><br>-->
<!--PHP, js, jquery, ajax<br><br>-->

<!--<a href="http://original-knife.ru" target="_blank" rel="noopener">Original-Knife</a><br>-->
<!--PHP yii + yii2, js, jquery, ajax<br><br>-->
<!--</p>-->

<!--<h3>Full-time experience:</h3>-->

<!--<h2>Binatex</h2>-->
<!--<a href="https://binatex.com" target="_blank">binatex.com</a><br>-->
<!--<p>-->
<!--<b>June 2017 — April 2018</b><br>-->
<!--Golang Developer<br>-->
<!--Binary options trading<br><br>-->
<!--Development of binary options trading platform on golang microservices with rabbitMQ, PostgreSQL and-->
<!--Tarantool.-->
<!--</p>-->

<!--<h2>Adnow</h2>-->
<!--<a href="https://adnow.com" target="_blank" rel="noopener">adnow.com</a><br>-->
<!--<p>-->
<!--<b>June 2016 — June 2017</b><br>-->
<!--PHP,JS Web Development / Team Lead<br>-->
<!--Native Advertising Network<br><br>-->
<!--Development / support of advertising networks of the holding, which deals with the advertising business,-->
<!--namely RTB advertising (banners, teasers and others). Development and modification of many different RTB-->
<!--systems: SSP, DSP, advertising exchanges, advertising networks, management systems of all this and much-->
<!--more.-->
<!--</p>-->

<!--<h2>c</h2>-->
<!--<a href="http://www.mstuca.ru" target="_blank" rel="noopener">mstuca.ru</a><br>-->
<!--<p>-->
<!--<b>September 2009 — July 2014</b><br>-->
<!--Senior Lecturer<br><br>-->
<!--Conducting lectures, seminars, practical and laboratory classes in subjects:<br>-->
<!--Computer networks and telecommunications (OSI, TCP / IP, C ++) (ANDREW S. TANENBAUM Vrije Universiteit-->
<!--Amsterdam, The Netherlands DAVID J. WETHERALL)<br>-->
<!--Computer graphics (C ++)<br>-->
<!--Design and technological support of production.<br>-->
<!--</p>-->

<!--<h2>Scientific-Technical Center Promtechaero</h2>-->
<!--<a href="http://promtehaero.ru/" target="_blank" rel="noopener">promtehaero.ru</a><br>-->
<!--<p>-->
<!--<b>December 2010 — June 2014</b><br>-->
<!--Senior specialist<br><br>-->
<!--Development of outline and technical projects, accompanying documentation on R&D of a aeronautical-->
<!--information database.-->
<!--</p>-->

<!--<h2>State Scientific Research Institute of Air Navigation</h2>-->
<!--<a href="http://gosniiga.ru/" target="_blank" rel="noopener">gosniiga.ru</a><br>-->
<!--<p>-->
<!--<b>August 2008 — December 2010</b><br>-->
<!--First category engineer<br><br>-->
<!--Development of a GIS module for a large information database (ASP.NET, Java).<br>-->
<!--Development of a web-based user interface for the information system (HTML, CSS, JavaScript, jQuery)<br>-->
<!--</p>-->

<!--<h2>Sheremetyevo Сargo</h2>-->
<!--<a href="https://www.shercargo.ru" target="_blank" rel="noopener">shercargo.ru</a><br>-->
<!--<p>-->
<!--<b>August 2008 — December 2010</b><br>-->
<!--Software Engineer<br>-->
<!--Airfreights<br><br>-->
<!--Development of modules of enterprise decision support system (C # and Oracle)-->
<!--</p>-->
<!--<br>-->

<!--<h1>Higher education</h1>-->
<!--<h2>Moscow State Technical University of Civil Aviation</h2>-->
<!--<a href="http://www.mstuca.ru" target="_blank" rel="noopener">mstuca.ru</a><br>-->
<!--<p>-->
<!--<b>2018</b><br>-->
<!--Applied Mathematics and Computer Engineering, <b>Degree Applicant</b><br>-->
<!--</p>-->
<!--<p>-->
<!--<b>2008</b><br>-->
<!--Applied Mathematics and Computer Engineering, Computing machines, complexes, systems and networks, <b>Specialist</b><br>-->
<!--</p>-->
<!--<br>-->

<!--<h1>About me</h1>-->
<!--<p>I love active leisure, in my spare time I'm fond of writing electronic music.</p>-->

<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->

<!-- Custom scripts for this template -->
<script>
  import $ from 'jquery';
  require('jquery.easing');

  export default {
    name: 'Resume',
    created() {
      this.addMenuClick();
    },
    methods: {
      sectionClick: function(e) {
        let target = e.target;
        let destination = $('#' + target.getAttribute('href').substring(1));
        if (destination.length) {
          $('html, body').animate({
            scrollTop: (destination.offset().top)
          }, 1000, "easeInOutExpo");
          e.preventDefault();
          return false;
        }
      },
      addMenuClick() {
        $('.js-scroll-trigger').click(function () {
          $('.navbar-collapse').collapse('hide');
        });
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "./vendor/bootstrap/css/bootstrap.min.css";
    @import "./vendor/fontawesome-free/css/all.min.css";
    @import "./scss/resume.scss";
</style>
