<template>
    <section class="info">
      <nav class="info-heading">
        <ul class="info-list" id="ex">
          <li v-on:click="chengeColor()" id="pi" class="info-list__items">
            <a class="info-list__link" href="#1">
              flexe same-day delivey
            </a>
          </li>
          <li class="info-list__items">
            <a class="info-list__link" href="#2">
              flexe fulfillment
            </a>
          </li>
          <li class="info-list__items">
            <a class="info-list__link" href="#3">
              flexe distribution
            </a>
          </li>
          <li class="info-list__items">
            <a class="info-list__link" href="#4">
              flexe capacity
            </a>
          </li>
        </ul>
      </nav>
        <section class="info-content">
          <VueSlickCarousel class="info-carousel" :arrows='false' :dots='true'>
            <div id="1" class="info-contentList__items items">
              <article class="items-sameDay items-block">
                <div class="items-block__app">
                  <p class="items-block__subHeading">
                    Flexe Logistics programs
                  </p>
                  <h2 class="items-block__heading">
                    same-day. delivered.
                  </h2>
                  <p class="items-block__paragraph">
                    Customers expect fast, free delivery. Add fulfillment
                    centers in major demand centers and exceed those
                    expectations, today. Stand out from competirors and
                    increase revenue with Flexe Same-Day Delivery.
                  </p>
                  <button class="items-block__button">
                    flexe same-day delivery
                  </button>
                </div>
              </article>
              <article class="items-article items-block">
                <div class="items-block__app">
                  <p class="items-block__subHeading">
                    Aticles
                  </p>
                  <h2 class="items-block__heading">
                    same-day delivery: 3 reasons why speed matters
                  </h2>
                  <div class="items-block__linkApp">
                    <a href="#" class="items-block__link">
                      read aricles
                    </a>
                  </div>
                </div>
              </article>
              <section class="items-amazon items-block">
                <div class="items-block__app">
                  <div class="items-block__appAmazon">
                    <p class="items-block__percent">
                      58%
                    </p>
                    <p class="items-block__text">
                      of Amazon Prime shoppers purchase more as a
                      result of Amazon same-day delivery
                    </p>
                  </div>
                  <time class="items-block__time">
                    Flexe Omnichannel Consumer Survey, 2020
                  </time>
                </div>
              </section>
              <section class="items-shipping items-block">
                <div class="items-block__app">
                  <p class="items-block__percent">
                    85%
                  </p>
                  <p class="items-block__text">
                    of consumers say they search elsewhere for faster shipping options
                  </p>
                  <time class="items-block__time">
                    Flexe OMnichannel Consumer Survey, 2020
                  </time>
                </div>
              </section>
            </div>
            <div id="2" class="info-contentList__items items">
              <article class="items-sameDay items-block">
                <div class="items-block__app">
                  <p class="items-block__subHeading">
                    Flexe Logistics programs
                  </p>
                  <h2 class="items-block__heading">
                    <span>e</span>commerce. fulfilled.
                  </h2>
                  <p class="items-block__paragraph">
                    Competitive delivery promises get noticed. Expand fulfillment
                    networks and position goods closer to consumers.
                    Increase sales, reduce transportation costs, and delight
                    customers with superior delivery promises from Flexe Fulfillment.
                  </p>
                  <button class="items-block__button">
                    flexe fulfillment
                  </button>
                </div>
              </article>
              <article class="items-article items-block">
                <div class="items-block__app">
                  <p class="items-block__subHeading">
                    Aticles
                  </p>
                  <h2 class="items-block__heading">
                    Reailers vs. Consumers: Colling Points of View on eCommerce Delivery
                  </h2>
                  <div class="items-block__linkApp">
                    <a href="#" class="items-block__link">
                      read aricles
                    </a>
                  </div>
                </div>
              </article>
              <section class="items-amazon items-block">
                <div class="items-block__app">
                  <div class="items-block__appAmazon">
                    <p class="items-block__percent">
                      10
                    </p>
                    <p class="items-block__text">
                      years of eCommerce sales frowth in just 10 weeks
                    </p>
                  </div>
                  <time class="items-block__time">
                    Flexe Omnichannel Consumer Survey, 2020
                  </time>
                </div>
              </section>
              <section class="items-shipping items-block">
                <div class="items-block__app">
                  <p class="items-block__percent">
                    51%
                  </p>
                  <p class="items-block__text">
                    transportation cost savings with more flexible fulfillment locations
                  </p>
                  <time class="items-block__time">
                    Lull Case Study
                  </time>
                </div>
              </section>
            </div>
            <div id="3" class="info-contentList__items items">
              <article class="items-sameDay items-block">
                <div class="items-block__app">
                  <p class="items-block__subHeading">
                    Flexe Logistics programs
                  </p>
                  <h2 class="items-block__heading">
                    B2B distribution/ Simplified.
                  </h2>
                  <p class="items-block__paragraph">
                    Stock outs mean lost sales. Position inventory
                    closer to retail locations and partner intake
                    centers. Replenish goods faster, maintain OTIF
                    compliance, and be more efficient with Flexe
                    Distribution.
                  </p>
                  <button class="items-block__button">
                    flexe distribution
                  </button>
                </div>
              </article>
              <article class="items-article items-block">
                <div class="items-block__app">
                  <p class="items-block__subHeading">
                    White Papers
                  </p>
                  <h2 class="items-block__heading">
                    Hindsight Is 2020: A Retrospect of Key Trends in 2020
                  </h2>
                  <div class="items-block__linkApp">
                    <a href="#" class="items-block__link">
                      read white papers
                    </a>
                  </div>
                </div>
              </article>
              <section class="items-amazon items-block">
                <!-- <div class="items-block__app">
                  <div class="items-block__appAmazon">
                    <p class="items-block__percent">
                      58%
                    </p>
                    <p class="items-block__text">
                      of Amazon Prime shoppers purchase more as a
                      result of Amazon same-day delivery
                    </p>
                  </div>
                  <time class="items-block__time">
                    Flexe Omnichannel Consumer Survey, 2020
                  </time>
                </div> -->
              </section>
              <section class="items-shipping items-block">
                <div class="items-block__app">
                  <p class="items-block__percent">
                    96%
                  </p>
                  <p class="items-block__text">
                    increase in curbside pick-up since March of 2020
                  </p>
                  <time class="items-block__time">
                    Flexe OMnichannel Consumer Survey, 2020
                  </time>
                </div>
              </section>
            </div>
            <div id="4" class="info-contentList__items items">
              <article class="items-sameDay items-block">
                <div class="items-block__app">
                  <p class="items-block__subHeading">
                    Flexe Logistics programs
                  </p>
                  <h2 class="items-block__heading">
                    Add capacity. Fast.
                  </h2>
                  <p class="items-block__paragraph">
                    Disruptions are increasing. Solve
                    capacity constraints quickly, reduce
                    costs, and improve network efficiency.
                    All without fixed-term commitments.
                    Tap into the largest open warehouse network
                    with Flexe Capacity.
                  </p>
                  <button class="items-block__button">
                    flexe capacity
                  </button>
                </div>
              </article>
              <article class="items-article items-block">
                <div class="items-block__app">
                  <p class="items-block__subHeading">
                    Aticles
                  </p>
                  <h2 class="items-block__heading">
                    On-Demand Warehousing 101: Network
                    Optimization and On-Demand Warehousing
                  </h2>
                  <div class="items-block__linkApp">
                    <a href="#" class="items-block__link">
                      read aricles
                    </a>
                  </div>
                </div>
              </article>
              <section class="items-amazon items-block">
                <!-- <div class="items-block__app">
                  <div class="items-block__appAmazon">
                    <p class="items-block__percent">
                      58%
                    </p>
                    <p class="items-block__text">
                      of Amazon Prime shoppers purchase more as a
                      result of Amazon same-day delivery
                    </p>
                  </div>
                  <time class="items-block__time">
                    Flexe Omnichannel Consumer Survey, 2020
                  </time>
                </div> -->
              </section>
              <section class="items-shipping items-block">
                <div class="items-block__app">
                  <p class="items-block__percent">
                    50%
                  </p>
                  <p class="items-block__text">
                    YoY frowht in Flexe Logistics Network since 2020
                  </p>
                  <time class="items-block__time">
                    Flexe OMnichannel Consumer Survey, 2020
                  </time>
                </div>
              </section>
            </div>
          </VueSlickCarousel>
        </section>
    </section>
