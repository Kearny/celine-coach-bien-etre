<template>
  <header class="header">
    <div class="topbar">
      <div class="logo">
        <a href="/">Céline coach bien-être</a>
      </div>
    </div>

    <div class="baseline reveal">
      <span class="baseline-welcome reveal-1">Bienvenue</span>
      <strong class="baseline-name reveal-2">Céline Coach bien-être</strong>
      <span class="baseline-slogan reveal-3"
      >Soins - Esthétique - Diagnostic de peau en ligne</span
      >
    </div>
  </header>

  <Welcome/>

  <footer class="footer reveal" id="footer">
    <div class="container">
      <div class="footer-columns">
        <div class="footer-column reveal-1">
          <div class="footer-title">Céline Coach bien-être</div>
          <p>
            <a href="mailto:alexandre.liscia@gmail.com">Alexandre Liscia</a>&nbsp;-&nbsp;Tous droits réservés
          </p>
        </div>

        <div class="footer-column reveal-2">
          <div class="footer-title">Contact info</div>
          <p>
            Saint-Médard-sur-ille<br/>
            <a href="mailto:celinebienetrepositive@gmail.com">celinebienetrepositive@gmail.com</a>
          </p>
        </div>

        <div class="footer-column reveal-3">
          <div class="footer-title">Heures d'ouverture</div>
          <ul>
            <li>Lundi au Vendredi<span class="text-right">09:00 - 19:00</span></li>
            <li>Samedi<span class="text-right">09:00 - 17:00</span></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Welcome from "./components/Welcome.vue";

@Options({
  components: {
    Welcome,
  },
})
export default class App extends Vue {
}
</script>

<style>
.header {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.92),
      rgba(54, 54, 54, 0.5) 39.24%,
      rgba(28, 28, 28, 0.4)
  ),
  url(./assets/banner.jpg) center center / cover no-repeat;
  color: #fff;
}

.topbar {
  padding: 18px 20px;
  font-size: 0.875rem;
  text-transform: uppercase;
  text-align: center;
}

.logo {
  margin-bottom: 15px;
}

.menu-item {
  display: inline-block;
  margin: 0 15px;
}

.menu-item:hover {
  color: #e0b3b9;
}

.button {
  border: solid 1px #e0b3b9;
  padding: 7px 10px;
  transition-property: color, background-color;
  margin-top: 5px;
}

.button:hover {
  background: #e0b3b9;
  color: #fff;
}

.baseline {
  padding: 50px 0 70px 0;
  text-align: center;
  line-height: 1;
}

.baseline-welcome {
  font-family: "Pinyon Script", serif;
  color: #e0b3b9;
  display: block;
  font-size: 2.2rem;
}

.baseline-name {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 5px;
  padding-bottom: 10px;
  text-transform: uppercase;
}

.baseline-slogan {
  font-size: 1rem;
  font-weight: 300;
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.container {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1150px;
}

.footer {
  background: #383838 bottom right no-repeat;
  font-weight: 300;
  color: #fff;
  padding: 40px 0;
}

.footer-title {
  color: #e0b3b9;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1.25em;
}

.footer-column {
  margin-bottom: 2rem;
}

@media only screen and (min-width: 600px) {
  .logo {
    margin-bottom: 0;
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1150px;
    margin: 0 auto;
  }

  .baseline {
    padding: 125px 0 230px;
  }

  .baseline-slogan {
    font-size: 1.5rem;
  }

  .baseline-name {
    font-size: 4.375rem;
    letter-spacing: 12px;
    padding-top: 8px;
    padding-bottom: 18px;
  }

  .baseline-welcome {
    font-size: 3.75rem;
  }

  .button {
    margin-top: 0;
    margin-right: 0;
  }
}

@media only screen and (min-width: 800px) {
  .footer-columns {
    display: flex;
    justify-content: space-between;
  }

  .footer-column {
    width: 290px;
    margin-right: 50px;
  }

  .footer-column:first-child {
    width: 450px;
  }

  .footer-column:last-child {
    margin-right: 0;
    flex: none;
  }

  .footer a {
    text-decoration: underline;
  }

  .footer a:hover {
    color: #e0b3b9;
  }

  .footer ul {
    padding-left: 0;
    list-style: none;
  }

  .footer ul li::before {
    content: "- ";
  }

  .footer-credits {
    font-size: 0.93em;
  }

  .footer-credits span {
    font-weight: bold;
  }
}

.reveal-loaded .reveal [class*="reveal-"] {
  opacity: 0 !important;
  transform: translateY(30px) !important;
  transition: 0s !important;
}

.reveal-loaded [class*="reveal-"] {
  transition: 1s cubic-bezier(.5, 0, 0, 1);
}

.reveal-loaded .reveal-2 {
  transition-delay: .1s;
}

.reveal-loaded .reveal-3 {
  transition-delay: .2s;
}

.reveal-loaded .reveal-4 {
  transition-delay: .3s;
}

@media (prefers-reduced-motion: reduce) {
  .reveal [class*="reveal-"] {
    opacity: 1 !important;
    transform: translateY(0px) !important;
  }

  [class*="reveal-"] {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
</style>
