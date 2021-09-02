<template>
    <transition name="fade">
        <section class="submenu" v-if="show">
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
    </transition>
</template>

<style lang="scss" scoped>
.submenu {
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    border-top: solid 2px #595f69;
    &-nav {
        height: 9rem;
        width: 100%;
        display: flex;
        align-items: center;
    }
    &-navList {
        width: 100%;
        height: 9rem;
        display: flex;
        justify-content: space-evenly;
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
</style>

<script>

export default {
  name: 'Submenu',
};
</script>