</template>

<style lang="scss">
.info {
  height: 100%;
  width: 100%;
  &-heading {
    width: 90vw;
    margin: 3rem auto;
  }
  &-list {
    list-style-type: none;
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: solid 2px #595f69;
    line-height: 2;
    &__items {
      text-transform: capitalize;
    }

    &__link {
      text-decoration: none;
      color: #595f69;
      &:active {
        color: #ffffff;
      }
    }
  }
}
.items {
  display: block;
  width: 90vw !important;
  display: flex !important;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  color: #ffffff;
  overflow-x: hidden;
  &-block {
    width: 40vw;
    height: 30vh;
    &__app {
      margin: 1rem;
    }
    &__heading {
      margin: 1rem auto;
      font-size: 1.5em;
      text-transform: capitalize;
    }

    &__button {
      text-transform: capitalize;
      font-size: 0.8em;
      background: #B8860B;
      border: none;
      border-radius: 50px;
      height: 2rem;
      width: 12rem;
      margin-top: 2rem;
    }

    &__link {
      text-decoration: none;
      text-transform: capitalize;
      color: #ffffff;
      border-bottom: dotted 1px;
    }

    &__linkApp {
      margin-top: 6rem;
    }

    &__percent {
      font-size: 3em;
      margin-bottom: 1rem;
    }

    &__text {
      margin-bottom: 5rem;
    }

    &__time {
      font-size: 0.5em;
    }

    &__appAmazon {
      border-left: 2px solid #432706;
      width: 15rem;
      padding-left: 2rem;
    }
  }
  &-article {
    background: #373A25;
  }

  &-shipping {
    background: #432706;
  }
}

.slick-dots {
  top: -5rem;
}
.slick-dots li {
  margin: 0 4rem;
  opacity: 0;
  width: 8rem;
}

@media only screen and (min-width: 320px) and (max-width: 640px) {
  .items-block__button {
    width: 7rem;
  }
}
</style>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'Info',
  components: { VueSlickCarousel },
  // data() {
  //   return {
  //     color: '#595f69',
  //   };
  // },
  // methods: {
  //   chengeColor() {
  //     const colorC = document.getElementById('pi');
  //     this.color = colorC.style.color;
  //     if (this.color === '#595f69') {
  //       this.color = '#ffffff';
  //     } else {
  //       this.color = '#595f69';
  //     }
  //   },
  // },
};
</script>
