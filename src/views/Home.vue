<template>
  <div class="home">
    <Header />
    <ContactUs />
    <Video />
    <Info />
    <LastNews />
    <MyFooter />
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import Header from '../components/Header.vue';
import Video from '../components/Video.vue';
import Info from '../components/Info.vue';
import MyFooter from '../components/MyFooter.vue';
import ContactUs from '../components/ContactUs.vue';
import LastNews from '../components/LastNews.vue';

export default {
  name: 'Home',
  components: {
    Header,
    ContactUs,
    Video,
    Info,
    MyFooter,
    LastNews,
  },
};
</script>
