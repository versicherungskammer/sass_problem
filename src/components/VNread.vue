<template>
  <div>
    <div class="mdc-card mdc-typography container">
      <div class="mdc-typography--headline3 title">Partnerdaten</div>
      <div class="mdc-form-field">
        <div class="mdc-text-field" ref="nameRef">
          <input
            disabled="true"
            type="text"
            id="my-text-field"
            class="mdc-text-field__input"
            :value="partner.name"
          >
          <label class="mdc-floating-label" for="my-text-field">Vollständiger Name</label>
          <div class="mdc-line-ripple"></div>
        </div>
      </div>
      <div class="mdc-form-field">
        <div class="mdc-text-field" ref="strasseRef">
          <input
            disabled="true"
            type="text"
            id="my-text-field"
            class="mdc-text-field__input"
            :value="partner.strasse"
          >
          <label class="mdc-floating-label" for="my-text-field">Strasse</label>
          <div class="mdc-line-ripple"></div>
        </div>
      </div>
    </div>
    <div class="mdc-form-field">
      <div class="mdc-text-field" ref="plzRef">
        <input
          disabled="true"
          type="text"
          id="my-text-field"
          class="mdc-text-field__input"
          :value="partner.postleitzahl"
        >
        <label class="mdc-floating-label" for="my-text-field">Postleitzahl</label>
        <div class="mdc-line-ripple"></div>
      </div>
    </div>
    <div class="mdc-form-field">
      <div class="mdc-text-field" ref="ortRef">
        <input
          disabled="true"
          type="text"
          id="my-text-field"
          class="mdc-text-field__input"
          :value="partner.ort"
        >
        <label class="mdc-floating-label" for="my-text-field">Ort</label>
        <div class="mdc-line-ripple"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MDCTextField } from "@material/textfield";
import { MDCRipple } from "@material/ripple";

export default Vue.extend({
  props: {
    partner: {
      default: null,
      type: Object
    }
  },

  mounted() {
    this.nameText = new MDCTextField(this.$refs.nameRef);
    this.strasseText = new MDCTextField(this.$refs.strasseRef);
    this.plzText = new MDCTextField(this.$refs.plzRef);
    this.ortText = new MDCTextField(this.$refs.ortRef);
  },
  destroyed() {
    this.nameText.destroy();
    this.strasseText.destroy();
    this.plzText.destroy();
    this.ortText.destroy();
  }
});
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field";
@import "@material/typography/mdc-typography";
</style>