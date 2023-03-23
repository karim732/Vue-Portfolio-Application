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
import Carousel from "@/unit-components/Carousel";

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
        title: "Skills",
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
        "https://i.ibb.co/qksQCDQ/vue.jpg",
        "https://i.ibb.co/9ZvYQPx/coursera.jpg",
        "https://i.ibb.co/ctw0F5W/dspython.jpg",
        "https://i.ibb.co/nmHmb4G/nptel-c.jpg",
        "https://i.ibb.co/C6D29JK/NPTEL-Java.jpg",
        "https://i.ibb.co/TMLC92W/NPTEL-DBMS.jpg",
        "https://i.ibb.co/zGGQpm4/NPTEL-Io-T.jpg",
        "https://i.ibb.co/HKCHCjc/ss.jpg",
        "https://i.ibb.co/0FKt1Ry/Udemy-YAML.jpg",
        "https://i.ibb.co/L5zVCFv/Udemy-Oracle.jpg",
        "https://i.ibb.co/yP1Jjbf/github.jpg",
        "https://i.ibb.co/p1kjNWB/coursera1.jpg",
        "https://i.ibb.co/94hjrHn/coursera2.jpg",
        "https://i.ibb.co/2kK75Hn/coursera3.jpg",
        "https://i.ibb.co/Wv3Z586/coursera4.jpg",
        "https://i.ibb.co/5c10Cmm/coursera5.png",
        "https://i.ibb.co/W6Yj3PP/ai.jpg",
        "https://i.ibb.co/SQB2GXk/python.jpg",
        "https://i.ibb.co/KGpp1mX/c.jpg",
        "https://i.ibb.co/M7bjL3m/cpp.jpg",
        "https://i.ibb.co/rsZjYmD/arduino.jpg",
        "https://i.ibb.co/wMK0XfL/codegnan.png",
        "https://i.ibb.co/SKkgvLf/reactjs.png",
        "https://i.ibb.co/c3vPHVd/django.png",
        "https://i.ibb.co/zf7KX7J/effective-leadership.jpg",
        "https://i.ibb.co/5MDyJC5/presenting-data.jpg",
        "https://i.ibb.co/PFwBCDn/infelearn.jpg",
        "https://i.ibb.co/VHgDFmB/infelearn-letter.jpg",
        "https://i.ibb.co/bBc1X2x/tcs.jpg",
        "https://i.ibb.co/xJ4Hh2q/techgig.jpg",
        "https://i.ibb.co/g4gZrn0/d2c.jpg",
        "https://i.ibb.co/LgKZvGr/aau-training.jpg",
        "https://i.ibb.co/w4JqR2z/aau.jpg",
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
