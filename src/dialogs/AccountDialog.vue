<template>
  <teleport to="body">
    <div class="backdrop" @click="$emit('close')"></div>
    <dialog open>
      <v-card variant="tonal" color="brand_color2">
        <component :is="dialog"></component>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="red" @click="$emit('close')">Close</v-btn>
        </v-card-actions>
      </v-card>
    </dialog>
  </teleport>
</template>

<script>
import ContactMe from "@/dialogs/ContactMe.vue";
import About from "@/dialogs/About.vue";
export default {
  components: { ContactMe, About },
  props: {
    dialog: {
      type: String,
      required: true,
    },
  },
  emits: ["close"],
};
</script>

<style scoped>
.v-card .v-btn__content {
  color: red;
}
.backdrop {
  position: fixed;
  display: flex !important;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1040 !important;
}
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 1040;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
