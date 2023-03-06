<template>
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
            "5-87, main bazar, Appapuram, Palnadu, Andhra Pradesh - 522611",
          icon: "mdi-map-marker",
        },
      ],
    };
  },
};
</script>
