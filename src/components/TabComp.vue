<template>
    <div class="info-carousel tab" v-show="activeTab">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabComp',
  props: {
    name: { required: true },
    selected: { default: false },
  },
  data() {
    return {
      activeTab: false,
    };
  },
  mounted() {
    this.activeTab = this.selected;
  },
};
</script>
