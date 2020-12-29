<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component, Provide } from "vue-property-decorator";
@Component
export default class ProvideInject extends Vue {
  private _sharedState: {
    expanded: boolean;
  } = { expanded: false};

  public get sharedState(): { expanded: boolean } {
    return this._sharedState;
  }
  public set sharedState(v: { expanded: boolean }) {
    this._sharedState = v;
  }

  @Provide("accordionItemState") private accordionItemState = this.sharedState;
}
</script>