<template>
  <v-carousel
    cycle
    :hide-delimiters="delimiter"
    delimiter-icon="mdi-rectangle"
    color="brand_color1"
    class="mt-4 rounded"
    height="400"
    id="documents"
  >
    <template v-slot:prev="{ props }">
      <v-btn
        variant="elevated"
        color="brand_color1"
        @click="props.onClick"
        class="text-barnd_color3"
        ><v-icon color="brand_color3" size="x-large"
          >mdi-arrow-left</v-icon
        ></v-btn
      >
    </template>
    <template v-slot:next="{ props }">
      <v-btn variant="elevated" color="brand_color1" @click="props.onClick"
        ><v-icon color="brand_color3" size="x-large"
          >mdi-arrow-right</v-icon
        ></v-btn
      >
    </template>
    <v-carousel-item
      v-for="(item, index) in carouselItems"
      :key="item"
      :src="item"
      class="bg-teal-lighten-5"
    >
      <span class="ma-2 text-teal-darken-2">
        {{ index + 1 + " of " + carouselItems.length }}</span
      >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    carouselItems: {
      type: Array,
      required: true,
    },
    delimiter: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
