<template>
  <v-card variant="tonal" color="brand_color2 ">
    <v-card-text v-for="item in contact" :key="item.title"
      ><v-icon size="40">{{ item.icon }}</v-icon
      >&nbsp; {{ item.title }}</v-card-text
    >
    <v-card-text
      ><v-icon size="40">mdi-linkedin</v-icon>&nbsp;
      <a
        href="http://www.linkedin.com/in/karimulla-shaik-97a58920b"
        target="_blank"
        >linkedin</a
      ></v-card-text
    >
    <v-card-actions class="d-flex justify-end">
      <v-btn color="red" @click="$emit('ChildClose')" class="text-btn"
        >Close</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        {
          title: "Shaik Karimulla",
          icon: "mdi-account",
        },
        {
          title: "karimshaik5252@gmail.com",
          icon: "mdi-gmail",
        },
        {
          title: "8096684840",
          icon: "mdi-phone",
        },
        {
          title:
            "5-87, main bazar, Appapuram, Palnadu, Andhra Pradesh, India - 522611",
          icon: "mdi-map-marker",
        },
      ],
    };
  },
};
</script>
