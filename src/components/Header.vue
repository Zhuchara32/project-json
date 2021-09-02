<template>
    <section class="header">
        <div class="header__logo">
            <div class="header__logo-transform"
            v-success>
                <svg class="header__logo-svg" viewBox="0 0 115 37" fill="none" id="flexe-logo" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 35.442h4.656V19.543h16.96v-3.9H4.657V3.9h18.513V.006L0 0v35.442z"
                    fill="white">
                    </path>
                    <path d="M32.758.006h-4.346v35.436h4.346V.006z" fill="white"></path>
                    <path
                    d="M58.873 27.953c-1.394 3.038-4.346 4.403-7.808 4.403-4.861
                    0-8.583-3.596-8.947-8.914h21.307V22.38c0-9.116-6-13.775-12.772-13.775-6.722
                    0-12.984 5.063-12.984
                    13.52C37.669 30.629 43.567 36 50.962 36c5.432 0 10.706-2.682
                    12.257-8.053h-4.346v.006zm-8.329-15.751c4.553
                    0 8.068 2.985 8.378 7.798h-16.81c.418-4.86 4.14-7.798 8.432-7.798z"
                    fill="white"></path>
                    <path d="M114.545 22.38c0-9.116-6.001-13.775-12.772-13.775-6.723
                    0-12.984 5.063-12.984 13.52 0 8.504
                    5.898 13.875 13.293 13.875 5.432 0 10.705-2.682 12.257-8.053h-4.346c-1.394
                    3.038-4.346 4.403-7.808 4.403-4.861
                    0-8.583-3.596-8.947-8.914h21.307V22.38zM93.238 20c.412-4.86 4.14-7.798
                    8.432-7.798 4.552 0 8.068 2.985 8.378
                    7.798h-16.81z" fill="white"></path>
                    <path d="M71.24 19.039c2.224 1.103 7.753 1.098 9.977 0 2.783-1.377
                    7.408-9.822 7.408-9.822h-4.862s-2.873
                    5.519-4.661 6.427c-1.195.605-4.19.605-5.39
                    0-1.794-.902-4.691-6.427-4.691-6.427h-5.123s4.571 8.445 7.341 9.822z"
                    fill="white"></path>
                    <path d="M74.082 27.875c.94-.474 3.286-.474 4.226 0 2.097 1.069
                    5.455 7.567 5.455
                    7.573h5.068s-4.94-9.424-8.002-10.967c-1.976-.997-6.91-.986-8.893
                    0-3.103 1.537-8.238 10.967-8.244 10.967h4.862c0-.006
                    3.419-6.51 5.528-7.573z" fill="white">
                    </path>
                </svg>
            </div>
        </div>
        <nav class="header-nav">
            <ul class="header-nav-list headerList">
                <li v-on:click='changeActive(isActive = !isActive)'
                class="headerList__item">
                    <a class="headerList__link" href="#">
                        logistics programs
                        <span class="headerList__link-svg">
                            <font-awesome-icon :icon="myIcon" />
                        </span>
                    </a>
                </li>
                <li v-on:click='chengeBounded(isBounded = !isBounded)'
                class="headerList__item">
                    <a class="headerList__link" href="#">
                        our approach
                        <span class="headerList__link-svg">
                            <font-awesome-icon :icon="myIcon" />
                        </span>
                    </a>
                </li>
                <li v-on:click='chengeShow(isShow = !isShow)'
                class="headerList__item">
                    <a class="headerList__link" href="#">
                        company
                        <span class="headerList__link-svg">
                            <font-awesome-icon :icon="myIcon" />
                        </span>
                    </a>
                </li>
                <!-- <li class="headerList__item" id="resources">
                    <a class="headerList__link" href="#">
                        resources
                        <span class="headerList__link-svg">
                            <font-awesome-icon :icon="myIcon" />
                        </span>
                    </a>
                </li> -->
            </ul>
        </nav>
        <nav class="header-navContact">
            <button  v-on:click="contactUs = !contactUs"
            class="header-navContact__button">
                contact us
            </button>
        </nav>
        <transition name="component-fade"
        tag="section" move-class="submenu" mode="out-in">
                <section class="submenu" v-if="isActive"
                id="active" key="one">
                    <nav class="submenu-nav">
                        <ul class="submenu-navList">
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">flexe logistics programs</h3>
                                <p class="submenuItems__text">
                                    Technology-powered programs solve today's biggest challenges.
                                </p>
                                </li>
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">same-day delivery</h3>
                                <p class="submenuItems__text">
                                    Activate same-day delivery in key markets and delight customers.
                                </p>
                                </li>
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">fulfillment</h3>
                                <p class="submenuItems__text">
                                    Scale fulfillment networks to improve delivery promises
                                </p>
                                </li>
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">distribution</h3>
                                <p class="submenuItems__text">
                                    Rapidly replenish to retail partners and be more efficient
                                </p>
                                </li>
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">capacity</h3>
                                <p class="submenuItems__text">
                                    Reduce network capacity constraints and improve efficiency
                                </p>
                                </li>
                        </ul>
                    </nav>
                </section>
                <section class="submenu" v-if="isBounded" id="bounded"
                key="two">
                    <nav class="submenu-nav">
                        <ul class="submenu-navList">
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">approach overwiew</h3>
                                <p class="submenuItems__text">
                                    Complementing fixed networks with flexible omnichannel
                                    logistics.
                                </p>
                                </li>
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">logistics network</h3>
                                <p class="submenuItems__text">
                                    The largest network of world-class logistics providers.
                                </p>
                                </li>
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">logistics platform</h3>
                                <p class="submenuItems__text">
                                    A single platform to execute, manage, and optimize programs.
                                </p>
                                </li>
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">logistics operations</h3>
                                <p class="submenuItems__text">
                                    Enterprise logistics expertise in a single point of contact.
                                </p>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section class="submenu" v-if="isShow" id="show" key="thri">
                    <nav class="submenu-nav">
                        <ul class="submenu-navList">
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">about us</h3>
                                </li>
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">careers</h3>
                                </li>
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">newsroom</h3>
                                </li>
                            <li class="submenu-navList-items submenuItems">
                                <h3 class="submenuItems__heading">contact</h3>
                            </li>
                        </ul>
                    </nav>
                </section>
        </transition>
        <transition name="formTransition">
                <section class="contactUs"  v-if="contactUs">
                    <div class="contactUs-App">
                        <div class="contactUs-buttonApp">
                            <button v-on:click="contactUs = !contactUs" class="contactUs__button">
                                <span class="contactUs__button-text">Close</span>
                                <span class="contactUs__button-icon">
                                    <font-awesome-icon :icon="iconClose" />
                                </span>
                            </button>
                        </div>
                        <h2 class="contactUs__header">
                            Ready to future-proof your logistics network?
                        </h2>
                        <p class="contactUs__text">
                            Fill out the form and one of our sales
                            representatives will be in touch with you shortly.
                        </p>
                        <form id="form" class="contactUs__form" method="post"
                        action="#" @submit="checkForm" novalidate="true">
                            <p v-if='errors.length' class="contactUs__form-error">
                                Please correct fix errors:
                                <ol>
                                    <li class="contactUs__form-error-list" v-bind:key='error'
                                    v-for="error in errors">{{ error }}</li>
                                </ol>
                            </p>
                            <label for="name" class="contactUs__form-item firstName">
                                <p>first name*</p>
                                <input id="name" v-model="name" name="name"
                                class="contactUs__form-input" type="text" required>
                            </label>
                            <label for="lastName" class="contactUs__form-item lastName">
                                <p>last name*</p>
                                <input id="lastName" v-model="lastName" name="lastName"
                                class="contactUs__form-input" type="text" required>
                            </label>
                            <label for="title" class="contactUs__form-item title">
                                <p>title*</p>
                                <input id="title" v-model="title" name="title"
                                class="contactUs__form-input" type="text" required>
                            </label>
                            <label for="email" class="contactUs__form-item email">
                            <p>business email*</p>
                                <input id="email" v-model="email" name="email"
                                class="contactUs__form-input" type="email" required>
                            </label>
                            <label for="phoneNumber" class="contactUs__form-item phoneNumber">
                                <p>phone number*</p>
                                <input id="phoneNumber" v-model="phoneNumber" name="phoneNumber"
                                class="contactUs__form-input" type="phone" required>
                            </label>
                            <label for="company" class="contactUs__form-item company">
                                <p>company*</p>
                                <input id="company" v-model="company" name="company"
                                class="contactUs__form-input" type="text" required>
                            </label>
                            <label for="companySize" class="contactUs__form-item companySize">
                                <p>company size*</p>
                                <select id="companySize" v-model="companySize"
                                name="companySize" required>
                                    <option value="value1" selected></option>
                                    <option value="value2">&lt;500 employees</option>
                                    <option value="value3">500 - 1000 employees</option>
                                    <option value="value4">1000 - 5000 employees</option>
                                    <option value="value5">5000 - 10 000 employees</option>
                                    <option value="value6">10 000+ employees</option>
                                </select>
                            </label>
                            <label for="solutions" class="contactUs__form-item solutions">
                                <p>I'm interested in solutions for*</p>
                                <select id="solutions" v-model="solutions"
                                name="solutions" required>
                                    <option value="value1" selected></option>
                                    <option value="value2">Flexe Same-Day Delivery</option>
                                    <option value="value3">eCommerce Fulfillment</option>
                                    <option value="value4">Inventory Overflow</option>
                                    <option value="value5">Retail Destiribution</option>
                                    <option value="value6">Amazon FBA</option>
                                    <option value="value7">Join Logistics Network</option>
                                </select>
                            </label>
                            <div class="contactUs__form-buttonApp">
                                <input class="contactUs__form-button" type="submit"
                                @submit="checkForm" value="submit">
                            </div>
                        </form>
                    </div>
                </section>
        </transition>
    </section>
