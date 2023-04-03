<template>
  <v-container>
    <v-row class="ma-0 pt-2 ps-3">
      <v-col :cols="smallAndBelow" class="col--height overflow-hide-x">
        <v-row class="pa-1">
          <span class="my-auto">Rating :</span>
          <v-rating
            density="compact"
            v-model="averageRating"
            readonly
            half-increments
            :color="filterRatingColor(averageRating)"
          ></v-rating>
          <span class="my-auto">({{ presentNames.length }})</span>
        </v-row>
        <v-row class="pa-1">
          <v-form ref="form" @submit.prevent class="w-100">
            <v-text-field
              label="Name"
              variant="solo"
              density="compact"
              hide-details
              v-model="name"
              :rules="nameRules"
              required
            ></v-text-field>
            <v-rating
              class="my-2"
              density="compact"
              v-model="rating"
              hover
              half-increments
              :color="ratingColor"
            ></v-rating>

            <v-textarea
              label="Feedback on Technical skills/User experience"
              placeholder="Comments"
              variant="solo"
              density="compact"
              clearable
              counter
              auto-grow
              v-model="comments"
              :rules="nameRules"
              required
              hide-details
            ></v-textarea>
            <div
              v-if="nameExistWarning"
              class="text-subtitle text-red text-center mt-2"
            >
              Name already exists
            </div>
            <div class="d-flex justify-end mt-2">
              <v-btn color="success" class="text-btn" @click="validate">
                Submit
              </v-btn>
            </div>
          </v-form>
        </v-row>
      </v-col>
      <v-col class="col--height overflow-hide-x mt-1" :cols="smallAndBelow">
        <div class="text-h6">Reviews</div>
        <div v-if="error" class="text-center text-h6 text-warning">
          {{ error }}
        </div>
        <v-progress-circular
          v-if="isLoading"
          indeterminate
          color="teal-lighten-1"
          :size="49" class="content--center"
        ></v-progress-circular>

        <div
          v-else
          v-for="user in results"
          :key="user.name"
          class="card pa-2 mb-2 bg-teal-lighten-5"
        >
          <v-row class="ma-0">
            <span class="my-auto text-subtitle-1">{{ user.name }} :</span>
            <v-rating
              class="my-auto"
              density="compact"
              v-model="user.rating"
              readonly
              half-increments
              :color="filterRatingColor(user.rating)"
            ></v-rating>
          </v-row>
          <v-row class="ma-0">
            {{ user.comments }}
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-card-actions class="d-flex justify-end">
      <v-btn color="red" @click="$emit('ChildClose')" class="text-btn"
        >Close</v-btn
      >
    </v-card-actions>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      rating: null,
      comments: null,
      averageRating: 0,
      presentNames: [],
      showName: true,
      valid: true,
      ratingWarning: false,
      nameExistWarning: false,
      results: null,
      isLoading: false,
      error: "",
      nameRules: [(v) => !!v || "Required field"],
    };
  },
  computed: {
    smallAndBelow() {
      const { smAndDown } = this.$vuetify.display;
      return smAndDown ? 12 : 6;
    },
    ratingColor() {
      return this.ratingWarning ? "error" : "primary";
    },
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
      this.ratingWarning = this.rating <= 0;
      if (this.presentNames.includes(this.name.toLowerCase())) {
        this.nameExistWarning = true;
      } else if (valid && !this.ratingWarning) {
        fetch(
          "https://profile-74a04-default-rtdb.asia-southeast1.firebasedatabase.app/rating.json",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              name: this.name.toLowerCase(),
              rating: this.rating,
              comments: this.comments,
            }),
          }
        )
          .then((response) => {
            if (response.ok) {
              // ...
              this.name = this.rating = this.comments = null;
              this.nameExistWarning = false;
              this.fetchReviews();
            } else {
              throw new Error("Could not save data!");
            }
          })
          .catch((error) => {
            console.log(error);
            // this.error = error.message;
          });
      }
    },
    fetchReviews() {
      this.isLoading = true;
      fetch(
        "https://profile-74a04-default-rtdb.asia-southeast1.firebasedatabase.app/rating.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          this.averageRating = 0;
          this.presentNames = [];
          for (const id in data) {
            if (!this.presentNames.includes(data[id].name)) {
              this.averageRating = this.averageRating + data[id].rating;
              this.presentNames.push(data[id].name);
              results.push({
                name: this.indeterminateName(data[id].name),
                rating: data[id].rating,
                comments: data[id].comments,
              });
            }
          }
          this.averageRating = this.averageRating / this.presentNames.length;
          this.results = results;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = "Failed to fetch data - please try again later";
        });
    },
    filterRatingColor(value) {
      return value >= 3.5 ? "success" : value >= 2.5 ? "warning" : "error";
    },
    indeterminateName(name) {
      //..
      name = name[0].toUpperCase() + name.slice(1);
      let n = name.length;
      let indexes = [];
      while (indexes.length < 2) {
        let flag = this.twoRandomIndexes(n);
        if (name[flag] !== " " && !indexes.includes(flag)) indexes.push(flag);
      }
      indexes.sort();
      let finalName = "";
      for (let i in name) {
        if (indexes.includes(+i) || name[i] === " ")
          finalName = finalName + name[i];
        else finalName = finalName + "*";
      }
      return finalName;
    },
    twoRandomIndexes(max) {
      return Math.floor(Math.random() * max);
    },
  },
  beforeMount() {
    this.fetchReviews();
  },
};
</script>

<style scoped>
.col--height {
  max-height: 60vh;
  overflow-y: auto;
}

.overflow-hide-x {
  overflow-x: hidden;
}
</style>
