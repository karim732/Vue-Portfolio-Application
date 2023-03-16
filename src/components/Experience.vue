<template>
  <v-container>
    <v-timeline side="end">
      <v-timeline-item
        width="100%"
        v-for="experience in experiences"
        :key="experience.title"
        :dot-color="experience.color"
      >
        <template v-slot:opposite v-if="!xsDevice">
          {{ experience.period }}
        </template>
        <v-card
          :id="experience.to"
          variant="tonal"
          class="mb-3"
          :color="experience.color"
        >
          <v-card-item>
            <v-card-title>{{ experience.title }}</v-card-title>

            <v-card-subtitle>{{
              experience.role + (xsDevice ? experience.period : "")
            }}</v-card-subtitle>
            <v-card-subtitle>{{ experience.technologies }}</v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <ul>
              <li v-for="li in experience.text" :key="li">{{ li }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          title: "Prodapt Solutions Private Limited",
          period: "Aug 2022 - Feb 2023",
          role: "Software Engineer - Front-end developer. ",
          technologies:
            "Vue.Js - Vuetify - JavaScript - Bootstrap - HTML - CSS",
          text: [
            "Created responsive web application.",
            "Included out of the box components of Vuetify.",
            "Handled Backend response.",
          ],
          to: "prodapt",
          color: "brand_color2",
        },
        {
          title: "Stoneman Multiverse Media",
          period: "Dec 2021 - Apr 2022",
          role: "Intern - Front-end developer.",
          technologies: "Bootstrap - JavaScript - HTML - CSS",
          text: ["Created responsive web application which is static."],
          to: "stoneman",
          color: "brand_color3",
        },
        {
          title: "Infelearn",
          period: "Jul 2021 - Aug 2021",
          role: "Intern - HR Internship.",
          technologies: "Communication skills - Team building",
          text: [
            "Organaised team meetings daily.",
            "Contacted college TPO's and explained about Infelearn.",
          ],
          to: "infelearn",
          color: "brand_color2",
        },
      ],
      page_details: {
        title: "Experience",
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
      },
    };
  },
  mounted() {
    this.$emit("contents", this.page_details);
  },
  computed: {
    xsDevice() {
      const { xs } = this.$vuetify.display;
      return xs ? true : false;
    },
  },
};
</script>
