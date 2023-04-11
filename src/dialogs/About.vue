<template>
  <v-card variant="tonal" color="brand_color2 ">
    <div v-for="item in about" :key="item.title">
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
    </div>
    <v-card-actions class="d-flex justify-end">
      <v-btn color="red" @click="$emit('ChildClose')" class="text-btn"
        >Close</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      about: [
        { title: "VueJs 3", subtitle: "Options API, JavaScript, Vue router." },
        {
          title: "Vuetify 3",
          subtitle: "Responsive, MDI - icons.",
        },
        { title: "Database", subtitle: "Firebase" },
      ],
    };
  },
};
</script>
