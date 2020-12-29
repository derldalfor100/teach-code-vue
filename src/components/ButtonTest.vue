<template>
  <div>
    <span>is True? {{ this.injectedValue.expanded }} </span>
    <button @click="onClick()">Toggle</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component, Inject } from "vue-property-decorator";
@Component
export default class ButtonTest extends Vue {
  @Inject("accordionItemState") private injectedValue!: any;

  onClick() {

      this.injectedValue.expanded = !this.injectedValue.expanded;
  }
}
</script>