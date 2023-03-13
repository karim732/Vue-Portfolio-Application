<template>
  <v-container>
    <v-card
      :id="project.to"
      width="100%"
      variant="tonal"
      v-for="project in projects"
      :key="project.title"
      class="mb-3"
      :color="project.color"
    >
      <v-card-item
        :class="{
          'bg-brand_color2': project.bg,
          'bg-brand_color3': !project.bg,
        }"
      >
        <v-card-title
          >{{ project.title }}
          <a
            :href="project.link"
            target="_blank"
            v-if="project.link"
            class="ms-4"
          >
            Link</a
          ></v-card-title
        >
      </v-card-item>

      <v-card-text>
        <v-card-subtitle class="fs-6 my-1">{{ project.role }}</v-card-subtitle>
        <ul>
          <li v-for="li in project.text" :key="li">{{ li }}</li>
        </ul>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "User Profile",
          role: "solo",
          text: [
            "Gives all the details of the user.",
            "Best suits for IT employees.",
            "VueJs, Vuetify, JavaScript, Bootstrap, HTML, CSS",
          ],
          link: "<a href='https://https://karim-shaik.netlify.app/'>Link</a>",
          to: "userProfile",
          color: "brand_color2",
          bg: true,
        },
        {
          title: "Xiotra - Easy Learning",
          role: "Team Member - Front-end developer",
          text: [
            "Provides simplest interface and finest content with enormously vast amount of formulas and easy learning techniques.",
            "HTML, CSS, Bootstrap, JavaScript, PHP, Mysql.",
          ],
          link: "<a href='https://karim732.github.io/xiotra.com'>Link</a>",
          to: "xiotra",
          color: "brand_color3",
          bg: false,
        },
        {
          title: "Social Distancing Violation Detection System",
          role: "Team Member",
          text: [
            "We will be using YOLOv3 object detector to detect people.",
            "By using Euclidean Distance method, it will detect that persons maintaining 2m or not?",
            "If they are maintaining 2m distance, they will be shown in Green Rectangular box, else in Red rectangular box.",
            "Count of people who are violating social distancing is also show.",
          ],
          to: "socialDistancing",
          color: "brand_color2",
          bg: true,
        },
      ],
      page_details: {
        title: "Projects",
        contents: [
          {
            name: "User Profile",
            to: "userProfile",
          },
          {
            name: "Xiotra",
            to: "xiotra",
          },
          {
            name: "Social Distancing Violation Detection System",
            to: "socialDistancing",
          },
        ],
      },
    };
  },
  mounted() {
    this.$emit("contents", this.page_details);
  },
};
</script>
