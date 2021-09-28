<template>
  <section class="home-section">
    <div class="container-small">
      <div class="block block-left reveal">
        <div class="block-img reveal-1">
          <img alt="" src="../assets/Soin_jeunesse.jpg"/>
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> nos soins du visage
          </h2>

          <div id="soins-expandable">
            <ul class="soins-visage reveal-3">
              <li>
                <span class="soins-visage-title">Soin éclat</span><span class="text-right">1h00 - 49&nbsp;€</span>
                <p>Un soin revitalisant ultra-concentré à la Vitamine C qui booste l’éclat du teint, visible dès la fin
                  du
                  soin.</p>
              </li>

              <li>
                <span class="soins-visage-title">Soin hydratant</span><span class="text-right">1h00 - 49&nbsp;€</span>
                <p>
                  Retrouvez une peau souple, douce et éclatante !
                  <br>
                  Ce soin relance les mécanismes d’hydratation naturels des peaux les plus asséchées. Revitalisez votre
                  épiderme et donnez-lui une seconde jeunesse. </p>
              </li>
              <li>
                <span class="soins-visage-title">Soin douceur</span><span class="text-right">1h00 - 55&nbsp;€</span>
                <p>
                  Le soin « SOS beauté » des peaux fragilisées !
                  <br>
                  Il répare, rééquilibre les défenses naturelles de l’épiderme. La peau est hydratée, apaisée, unifiée.
                </p>
              </li>
              <li>
                <span class="soins-visage-title">Soin purifiant et rééquilibrant</span><span class="text-right">1h00 - 59&nbsp;€</span>
                <p>
                  Idéal pour les peaux mixtes à grasses.
                  <br>
                  Il épure et matifie votre peau. Elle est plus nette ; le grain de peau est affiné, resserré </p>
              </li>
              <li>
                <span class="soins-visage-title">Soin anti-comédons</span><span
                  class="text-right">1h00 - 56&nbsp;€</span>
                <p>
                  Désincrustant et équilibrant, pour les peaux à tendance comédogènes dont les pores sont dilatés.
                  <br>
                  Après un démaquillage et une exfoliation en douceur, il permet d'extraire les comédons. Un modelage
                  adapté, pratiqué avec un sérum équilibrant ainsi que la pose d'un masque, assurent une bonne
                  pénétration des actifs.
                  <br>
                  Enfin, ce soin se termine par l'application d'une crème sur l'ensemble du visage, cou et décolleté
                  pour nourrir votre peau.
                </p>
              </li>
              <li>
                <span class="soins-visage-title">Soin jeunesse</span><span class="text-right">1h15 - 63&nbsp;€</span>
                <p>
                  Estompez les rides superficielles et revigorez vos traits en une séance !
                  <br>
                  Grâce aux ultrasons profitez immédiatement d’une peau raffermie à l’aspect rajeuni.
                </p>
              </li>
            </ul>
          </div>

          <div class="more reveal-4">
            <a class="button" href="#" v-on:click.prevent="switchExpandedState('soins-expandable')">Voir</a>
          </div>
        </div>
      </div>

      <div class="block block-right reveal">
        <div class="block-img reveal-1">
          <img alt="" src="../assets/rehaussement-de-cils.jpg"/>
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> le réhaussement de cils
            <small>Marque n°1 mondiale</small>
          </h2>

          <p class="reveal-3">
            Rehaussement de cils + Teinture + Soin / 1h20
            <span class="text-right">60&nbsp;€</span>
          </p>

          <ul class="reveal-4">
            <li>Non testé sur les animaux</li>
            <li>Vegan</li>
            <li>Sans paraben ni colorant</li>
            <li>Soin hypoallergénique</li>
            <li>Made in France</li>
          </ul>

          <p class="reveal-3">
            Ou <b>Inzebox</b> Rehaussement de cils +  Soin / 1h
            <span class="text-right">45&nbsp;€</span>
          </p>
        </div>
      </div>

      <div class="block block-left reveal">
        <div class="block-img reveal-1">
          <img alt="" src="../assets/epilation.webp"/>
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> nos épilations
          </h2>

          <div id="epilations-expandable">
            <ul class="reveal-3">
              <li>Sourcils<span class="text-right">6&nbsp;€</span></li>
              <li>Création sourcils<span class="text-right">8&nbsp;€</span></li>
              <li>Lèvres<span class="text-right">5&nbsp;€</span></li>
              <li>Menton<span class="text-right">5&nbsp;€</span></li>
              <li>Aisselles<span class="text-right">8&nbsp;€</span></li>
              <li>Demi-bras<span class="text-right">8&nbsp;€</span></li>
              <li>Bras entier<span class="text-right">12&nbsp;€</span></li>
              <li>Demi-jambes<span class="text-right">12&nbsp;€</span></li>
              <li>3/4 jambes<span class="text-right">16&nbsp;€</span></li>
              <li>Jambes complètes<span class="text-right">20&nbsp;€</span></li>
              <li>Maillot simple<span class="text-right">8&nbsp;€</span></li>
              <li>Maillot échancré<span class="text-right">12&nbsp;€</span></li>
              <li>Maillot brésilien<span class="text-right">15&nbsp;€</span></li>
              <li>Maillot intégral<span class="text-right">19&nbsp;€</span></li>
            </ul>
          </div>

          <div class="more reveal-4">
            <a class="button" href="#" v-on:click.prevent="switchExpandedState('epilations-expandable')">Voir</a>
          </div>
        </div>
      </div>

      <div class="block block-right reveal">
        <div class="block-img reveal-1">
          <img alt="" src="../assets/blanchiment_dents.jpg"/>
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> le blanchiment dentaire Américain
          </h2>

          <ul>
            <li>Une séance<span class="text-right">69&nbsp;€</span></li>
            <li>Deux séances<span class="text-right">110&nbsp;€</span></li>
          </ul>
        </div>
      </div>

      <div class="block block-left reveal">
        <div class="block-img reveal-1">
          <img alt="" src="../assets/BBGLOW.jpg"/>
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> le BB Glow
          </h2>

          <p class="reveal-3">
            BB Glow
            <span class="text-right">1h00 - 70&nbsp;€</span>
          </p>

          <p class="reveal-4">C’est la nouvelle sensation venue de Corée ! Une technique révolutionnaire qui vous
            procure un teint lumineux et une couleur naturelle, sans maquillage, pendant 9 mois à 1 an ! Indolore et non
            abrasif, le BB Glow stimule la production de collagène pour des résultats visibles dès la première séance.
            En quelques séances, unifiez votre teint, dissimulez imperfections, cernes et retrouvez une peau de bébé!
          </p>
        </div>
      </div>

      <div class="block block-right reveal">
        <div class="block-img reveal-1">
          <img alt="" src="../assets/MICRONEEDLING.jpg"/>
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> le microneedling
          </h2>

          <p class="reveal-3">
            Microneedling
            <span class="text-right">1h00 - 75&nbsp;€</span>
          </p>

          <div id="microneedling-expandable">
            <p class="reveal-4">Méthode de régénération naturelle de la peau ! Grâce à des micro perforations de
              l’épiderme je vais
              stimuler la synthèse des fibroblastes. Ces cellules assurent cohérence et souplesse de la peau. Réactivant
              la fabrication de l’élastine et du collagène, ce traitement non invasif permet de traiter :
            </p>

            <ul class="reveal-4">
              <li>Cicatrices d'acné</li>
              <li>Teint terne</li>
              <li>Masque de grossesse</li>
              <li>Vergetures récentes</li>
              <li>Relâchement cutanée du visage</li>
              <li>Rides ou ridules</li>
              <li>Pores dilatés</li>
            </ul>

            <p class="reveal-4">Ce soin peut être réalisé sur tous types de peau</p>
          </div>

          <div class="more reveal-4">
            <a class="button" href="#" v-on:click.prevent="switchExpandedState('microneedling-expandable')">Voir</a>
          </div>
        </div>
      </div>

      <div class="block block-left reveal">
        <div class="block-img reveal-1">
          <video controls width="300">
            <source src="../assets/PEELING.mp4" type="video/mp4">
          </video>
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> le Peeling
          </h2>

          <p class="reveal-3">
            Peeling
            <span class="text-right">1h00 - 75&nbsp;€</span>
          </p>

          <p class="reveal-4">

          </p>
        </div>
      </div>

      <div class="block block-right reveal">
        <div class="block-img reveal-1">
          <img alt="" src="../assets/callosite.jpg"/>
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> le soin anti-callosité
          </h2>

          <p class="reveal-3">
            Soint anti-callosité
            <span class="text-right">0h30 - 32&nbsp;€</span>
          </p>

          <p class="reveal-4">
          </p>
        </div>
      </div>

      <div class="block block-left reveal">
        <div class="block-img reveal-1">
