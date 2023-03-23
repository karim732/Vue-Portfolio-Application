<template>
  <v-navigation-drawer v-model="showLeftNav" location="left">
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
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      showLeftNav: null,
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
    };
  },
  watch: {
    drawer(newvalue) {
      this.showLeftNav = newvalue;
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
