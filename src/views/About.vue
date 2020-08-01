<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img alt="View" src="../assets/images/view.jpg" />
    <Alert :msg="'Just a message'"/>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: #daa;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Alert from '@/components/Alert.vue';

export default Vue.extend({
  name: "about",
  components: {
    Alert
  }
})
</script>