</template>

<style lang="scss" scoped>
.header {
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    transition: transform .4s cubic-bezier(.23,1,.32,1);
    &__logo {
        display: block;
        position: relative;
        transition: opacity 3s cubic-bezier(.23,1,.32,1);
        transition-delay: .4s;
        height: 2rem;
        width: 10rem;
        margin-left: 5rem;
        margin-bottom: 1rem;
        &-transform {
            transform-origin: top left;
            position: absolute;
            top: 0;
            left: 0;
            transition: transform .4s cubic-bezier(.23,1,.32,1);
            height: 2rem;
            width: 7rem;
        }
        &-svg {
            font-size: 100%;
            font: inherit;
            vertical-align: inherit;
        }
    }

    &-navContact {
        &__button {
            text-transform: capitalize;
            background: #A4ABB4;
            border-radius: 50px;
            width: 8rem;
            height: 2rem;
            border: none;
            margin-bottom: 1rem;
            &:hover {
                background: #800000;
                cursor: pointer;
            }
            &:active {
                transform: skew(20deg, 20deg);
            }
        }
    }
}
.headerList {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 40rem;
    height: 2rem;
    margin-bottom: 1rem;
    &__link {
        text-decoration: none;
        color: #595f69;
        text-transform: capitalize;
        &:hover {
            color: #ffffff;
        }
    }
}

