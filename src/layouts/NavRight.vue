<template>
  <v-navigation-drawer location="right">
    <v-list>
      <v-list-item v-for="content in pageDetails.contents" :key="content.to"
        ><a :href="'#' + content.to" class="text-decoration-none">{{
          content.name
        }}</a></v-list-item
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    pageDetails: {
      type: Object,
      required: true,
    },
  },
};
</script>