<!--          <video controls width="300">-->
<!--            <source src="../assets/PEELING.mp4" type="video/mp4">-->
<!--          </video>-->
        </div>

        <div class="block-body">
          <h2 class="title reveal-2">
            <span>Découvrez</span> la teinture des sourcils au hénné
          </h2>

          <p class="reveal-3">
            Des sourcils parfaits en toute circonstance 100% WATERPROOF, 100% INDOLORE et 100% EPHEMERE.
            Le hénné va teindre la peau et également les poils
            <span class="text-right">1h00 - 75&nbsp;€</span>
          </p>

          <p class="reveal-4">

          </p>
        </div>
      </div>

      <div class="block block-centered block-last reveal">
        <div class="block-body">
          <h2 class="title reveal-1">
            <span>Massages</span> certifiés détente
          </h2>
        </div>
      </div>
    </div>

    <div class="container">
      <div id="menu" class="menu-summary">
        <div class="menu-summary-item reveal">
          <img alt="" class="menu-summary-img reveal-1" src="../assets/L_indien.jpg"/>

          <h3 class="menu-summary-title reveal-2">L'indien&nbsp;-&nbsp;1h00&nbsp;/&nbsp;1h30</h3>

          <p class="reveal-3">
            Un massage Ayurvédique enveloppant aux huiles chaudes qui apporte une profonde relaxation et une douce
            détente.
            <br/><br/>
            Rassurant, cocooning
          </p>

          <div class="menu-summary-price reveal-4">49€&nbsp;/&nbsp;72€</div>
        </div>

        <div class="menu-summary-item reveal">
          <img alt="" class="menu-summary-img reveal-1" src="../assets/massage.jpg"/>
          <h3 class="menu-summary-title reveal-2">Le shirotchampi&nbsp;-&nbsp;1h00</h3>

          <p class="reveal-3">
            Massage Ayurvédique du haut du dos, des trapèzes, de la nuque, du cuir chevelu et du visage. Agit
            immédiatement sur le stress, les maux de tête, l'insomnie et le manque de concentration.
          </p>

          <div class="menu-summary-price reveal-4">49€</div>
        </div>

        <div class="menu-summary-item reveal">
          <img alt="" class="menu-summary-img reveal-1" src="../assets/LE_BALINAIS.jpg"/>

          <h3 class="menu-summary-title reveal-2">Le balinais&nbsp;-&nbsp;1h00</h3>

          <p class="reveal-3">
            Dynamique et relaxant. Il remodèle la silhouette, améliore la circulation sanguine et lymphatique,
            entretenant une bonne condition physique.
          </p>

          <div class="menu-summary-price reveal-4">56€</div>
        </div>

        <div class="menu-summary-item reveal">
          <img alt="" class="menu-summary-img reveal-1" src="../assets/lomi-lomi.jpg"/>

          <h3 class="menu-summary-title reveal-2">Hawaïen "lomi-lomi"&nbsp;-&nbsp;1h00</h3>

          <p class="reveal-3">
            Hérité des guérisseurs Polynésiens ; le « Lomi, Lomi » insiste en profondeur sur le dos avec les avant-bras.
            Il active l'énergie corporelle et provoque un lâcher-prise immédiat.
          </p>

          <div class="menu-summary-price reveal-4">56€</div>
        </div>

        <div class="menu-summary-item reveal">
          <img alt="" class="menu-summary-img reveal-1" src="../assets/le_japonais.jpg"/>

          <h3 class="menu-summary-title reveal-2">LE JAPONAIS&nbsp;-&nbsp;1h00</h3>

          <p class="reveal-3">
            Art traditionnel Japonais, le shiatsu rééquilibre les énergies corporelles, lutte contre les états de
            fatigue et de stress.
          </p>

          <div class="menu-summary-price reveal-4">55€</div>
        </div>

        <div class="menu-summary-item reveal">
          <img alt="" class="menu-summary-img reveal-1" src="../assets/La_reflexologie.jpg"/>

          <h3 class="menu-summary-title reveal-2">La réflexologie plantaire&nbsp;-&nbsp;0h45</h3>

          <p class="reveal-3">
            Issue de la médecine ancestrale chinoise, la réflexologie plantaire stimule et rééquilibre l’énergie vitale.
            Le corps retrouve sa sérénité et un fonctionnement optimal. La circulation sanguine s’améliore, les toxines
            sont évacuées plus efficacement.
          </p>

          <div class="menu-summary-price reveal-4">45€</div>
        </div>
      </div>

      <div class="block block-centered block-last reveal">
        <div id="abonnement-block-body" class="block-body">
          <h2 class="title reveal-1">
            <span>Abonnement</span> faîtes-vous plaisir plus souvent
          </h2>
          <div class="abonnement-row">
            <div>
              <p>
                Carte 5 massages&nbsp;-&nbsp;1h00 - 219€<br>
                Carte non nominative valable un an.<br>
                Les massages sont au choix.
              </p>
            </div>
            <div id="abonnement-right">
              <strong>Formules : </strong>
              <ul id="abonnement-list">
                <li>Microneedling + BB Glow + 1 luminothérapie - 110€</li>
                <li>Cure de 3 séances Microneedling soin complet + 1 luminothérapie - 205€</li>
                <li>3 séances de BB Glow + 1 luminothérapie - 190€</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div class="block block-centered block-last reveal">
        <div class="block-body">
          <h2 class="title reveal-1">
            <span>Offrir</span> un coffret cadeau
          </h2>
          <p class="reveal-2">La carte cadeau est le cadeau facile et qui plaît à tous les coups !</p>
          <ul id="carte-cadeau-list" class="reveal-3">
            <li>Carte cadeau valable un an.</li>
            <li>
              Choisissez :
              <ul>
                <li>Un montant libre de votre choix. (attention, le montant apparaîtra sur le bon cadeau)</li>
                <li>Une ou plusieurs prestations. (dans ce cas, pas de montant sur le bon cadeau)</li>
              </ul>
            </li>
          </ul>
          <img alt="carte cadeau" class="reveal-4" src="../assets/carte_cadeau.jpg" width="400">
        </div>
      </div>

      <div class="block block-celine">
        <div class="block-img">
          <img alt="" src="../assets/celine.png"/>
        </div>
        <div class="block-body reveal">
          <h2 class="title reveal-1">
            <span>Céline</span> Votre esthéticienne
          </h2>

          <p class="reveal-2">
            Esthéticienne diplômée d'état, riche de 10 années d'expérience et passionnée par mon métier. <br>
            Titulaire d'un bac esthétique puis d'une formation spa, j'ai travaillé dans différentes structures :
            institut de beauté, spa et thalassothérapie en France.
            <br>
          </p>

          <p class="reveal-3">
            Je me déplace sur le secteur de Rennes et ses alentours où vous reçois à mon domicile à
            Saint-Médard-sur-Ille pour vous proposer des prestations de qualité.
          </p>

          <p class="reveal-4">
            J'interviens rapidement, sur rendez-vous, selon vos disponibilités.
          </p>
          <p class="reveal-5">
            Au plaisir de vous voir bientôt.
          </p>
          <p class="reveal-6">
            Céline
          </p>
        </div>
      </div>

      <div class="block block-centered block-last reveal">
        <div class="block-body social">
          <h2 class="title reveal-1">
            <span>Réseaux sociaux</span>
          </h2>

          <p>Vous souhaitez voir plus de résultats, rendez-vous sur notre page instagram ou facebook</p>
          <a href="https://www.instagram.com/coach_bien_etre" target="_blank"><img
              alt="instagram" src="../assets/iconfinder_social-instagram-new-square2_1164347.png"></a>

          <a href="https://www.facebook.com/celinesoinbeauty" target="_blank"><img
              alt="facebook" src="../assets/iconfinder_social-facebook-square2_771366.png"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {}
})
export default class Welcome extends Vue {
  mounted(): void {
    const ratio = 0.00000001;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: ratio
    };

