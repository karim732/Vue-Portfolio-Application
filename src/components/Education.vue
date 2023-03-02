<template>
  <v-container>
    <v-expansion-panels variant="popout" id="details">
      <v-expansion-panel v-for="item in education" :key="item.title">
        <v-expansion-panel-title color="brand_color1"
          ><v-icon>mdi-school</v-icon>&nbsp;
          {{ item.title }}</v-expansion-panel-title
        >
        <v-expansion-panel-text>
          <v-card>
            <v-card-item>
              <v-card-title>{{ item.card_title }} </v-card-title>
              <div class="text-caption">
                {{ item.degree }} <br />
                {{ item.period }}
              </div>
              <v-card-subtitle>{{ item.address }}</v-card-subtitle>
              <v-card-text class="py-2">
                <div v-for="text in item.text" :key="text">- {{ text }}</div>
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-carousel
      cycle
      delimiter-icon="mdi-rectangle"
      color="brand_color1"
      class="mt-4"
      height="400"
      id="documents"
    >
      <template v-slot:prev="{ props }">
        <v-btn
          variant="elevated"
          color="brand_color1"
          @click="props.onClick"
          class="text-barnd_color3"
          ><v-icon color="brand_color3" size="x-large"
            >mdi-arrow-left</v-icon
          ></v-btn
        >
      </template>
      <template v-slot:next="{ props }">
        <v-btn variant="elevated" color="brand_color1" @click="props.onClick"
          ><v-icon color="brand_color3" size="x-large"
            >mdi-arrow-right</v-icon
          ></v-btn
        >
      </template>
      <v-carousel-item
        v-for="memo in memos"
        :key="memo"
        :src="memo"
        class="bg-brand_color2"
      >
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      education: [
        {
          title: "Bachelor's Degree",
          card_title: "RVR & JC College of Engineering",
          degree: "B-Tech - Computer Science and Engineering",
          period: "2018-2022",
          address: "Chowdavaram :: Guntur-522019 :: Andhra Pradesh :: India",
          text: [
            "Graduated with 8.2 CGPA.",
            "Graduated with skills required to fit in IT Industry.",
            "Along with fundamentals in Data Science, Artificial Intelligence, Machine Learning, Cloud, Data Engineering and IoT.",
          ],
        },
        {
          title: "High School Diploma or GED",
          card_title: "NRI Vidya JR College",
          degree: "Intermediate - Mathematics, Physics, Chemistry",
          period: "2016-2018",
          address: "Guntur-522019 :: Andhra Pradesh :: India",
          text: [
            "Passed out with 96.6%",
            "Acquired academic knowledge in Mathematics, Physics and Chemistry.",
            "Along with practical knowledge in Physics and Chemistry.",
          ],
        },
        {
          title: "High school",
          card_title: "ST Xavier's High School",
          degree: "Secondary Education",
          period: "2015-2016",
          address: "Chilakaluripet :: Guntur-522019 :: Andhra Pradesh ::India",
          text: [
            "Obtained 9.3 CGPA.",
            "Acquired secondary level knowledge in Mathematics, General Science and Social Studies",
            "Participated in extracurricular activities like intra and inter School Cricket, Football and Volleyball tournaments, Quizzes, Art, Elocution and Spell bee competitions.",
          ],
        },
      ],
      memos: [
        "src/assets/10th.jpg",
        "src/assets/12th.jpg",
        "src/assets/semester - 1.jpg",
        "src/assets/semester - 2.jpg",
        "src/assets/semester - 3.jpg",
        "src/assets/semester - 4.jpg",
        "src/assets/semester - 5.jpg",
        "src/assets/semester - 6.jpg",
        "src/assets/semester - 7.png",
        "src/assets/semester - 8.png",
      ],
      page_details: {
        title: "Experience",
        contents: [
          {
            name: "Academic Details",
            to: "details",
          },
          {
            name: "Documents",
            to: "documents",
          },
        ],
      },
    };
  },
  mounted() {
    this.$emit("contents", this.page_details);
  },
};
</script>

<style scoped>
.v-card--variant-elevated {
  box-shadow: none;
}
</style>
