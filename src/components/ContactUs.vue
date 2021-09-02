<template>
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
            <form class="contactUs__form">
                <label class="contactUs__form-item firstName">
                    <p>first name*</p>
                    <input class="contactUs__form-input" type="text" required>
                </label>
                <label class="contactUs__form-item lastName">
                    <p>last name*</p>
                    <input class="contactUs__form-input" type="text" required>
                </label>
                <label class="contactUs__form-item title">
                    <p>title*</p>
                    <input class="contactUs__form-input" type="text" required>
                </label>
                <label class="contactUs__form-item email">
                <p>business email*</p>
                    <input class="contactUs__form-input" type="email" required>
                </label>
                <label class="contactUs__form-item phoneNumber">
                    <p>phone number*</p>
                    <input class="contactUs__form-input" type="phone" required>
                </label>
                <label class="contactUs__form-item company">
                    <p>company*</p>
                    <input class="contactUs__form-input" type="text" required>
                </label>
                <label class="contactUs__form-item companySize">
                    <p>company size*</p>
                    <select name="selectCompanySize" required>
                        <option value="value1" selected></option>
                        <option value="value2">&lt;500 employees</option>
                        <option value="value3">500 - 1000 employees</option>
                        <option value="value4">1000 - 5000 employees</option>
                        <option value="value5">5000 - 10 000 employees</option>
                        <option value="value6">10 000+ employees</option>
                    </select>
                </label>
                <label class="contactUs__form-item solutions">
                    <p>I'm interested in solutions for*</p>
                    <select name="selectSolutions" required>
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
                    <input class="contactUs__form-button" type="submit" value="submit">
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
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
        margin-top: 5rem;
        color: #ffffff;
        font-size: 2em;
    }

    &__text {
        margin-top: 4rem;
        margin-right: 15rem;
        color: #ffffff;
        font-size: 1.3em;
    }

    &__form {
        margin-top: 4rem;
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
        }
    }
}
</style>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

export default {
  name: 'ContactUs',
  data() {
    return {
      iconClose: faTimes,
      contactUs: true,
    };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
