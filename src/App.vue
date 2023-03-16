<template>
  <account-dialog v-if="dialog" :dialog="dialog" @close="dialog = ''" />
  <v-app>
    <!-- top nav -->
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

      <v-spacer v-if="!displayHamburg"></v-spacer>
      <v-toolbar-title class="text-brand_color3">{{
        page_details.title
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-icon
          icon="mdi-account"
          id="profile-activator"
          role="button"
          color="brand_color3"
          size="32"
        ></v-icon>
      </div>

      <v-menu activator="#profile-activator">
        <v-list>
          <v-list-item
            v-for="(item, index) in account"
            :key="index"
            @click="dialogComponent(item.title)"
          >
            {{ item.title }}
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- left nav -->
    <v-navigation-drawer v-model="drawer" location="left">
      <v-list nav active-color="brand_color2" bg-color="transparent">
        <v-list-item
          v-for="item in items"
          :key="item"
          :to="'/' + item.to"
          class="side-nav-left"
          >{{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- right nav -->
    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item v-for="content in page_details.contents" :key="content.to"
          ><a :href="'#' + content.to" class="text-decoration-none">{{
            content.name
          }}</a></v-list-item
        >
      </v-list>
    </v-navigation-drawer>
    <!-- body -->
    <v-main>
      <router-view @contents="(details) => (page_details = details)" />
    </v-main>
  </v-app>
</template>

<script>
import AccountDialog from "@/dialogs/AccountDialog.vue";
export default {
  components: { AccountDialog },
  data() {
    return {
      drawer: true,
      dialog: "",
      isContact: false,
      account: [
        {
          title: "Contact Me",
        },
        {
          title: "About",
        },
      ],

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
    };
  },

  computed: {
    displayHamburg() {
      const { mdAndDown } = this.$vuetify.display;
      return mdAndDown ? true : false;
    },
  },
  methods: {
    dialogComponent(title) {
      this.dialog = title === "\about\i" ? "about" : "contact-me";
    },
  },
};
</script>

<style scoped>
.side-nav-left:hover {
  background-color: transparent;
  color: black;
}
</style>