    const handleIntersect = function(entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.remove('reveal');
          observer.unobserve(entry.target);
        }
      });
    };

    document.documentElement.classList.add('reveal-loaded');
    window.addEventListener('DOMContentLoaded', function() {
      const observer = new IntersectionObserver(handleIntersect, options);
      document.querySelectorAll('.reveal').forEach(reveal => {
        observer.observe(reveal);
      });
    });
  }

  switchExpandedState(elementId: string): void {
    console.log(elementId);
    const toExpandElement = document.getElementById(elementId);

    if (toExpandElement != null)
      if (toExpandElement.classList.contains('isExpanded')) {
        toExpandElement.classList.remove('isExpanded');
      } else {
        toExpandElement.classList.add('isExpanded');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* EXPAND STYLE */
#soins-expandable {
  display: none;
}

#epilations-expandable {
  display: none;
}

#microneedling-expandable {
  display: none;
}

.isExpanded {
  display: block !important;
}

/* EXPAND STYLE */

.home-section {
  padding-top: 9px;
}

.container-small {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 960px;
}

.abonnement-row {
  column-count: 1;
  column-gap: 1rem;
}

.abonnement-row > div {
  min-height: 200px;
  border: 1px dotted #e0b3b9;
  margin-bottom: 1rem;
}

