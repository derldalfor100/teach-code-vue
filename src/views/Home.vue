<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <h1>{{ url }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    console.log("env:", process.env);

    return {
      url: process.env.VUE_APP_ROOT_URL,
    };
  },
});
</script>
