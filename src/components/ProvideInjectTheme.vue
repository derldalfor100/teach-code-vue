<template>
  <div :class="['theme', this.themeSharedState.themeName === 'light' ? 'light-theme' : 'dark-theme']">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component, Provide } from "vue-property-decorator";
@Component
export default class ProvideInjectTheme extends Vue {
  private _sharedState: {
    themeName: string;
    setTheme: () => void;
  } = { themeName: "light", setTheme: function() { 

      if(this.themeName === "light") {

          this.themeName = "dark";
      } else {

          this.themeName = "light";
      }
  }};

  public get sharedState(): {
    themeName: string;
    setTheme: () => void;
  } {
    return this._sharedState;
  }
  public set sharedState(v: {
    themeName: string;
    setTheme: () => void;
  }) {
    this._sharedState = v;
  }

  @Provide("themeSharedState") private themeSharedState = this.sharedState;
}
</script>

<style scoped lang="scss">
.theme {
    &.light-theme {
        --background: #f6f7f9;
        --on-background: #000;
        --primary: #1976d2;
        --on-primary: #fff;
        --secondary: #a8a8a8;
        --on-secondary: #fff;
        --surface: #fff;
        --on-surface: #000;
        --error: #E74E3C;
        --on-error: #fff;
    }

    &.dark-theme {
        --background: #1F2125;
        --on-background: #fff;
        --primary: #2F90FF;
        --on-primary: #fff;
        --secondary: #474A4F;
        --on-secondary: #fff;
        --surface: #282A2F;
        --on-surface: #dddede;
        --error: #E74E3C;
        --on-error: #fff;
    }
}
</style>