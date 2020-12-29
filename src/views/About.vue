<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img alt="View" src="../assets/images/view.jpg" />
    <Alert :msg="'Just a message'" />
    <ProvideInject>
      <ButtonTest />
    </ProvideInject>
    <ProvideInjectTheme>
      <ButtonTheme />
    </ProvideInjectTheme>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: #daa;
}
</style>

<script lang="ts">
import Vue from "vue";
import Alert from "@/components/Alert.vue";
import ProvideInject from "@/components/ProvideInject.vue";
import ButtonTest from "@/components/ButtonTest.vue";
import ProvideInjectTheme from '@/components/ProvideInjectTheme.vue';
import ButtonTheme from '@/components/ButtonTheme.vue';

export default Vue.extend({
  name: "about",
  data: function () {
    return {

    };
  },
  components: {
    Alert,
    ProvideInject,
    ButtonTest,
    ProvideInjectTheme,
    ButtonTheme
  },
});
</script>