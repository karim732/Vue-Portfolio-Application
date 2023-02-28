<template>
  <v-app>
    <v-app-bar color="brand_color1" prominent>
      <v-app-bar-nav-icon
        v-if="displayHamburg"
        variant="text"
        @click.stop="drawer = !drawer"
        color="brand_color3"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-brand_color3">Profile</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left">
      <v-list>
        <v-list-item v-for="item in items" :key="item" :to="'/' + item.to"
          >{{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item v-for="content in contents" :key="content.to"
          ><a :href="'#' + content.to" class="text-decoration-none">{{
            content.name
          }}</a></v-list-item
        >
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-responsive>
        <router-view @contents="(arr) => (contents = arr)" />
      </v-responsive>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      {
        title: "Profile",
        to: "profile",
      },
      {
        title: "Experience",
        to: "experience",
      },
      {
        title: "Projects",
        to: "projects",
      },
      {
        title: "Education",
        to: "education",
      },
      {
        title: "Skills",
        to: "skills",
      },
    ],
    contents: [],
  }),

  computed: {
    displayHamburg() {
      const { mdAndDown } = this.$vuetify.display;
      return mdAndDown ? true : false;
    },
  },
};
</script>
