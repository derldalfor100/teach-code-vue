<template>
  <div class="pt-3">
    <b-alert class="d-flex justify-content-center p-2" show>Default Alert</b-alert>

    <div class="d-flex justify-content-center pb-3">{{ msg }}</div>

    <b-alert class="d-flex justify-content-center p-2" variant="success" show>Success Alert</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>Dismissible Alert!</b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">Show alert with count-down timer</b-button>
    <b-button
      @click="showDismissibleAlert=true"
      variant="info"
      class="m-1"
    >Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})</b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.component("Alert", {
  props: {
    msg: String,
  },
  data() {
    return {
      dismissSecs: 8,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    countDownChanged(dismissCountDown: number) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
});
</script>