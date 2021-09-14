<template>
  <section class="info">
      <nav class="info-heading">
        <ul class="info-list tabs">
            <li  class="info-contentList__items items"
            v-for='(tab, index) in tabs' :key="index">
                <div class="info-contentList__items items"
                :class="{ 'is-active': tab.activeTab }"
                @click="selectTab(tab)">
                    {{ tab.name }}
                </div>
            </li>
        </ul>
      </nav>
    <section class="tab">
      <slot></slot>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        const clonTab = tab;
        clonTab.activeTab = tab.name === selectedTab.name;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>
