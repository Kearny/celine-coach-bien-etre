<template>
  <section class="home-section">
    <div class="container-small">
      <div class="block block-left reveal">
        <div class="block-img reveal-1">
          <img src="../assets/image.jpg" alt=""/>
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> notre gamme beauté
          </h2>

          <p class="reveal-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur magna mauris, sed maximus turpis tristique eget. Duis
            dictum faucibus pulvinar. Ut in nunc sit amet tellus tempus
            convallis ac quis massa. Nullam lacinia semper massa, quis ultricies
            arcu libero.
          </p>

          <div class="more reveal-4">
            <a href="#">Voir</a>
          </div>
        </div>
      </div>

      <div class="block block-right reveal">
        <div class="block-img reveal-1">
          <img src="../assets/image.jpg" alt=""/>
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> notre gamme beauté
          </h2>

          <p class="reveal-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur magna mauris, sed maximus turpis tristique eget. Duis
            dictum faucibus pulvinar. Ut in nunc sit amet tellus tempus
            convallis ac quis massa. Nullam lacinia semper massa, quis ultricies
            arcu libero.
          </p>

          <div class="more reveal-4">
            <a href="#">Voir</a>
          </div>
        </div>
      </div>

      <div class="block block-centered block-last reveal">
        <div class="block-body">
          <h2 class="title reveal-1">
            <span>Massages</span> certifiés détente
          </h2>

          <p class="reveal-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur magna mauris, sed maximus turpis tristique eget. Duis
            dictum faucibus pulvinar. Ut in nunc sit amet tellus tempus
            convallis ac quis massa. Nullam lacinia semper massa, quis ultricies
            arcu libero.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="menu-summary" id="menu">
        <div class="menu-summary-item reveal">
          <img src="../assets/massage.jpg" alt="" class="menu-summary-img reveal-1"/>

          <h3 class="menu-summary-title reveal-2">Massage génial</h3>

          <p class="reveal-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur magna mauris, sed maximus turpis tristique eget.
          </p>

          <div class="menu-summary-price reveal-4">90€</div>
        </div>
        <div class="menu-summary-item reveal">
          <img src="../assets/massage.jpg" alt="" class="menu-summary-img reveal-1"/>
          <h3 class="menu-summary-title reveal-2">Massage génial</h3>

          <p class="reveal-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur magna mauris, sed maximus turpis tristique eget.
          </p>

          <div class="menu-summary-price reveal-4">90€</div>
        </div>
        <div class="menu-summary-item reveal">
          <img src="../assets/massage.jpg" alt="" class="menu-summary-img reveal-1"/>

          <h3 class="menu-summary-title reveal-2">Massage génial</h3>

          <p class="reveal-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur magna mauris, sed maximus turpis tristique eget.
          </p>

          <div class="menu-summary-price reveal-4">90€</div>
        </div>
        <div class="menu-summary-item reveal">
          <img src="../assets/massage.jpg" alt="" class="menu-summary-img reveal-1"/>

          <h3 class="menu-summary-title reveal-2">Massage génial</h3>

          <p class="reveal-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur magna mauris, sed maximus turpis tristique eget.
          </p>

          <div class="menu-summary-price reveal-4">90€</div>
        </div>
      </div>

      <div class="block block-celine">
        <div class="block-img">
          <img src="../assets/celine.png" alt=""/>
        </div>
        <div class="block-body reveal">
          <h2 class="title reveal-1">
            <span>Hôtesse</span> RENCONTREZ-MOI, CELINE TERTRAIS
          </h2>

          <p class="reveal-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur magna mauris, sed maximus turpis tristique eget. Duis
            dictum faucibus pulvinar. Ut in nunc sit amet tellus tempus
            convallis ac quis massa. Nullam lacinia semper massa, quis ultricies
            arcu libero.
          </p>

          <p class="reveal-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur magna mauris, sed maximus turpis tristique eget. Duis
            dictum faucibus pulvinar.
          </p>

          <div class="more reveal-4">
            <a href="#">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Welcome extends Vue {
  mounted(): void {
    const ratio = 0.1;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio,
    };

    const handleIntersect = function (entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.remove("reveal");
          observer.unobserve(entry.target);
        }
      });
    };

    document.documentElement.classList.add("reveal-loaded");
    window.addEventListener("DOMContentLoaded", function () {
      const observer = new IntersectionObserver(handleIntersect, options);
      document.querySelectorAll(".reveal").forEach(reveal => {
        observer.observe(reveal);
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-section {
  padding-top: 9px;
}

.container-small {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 960px;
}



.block {
  margin-bottom: 50px;
}

.block-centered {
  text-align: center;
}

.block-centered .block-body {
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.block-img {
  max-width: 350px;
  margin: 0 auto;
  border: solid 1px #e387a6;
}

.block-img img {
  display: block;
}

.block-img img {
  position: relative;
  z-index: 1;
}

.title {
  font-size: 1.75rem;
  line-height: 1.1;
  letter-spacing: 2px;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  margin: 1rem 0 0 0;
}

.title span {
  font-family: "Pinyon Script", serif;
  color: #e387a6;
  font-size: 2.5rem;
  display: block;
  text-transform: none;
}

.title::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 2px;
  background: #e387a6;
  margin-bottom: 0.5rem;
}

.more {
  color: #e387a6;
}

.menu-summary-item {
  position: relative;
  padding-left: 120px;
  margin-bottom: 30px;
}

.menu-summary-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
}

.menu-summary-title {
  font-size: 1.125rem;
  color: #383838;
  font-weight: bold;
  padding-bottom: 0.75rem;
  margin-bottom: 0;
}

.menu-summary p {
  margin: 0;
  padding-bottom: 1rem;
  font-size: 0.875rem;
}

.menu-summary-price {
  font-family: "Pinyon Script", serif;
  color: #e387a6;
  font-size: 2.5rem;
  line-height: 1;
}

.reservation .block-centered .block-body {
  max-width: 825px;
}

@media only screen and (min-width: 800px) {
  .block {
    margin-bottom: 100px;
  }

  .block-last {
    margin-bottom: 60px;
  }

  .block-left,
  .block-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .block-img {
    border: none;
    position: relative;
  }

  .block-left .block-body,
  .block-right .block-body {
    width: 445px;
    flex: none;
  }

  .block-img::before {
    content: "";
    display: block;
    border: solid 1px #e387a6;
    position: absolute;
    top: -30px;
    left: -30px;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .block-right .block-img::before {
    left: auto;
    right: -30px;
  }

  .block-left .block-img {
    margin-left: 30px;
  }

  .block-right .block-img {
    margin-right: 30px;
  }

  .block-left .block-body {
    margin-left: 20px;
  }

  .block-right .block-body {
    margin-right: 20px;
    order: -1;
  }

  .menu-summary {
    position: relative;
    padding: 85px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .menu-summary-item {
    padding-left: 192px;
    margin-bottom: 110px;
    width: calc(50% - 40px);
  }

  .menu-summary .menu-summary-item:nth-child(even) {
    text-align: right;
    padding-left: 0;
    padding-right: 192px;
  }

  .menu-summary .menu-summary-item:nth-child(even) .menu-summary-img {
    left: auto;
    right: 0;
  }

  .menu-summary .menu-summary-item:nth-child(even) .menu-summary-price {
    margin-left: auto;
  }

  .menu-summary-img {
    width: 160px;
  }

  .menu-summary-title {
    margin-top: 0;
    line-height: 1.2;
    background: #ededed;
  }

  .menu-summary p {
    background: #ededed;
  }

  .menu-summary-price {
    padding-top: 4px;
    width: 85px;
    background: #ededed;
  }

  .menu-summary::before {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 420px;
    height: 420px;
    border: solid 1px #e387a6;
    transform: translate(-50%, -260px) rotate(45deg);
  }

  .block-celine {
    display: flex;
    align-items: center;
    margin-bottom: 0px;
  }

  .block-celine .block-img::before {
    display: none;
  }

  .block-celine .block-img {
    flex: none;
    width: 404px;
    order: 2;
  }
}
</style>
