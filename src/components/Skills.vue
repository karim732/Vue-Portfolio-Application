<template>
  <v-container>
    <v-row id="skills">
      <v-col
        :cols="cols"
        v-for="domain in skills"
        :key="domain.title"
        class="mx-auto"
      >
        <v-sheet color="teal-lighten-5" class="pa-2" rounded>
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
  </v-container>
</template>

<script>
export default {
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
      contents: [
        {
          name: "Skills & Rating",
          to: "skills",
        },
        {
          name: "Documents",
          to: "documens",
        },
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
    this.$emit("contents", this.contents);
  },
};
</script>
