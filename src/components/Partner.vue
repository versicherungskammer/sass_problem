<template>
  <div>
    <VNwrite v-if="isVNWrite"></VNwrite>
    <VNread v-if="isVNRead" v-bind:partner="partner"></VNread>
  </div>
</template>

<script lang="ts">
import VNwrite from "./VNwrite.vue";
import VNread from "./VNread.vue";
import Vue from "vue";

export default Vue.extend({
  components: { VNwrite, VNread },

  data() {
    return {
      partner: {
        name: "Zuchtverband",
        strasse: "Zuchverbandstr. 1",
        postleitzahl: "80000",
        ort: "Zuchthausen"
      }
    };
  },

  props: {
    backend: {
      default: "localhost:8083/partner",
      type: String
    },

    title: {
      default: "Adressen",
      type: String
    },

    interface: {
      default: "VN",
      type: String
    },

    modus: {
      default: "w",
      type: String
    }
  },

  computed: {
    isVNWrite: function() {
      return this.interface === "VN" && this.modus === "w";
    },

    isVNRead: function() {
      return this.interface === "VN" && this.modus === "r";
    }
  },
  methods: {}, //EOF Method

  mounted() {
    console.log(this.$props);
  }
});
</script>
<!-- Default behavior of this component -->
<!-- Only importing the css needed not more -->
<!-- The imports are treated by webpack >>>>>> the assets-Dir is preprocessed by webpack-->
<style >
</style>

