<template>
  <v-container>
    <v-card
      :id="experience.to"
      width="100%"
      variant="tonal"
      v-for="experience in experiences"
      :key="experience.title"
      class="mb-3"
    >
      <v-card-item>
        <v-card-title>{{ experience.title }}</v-card-title>

        <v-card-subtitle>{{ experience.role }}</v-card-subtitle>
        <v-card-subtitle>{{ experience.technologies }}</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <ul>
          <li v-for="li in experience.text" :key="li">{{ li }}</li>
        </ul>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          title: "Prodapt Solutions Private Limited",
          role: "Software Engineer - Front-end developer - Aug 2022 -> Feb2023",
          technologies:
            "Vue.Js - Vuetify - JavaScript - Bootstrap - HTML - CSS",
          text: [
            "Created responsive web application.",
            "Included out of the box components of Vuetify.",
            "Handled Backend response.",
          ],
          to: "prodapt",
        },
        {
          title: "Stoneman Multiverse Media",
          role: "Intern - Front-end developer - Dec 2021 -> Apr 2022",
          technologies: "Bootstrap - JavaScript - HTML - CSS",
          text: ["Created responsive web application which is static."],
          to: "stoneman",
        },
        {
          title: "Infelearn",
          role: "Intern - HR Internship - Jul 2021 -> Aug 2021",
          technologies: "Communication skills - Team building",
          text: [
            "Organaised team meetings daily.",
            "Contacted college TPO's and explained about Infelearn.",
          ],
          to: "infelearn",
        },
      ],
      contents: [
        {
          name: "Prodapt Solutions Private Limited",
          to: "prodapt",
        },
        {
          name: "Stoneman Multiverse Media",
          to: "stoneman",
        },
        {
          name: "Infelearn",
          to: "infelearn",
        },
      ],
    };
  },
  mounted() {
    this.$emit("contents", this.contents);
  },
};
</script>

<!-- <style scoped></style> -->
