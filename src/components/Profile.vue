<template>
  <v-container>
    <v-row style="position: relative" id="nameDesignation">
      <v-img
        height="200"
        cover
        src="https://i.morioh.com/2019/11/01/47e709b4198f.jpg"
      >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
      <v-avatar
        image="https://i.ibb.co/kG2PR8R/avatar.jpg"
        size="200"
        class="avatar--image"
      ></v-avatar>
    </v-row>
    <v-row v-if="isMobile" style="height: 90px" class=""> </v-row>
    <v-row>
      <v-spacer v-if="!isMobile"></v-spacer>
      <v-col>
        <div class="text-h3">{{ name }}</div>
        <div class="text-h5">{{ designation }}</div>
      </v-col>
    </v-row>
    <v-row id="summary">
      <v-col>
        {{ summary }}
      </v-col>
    </v-row>
    <v-row class="mt-3" id="hobbiesLanguages">
      <v-col
        :cols="isMobile ? 12 : 6"
        class="mt-2"
        v-for="detail in hobbies_languages"
        :key="detail.title"
      >
        <ul class="list-group">
          <li class="list-group-item bg-brand_color2 text-center">
            {{ detail.title }}
          </li>
          <li
            class="list-group-item"
            v-for="item in detail.details"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // emits: ["contents"],
  data() {
    return {
      name: "Shaik Karimulla",
      designation: "Software Engineer",
      summary:
        "Enthusiastic engineer eager to learn, grow and excel in software industry. Team player with strong communiction skills and also works well independently to solve problems and able to possess flexibility and logical thinking. I am a member of Codewars(a coding challenge site).",
      hobbies_languages: [
        {
          title: "Hobbies",
          details: [
            "Programming.",
            "Reading books.",
            "Playing Football and Cricket.",
            "Listening podcasts.",
          ],
        },
        {
          title: "Languages",
          details: [
            "English - Speak, Write, Read.",
            "Telugu - Speak, Write, Read.",
            "Hindi - Speak, Write, Read.",
            "Urdu - Speak.",
          ],
        },
      ],
      page_details: {
        title: "Profile",
        contents: [
          {
            name: "Name & Designation",
            to: "nameDesignation",
          },
          {
            name: "Summary",
            to: "summary",
          },
          {
            name: "Hobbies & Languages",
            to: "hobbiesLanguages",
          },
        ],
      },
    };
  },
  computed: {
    isMobile() {
      const { xs } = this.$vuetify.display;
      return xs ? true : false;
    },
  },
  mounted() {
    this.$emit("contents", this.page_details);
  },
};
</script>

<style scoped>
.avatar--image {
  border: 7px solid white;
  position: absolute;
  left: 30px;
  bottom: -50%;
}
</style>
