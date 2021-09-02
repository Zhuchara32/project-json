<template>
    <section class="myFooter">
        <p class="myFooter__text">
          &copy; 2021 flexe, inc
        </p>
        <div class="myFooter__items">
        <p class="myFooter__text">
          follow us
        </p>
          <div class="myFooter__item">
            <a class="myFooter__item-link" href="#">
              <img class="myFooter__item-img" width="100%" height="100%"
              src="../assets/img/soc_facebook.png" alt="fb">
            </a>
          </div>
          <div class="myFooter__item">
            <a class="myFooter__item-link" href="#">
              <img class="myFooter__item-img" width="100%" height="100%"
              src="../assets/img/soc_linked-in.png" alt="in">
            </a>
          </div>
          <div class="myFooter__item">
            <a class="myFooter__item-link" href="#">
              <img class="myFooter__item-img" width="100%" height="100%"
              src="../assets/img/soc_twitter.png" alt="tweeter">
            </a>
          </div>
          <div class="myFooter__item">
            <a class="myFooter__item-link" href="#">
              <img class="myFooter__item-img" width="100%" height="100%"
              src="../assets/img/soc_google+.png" alt="google">
            </a>
          </div>
        </div>
    </section>
</template>

<style lang="scss">
.myFooter {
  margin-bottom: -2rem;
  background: black;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &__items {
    height: 100%;
    width: 20rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__text {
    color: #ffffff;
    text-transform: capitalize;
  }
  &__item {
    &:hover {
      width: 2em;
      height: 2em;
    }

    &:active {
      transform: rotate(0.5turn);
    }
  }
}
</style>

<script>
export default {
  name: 'MyFooter',
};
</script>
