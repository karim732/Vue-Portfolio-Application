<template>
  <v-app>
    <v-app-bar
      color="brand_color1"
      prominent
      class="pe-2"
      :class="{ 'ps-2': !displayHamburg }"
    >
      <v-app-bar-nav-icon
        v-if="displayHamburg"
        variant="text"
        @click.stop="drawer = !drawer"
        color="brand_color3"
        class="ms-0"
      ></v-app-bar-nav-icon>

      <v-img
        src="../src/assets/krmlogo.jpg"
        class="h-50 shrink krm--logo"
      ></v-img>

      <v-spacer></v-spacer>
      <v-toolbar-title class="text-brand_color3">{{
        page_details.title
      }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-icon
        icon="mdi-account"
        id="profile-activator"
        role="button"
        color="brand_color3"
        size="32"
      ></v-icon>

      <v-menu activator="#profile-activator">
        <v-list>
          <v-list-item to="/"> Contact Me </v-list-item>
          <v-divider class="m-0"></v-divider>
          <v-list-item to="/">Technologies </v-list-item>
        </v-list>
      </v-menu>
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
        <v-list-item v-for="content in page_details.contents" :key="content.to"
          ><a :href="'#' + content.to" class="text-decoration-none">{{
            content.name
          }}</a></v-list-item
        >
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-responsive>
        <router-view @contents="(details) => (page_details = details)" />
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
    page_details: {},
  }),

  computed: {
    displayHamburg() {
      const { mdAndDown } = this.$vuetify.display;
      return mdAndDown ? true : false;
    },
  },
};
</script>