.submenu {
    width: 90vw;
    height: 10rem;
    display: flex;
    align-items: center;
    border-top: solid 2px #595f69;
    &-nav {
        height: 9rem;
        width: 90vw;
        display: flex;
        align-items: center;
    }
    &-navList {
        width: 90vw;
        height: 9rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        &-items {
            margin-top: 0.5rem;
            width: 10rem;
            list-style-type: none;
        }
    }
}

.submenuItems {
    &__heading {
    color: #ffffff;
    text-transform: capitalize;
    text-decoration: underline dotted 1px;
    margin-bottom: 0.5rem;
    }
    &__text {
        color: #ffffff;
    }
}
.contactUs {
    position: absolute;
    background: #191910;
    top: 0;
    right: 0;
    z-index: 100;
    height: 100vh;
    width: 70vw;
    &-App {
        margin: 3rem 2rem;
    }
    &__button {
        border: none;
        width: 7rem;
        background: #191910;
        &-text {
            color: #ffffff;
            border-bottom: dotted 1px #ffffff;
        }

        &-icon {
            color: #ffffff;
            margin-left: 1rem;
        }
    }

    &__header {
        margin-top: 3rem;
        color: #ffffff;
        font-size: 2em;
    }

    &__text {
        margin-top: 2rem;
        margin-right: 15rem;
        color: #ffffff;
        font-size: 1.3em;
    }

    &__form {
        margin-top: 3rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        &-item {
            margin-bottom: 1.5rem;
            width: 50%;
            color: #ffffff;
            text-transform: capitalize;
            border: none;
            background: transparent;
            outline: none;
        }

        &-buttonApp {
            margin-top: 3rem;
            width: 100%;
            text-align: center;
        }
        &-button {
            position: relative;
            width: 8rem;
            height: 3rem;
            border: none;
            border-radius: 30px;
            text-transform: uppercase;
            &:hover {
                width: 9rem;
                height: 3.5rem;
                color: red;
            }

            &:active {
                box-shadow: inset 4px 3px 22px 5px #000000;
            }
        }

        &-error {
            color: #ffffff;
            width: 100%;
            margin-bottom: 2rem;
            font-size: 1.5em;
            margin-left: 2rem;
        }
    }
}

