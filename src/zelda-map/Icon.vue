<template>
  <div>
    <div v-bind:class="$style.root">
      <div v-bind:style="{ backgroundColor: backgroundColor }">
        <span v-bind:class="$style.icon" v-html="icon"></span>
        <span>{{english}}</span>
        <span>/</span>
        <span>{{japanese}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    icon: String,
    english: String,
    japanese: String,
    backgroundColor: String
  }
});
</script>

<style lang="scss" module>
* {
  box-sizing: border-box;
  font-size: 14px;
}
.root {
  padding: 0px 2px;
  .icon {
    color: white;
  }
  > div {
    border-radius: 5px;
    padding: 0px 5px;
    display: flex;
    font-family: icomoon;
  }
}
</style>