<template>
  <v-footer class="d-flex flex-column m-1 rounded-top" color="brand_color1">
    <div class="d-flex w-100 align-center justify-center px-4">
      <v-btn
        v-for="icon in icons"
        :key="icon.icon"
        class="mx-4"
        :icon="icon.icon"
        variant="text"
        target="_blank"
        :href="icon.href"
        style="background-color: white"
      ></v-btn>
    </div>
    <v-sheet
      class="d-flex flex-wrap align-center justify-center bg-brand_color1 mt-2"
    >
      <v-sheet
        v-for="contact in contacts"
        :key="contact.title"
        class="bg-teal m-1 p-2 rounded-pill"
      >
        {{ contact.title }}
      </v-sheet>
    </v-sheet>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          title: "karimshaik5252@gmail.com",
        },
        {
          title: "8096684840",
        },
        {
          title: "5-87, main bazar, Appapuram, Andhra Pradesh, India - 522611",
        },
      ],
      icons: [
        {
          icon: "mdi-linkedin",
          href: "http://www.linkedin.com/in/karimulla-shaik-97a58920b",
        },
        {
          icon: "mdi-github",
          href: "https://github.com/karim732?tab=repositories",
        },
      ],
    };
  },
};
</script>
