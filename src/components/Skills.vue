<template>
  <v-container>
    <v-row id="skills">
      <v-col
        :cols="cols"
        v-for="domain in skills"
        :key="domain.title"
        class="mx-auto"
      >
        <v-sheet color="teal-lighten-5" class="pa-2 h-100" rounded>
          <div class="text-h6 text-teal-darken-2">{{ domain.title }}</div>
          <div class="d-flex flex-wrap">
            <div
              v-for="skill in domain.details"
              :key="skill.title"
              class="mx-1 mb-2"
            >
              <v-chip
                prepend-icon="mdi-label"
                class="rounded-pill"
                :color="domain.color"
              >
                {{ skill.title }} </v-chip
              ><br />
              <div class="text-center">
                <v-rating
                  v-model="skill.rating"
                  color="yellow-accent-4"
                  active-color="yellow-accent-4"
                  readonly
                  size="18"
                ></v-rating>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <carousel :carousel-items="certifications" :delimiter="true" />
  </v-container>
</template>

<script>
import Carousel from "../unit-components/carousel.vue";

export default {
  components: { Carousel },
  data() {
    return {
      skills: [
        {
          title: "Frontend",
          color: "info",
          details: [
            {
              title: "VueJs",
              rating: 4,
            },
            {
              title: "Vuetify",
              rating: 4,
            },
            {
              title: "JavaScript",
              rating: 4,
            },
            {
              title: "Bootstrap",
              rating: 4,
            },
            {
              title: "HTML",
              rating: 4,
            },
            {
              title: "CSS",
              rating: 4,
            },
            {
              title: "Vuetify",
              rating: 4,
            },
          ],
        },
        {
          title: "Programming Languages",
          color: "success",
          details: [
            {
              title: "Python",
              rating: 4,
            },
            {
              title: "JavaScript",
              rating: 4,
            },
            {
              title: "Java",
              rating: 3,
            },
            {
              title: "C Programming",
              rating: 3,
            },
            {
              title: "C++",
              rating: 3,
            },
          ],
        },
        {
          title: "Others",
          color: "error",
          details: [
            {
              title: "Data Structures",
              rating: 4,
            },

            {
              title: "Artificial Intelligence",
              rating: 2,
            },
            {
              title: "Machine Learning",
              rating: 2,
            },
            {
              title: "Data Science",
              rating: 2,
            },
            {
              title: "Cloud",
              rating: 2,
            },
            {
              title: "Big Data",
              rating: 2,
            },
            {
              title: "IoT",
              rating: 2,
            },
            {
              title: "Data Base Management System",
              rating: 3,
            },
          ],
        },
      ],
      page_details: {
        title: "Experience",
        contents: [
          {
            name: "Skills & Rating",
            to: "skills",
          },
          {
            name: "Certifications",
            to: "certifications",
          },
        ],
      },
      certifications: [
        "src/assets/vue.jpg",
        "src/assets/coursera.jpg",
        "src/assets/dspython.jpg",
        "src/assets/nptel c.jpg",
        "src/assets/NPTEL Java.jpg",
        "src/assets/NPTEL DBMS.jpg",
        "src/assets/NPTEL IoT.jpg",
        "src/assets/ss.jpg",
        "src/assets/Udemy-YAML.jpg",
        "src/assets/Udemy-Oracle.jpg",
        "src/assets/github.jpg",
        "src/assets/coursera1.jpg",
        "src/assets/coursera2.jpg",
        "src/assets/coursera3.jpg",
        "src/assets/coursera4.jpg",
        "src/assets/coursera5.png",
        "src/assets/ai.jpg",
        "src/assets/python.jpg",
        "src/assets/c.jpg",
        "src/assets/cpp.jpg",
        "src/assets/arduino.jpg",
        "src/assets/codegnan.jpg",
        "src/assets/reactjs.png",
        "src/assets/django.png",
        "src/assets/effective leadership.jpg",
        "src/assets/presenting data.jpg",
        "src/assets/infelearn.jpg",
        "src/assets/infelearn letter.jpg",
        "src/assets/tcs.jpg",
        "src/assets/techgig.jpg",
        "src/assets/d2c.jpg",
        "src/assets/aau training.jpg",
        "src/assets/aau.jpg",
      ],
    };
  },
  computed: {
    cols() {
      const { xs } = this.$vuetify.display;
      return xs ? 12 : 6;
    },
  },
  mounted() {
    this.$emit("contents", this.page_details);
  },
};
</script>