#abonnement-list {
  text-align: left;
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
  border: solid 1px #e0b3b9;
}

.block-img img {
  display: block;
}

.block-img img {
  position: relative;
  z-index: 1;
}

.block-img video {
  display: block;
}

.block-img video {
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
  margin: 1rem 0;
}

.title small {
  font-size: 1rem;
}

.title span {
  font-family: "Pinyon Script", serif;
  color: #e0b3b9;
  font-size: 2.5rem;
  display: block;
  text-transform: none;
}

.title::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 2px;
  background: #e0b3b9;
  margin-bottom: 0.5rem;
}

.more {
  color: #e0b3b9;
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
  text-transform: uppercase;
}

.menu-summary p {
  margin: 0;
  padding-bottom: 1rem;
  font-size: 0.875rem;
}

.menu-summary-price {
  font-family: "Pinyon Script", serif;
  color: #e0b3b9;
  font-size: 2.5rem;
  line-height: 1;
}

.reservation .block-centered .block-body {
  max-width: 825px;
}

.soins-visage-title {
  text-transform: uppercase;
}

.soins-visage > p {
  text-transform: initial;
}

.social {
  font-weight: bold;
}

.social img {
  margin: 5px;
  width: 32px;
  height: 32px;
}

#abonnement-price {
  width: 100%;
  text-align: center;
  padding-bottom: 1rem;
}

#carte-cadeau-list {
  text-align: left;
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
    border: solid 1px #e0b3b9;
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
    border: solid 1px #e0b3b9;
    transform: translate(-50%, -260px) rotate(45deg);
  }

  #abonnement-block-body {
    max-width: inherit;
  }

  .abonnement-row {
    column-count: 2;
    column-gap: 1rem;
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
