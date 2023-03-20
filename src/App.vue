<template>
  <v-app>
    <!-- <app-bar
      :page-details="page_details"
      @hamburg-clicked="drawer = !drawer"
    ></app-bar> -->
    <!-- left nav -->
    <!-- <nav-left :drawer="drawer"></nav-left> -->
    <!-- right nav -->
    <!-- <nav-right :page-details="page_details"></nav-right> -->
    <!-- body -->
    <RouterView
      name="Header"
      :page-details="page_details"
      @hamburg-clicked="drawer = !drawer"
    ></RouterView>
    <RouterView name="LeftSidebar" :drawer="drawer"></RouterView>
    <RouterView name="RightSidebar" :page-details="page_details"></RouterView>
    <v-main>
      <router-view @contents="(details) => (page_details = details)" />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/layouts/AppBar.vue";
import NavLeft from "@/layouts/NavLeft.vue";
import NavRight from "@/layouts/NavRight.vue";
export default {
  components: { AppBar, NavLeft, NavRight },
  data() {
    return {
      drawer: false,
      page_details: {},
    };
  },
};
</script>

<style scoped>
.side-nav-left:hover {
  background-color: transparent;
  color: black;
}
</style>
