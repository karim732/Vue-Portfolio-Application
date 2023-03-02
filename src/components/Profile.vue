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
        image=".././assets/avatar.jpg"
        size="200"
        class="avatar--image"
      ></v-avatar>
    </v-row>
    <v-row v-if="isMobile" style="height: 90px" class=""> </v-row>
    <v-row>
      <v-spacer v-if="!isMobile"></v-spacer>
      <v-col>
        <div class="text-h3">Shaik Karimulla</div>
        <div class="text-h5">Software Engineer</div>
      </v-col>
    </v-row>
    <v-row id="summary">
      <v-col>
        Enthusiastic engineer eagar to learn, grow and excel in software
        industry. I am a team player with strong communiction skills and also
        works well independently to solve problems. I am able to possess
        flexibility and logical thinking. I am a member of Codewars(a coding
        challenge site).
      </v-col>
    </v-row>
    <v-row class="mt-3" id="hobbiesLanguages">
      <v-col :cols="isMobile ? 12 : 6" class="mt-2">
        <ul class="list-group">
          <li class="list-group-item bg-brand_color2 text-center">Hobbies</li>
          <li class="list-group-item" v-for="hobby in hobbies" :key="hobby">
            {{ hobby }}
          </li>
        </ul>
      </v-col>
      <v-col :cols="isMobile ? 12 : 6" class="mt-2">
        <ul class="list-group">
          <li class="list-group-item bg-brand_color2 text-center">Languages</li>
          <li
            class="list-group-item"
            v-for="language in languages"
            :key="language"
          >
            {{ language }}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  emits: ["contents"],
  data() {
    return {
      hobbies: [
        "Programming",
        "Reading books",
        "Playing Football and Cricket",
        "Listening podcasts",
      ],
      languages: [
        "English - Speak, Write, Read",
        "Telugu - Speak, Write, Read",
        "Hindi - Speak, Write, Read",
        "Urdu - Speak",
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
      const { mobile } = this.$vuetify.display;
      return mobile ? true : false;
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
