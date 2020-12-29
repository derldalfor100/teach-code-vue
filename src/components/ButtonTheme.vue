<template>
    <div class="container">
        <h1>Title</h1>
        <section>
            <h3>Subtitle</h3>
            <button @click="onClick()">{{ injectedValue.themeName }}</button>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component, Inject } from "vue-property-decorator";
@Component
export default class ButtonTheme extends Vue {
  @Inject("themeSharedState") private injectedValue!: any;

  onClick() {

      this.injectedValue.setTheme();
  }
}
</script>

<style scoped lang="scss">
.container {
    background: var(--background);
    color: var(--on-background);
    padding: 25px;
    margin: 5px;
}

section {
    background: var(--primary);
    color: var(--on-primary);
    padding: 25px;
}
</style>