@media only screen and (min-width: 640px) and (max-width: 1023px) {
    .header__logo {
        margin-left: 0;
        width: 8rem;
    }
}
</style>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faTimes);

export default {
  name: 'Header',
  data() {
    return {
      myIcon: faChevronDown,
      isActive: false,
      isBounded: false,
      isShow: false,
      x: document.body.scrollTop,
      iconClose: faTimes,
      contactUs: false,
      errors: [],
      name: null,
      lastName: null,
      title: null,
      email: null,
      phonNumber: null,
      company: null,
      companySize: null,
      solution: null,
    };
  },
  methods: {
    changeActive() {
      if (this.isActive === true) {
        this.isBounded = false;
        this.isShow = false;
      }
    },
    chengeBounded() {
      if (this.isBounded === true) {
        this.isActive = false;
        this.isShow = false;
      }
    },
    chengeShow() {
      if (this.isShow === true) {
        this.isActive = false;
        this.isBounded = false;
      }
    },
    checkForm(e) {
      if (this.name && this.lastName && this.title
      && this.company && this.email && this.phonNumber) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Please enter a name.');
      }

      if (!this.lastName) {
        this.errors.push('Please enter a last name.');
      }

      if (!this.title) {
        this.errors.push('Please enter a title.');
      }

      if (!this.company) {
        this.errors.push('Please enter a company.');
      }

      if (!this.email) {
        this.errors.push('Enter your email.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Please enter a valid email address.');
      }

      if (!this.phonNumber) {
        this.errors.push('Enter your phon number.');
      } else if (!this.validPhonNumber(this.phonNumber)) {
        this.errors.push('Please enter a valid phon number.');
      }

      if (!this.errors.length) {
        return true;
      }

      return e.preventDefault();
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    validPhonNumber(phonNumber) {
      const ko = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      return ko.test(phonNumber);
    },

    // handleScroll(evt, el) {
    //   if (window.scrollY > 50) {
    //     el.setAttribute(
    //       'style',
    //       'height: this.x * 5 + 2 + "rem";
    //       'width: this.x * 5 + 7 + "rem";
    //     );
    //   }
    //   return window.scrollY > 100;
    // },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
