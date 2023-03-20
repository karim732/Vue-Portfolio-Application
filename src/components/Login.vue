<template>
  <v-container
    fluid
    class="bg-brand_color1"
    style="max-height: 100vh; position: relative; overflow: hidden"
  >
    <v-row v-for="n in 10" :key="n" class="">
      <v-col
        v-for="n in isMd"
        :key="n"
        class="ma-2 bg-brand_color2 login-box"
      ></v-col>
    </v-row>
  </v-container>
  <v-sheet width="300" class="mx-auto login--form pa-5">
    <v-form ref="form" @submit.prevent="validate">
      <div class="text-h6 text-center">Username</div>
      <v-text-field
        variant="solo"
        v-model="username"
        :rules="nameRules"
      ></v-text-field>
      <div class="text-h6 text-center">Password</div>
      <v-text-field
        variant="solo"
        type="password"
        v-model="password"
        :rules="nameRules"
      ></v-text-field>
      <div v-if="showError" class="text-error text-center">Login failed</div>
      <v-btn
        type="submit"
        block
        class="mt-2"
        color="brand_color1"
        @click="validate"
        >Submit</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  emits: {
    contents: null,
  },
  data() {
    return {
      username: "",
      password: "",
      showError: false,
      nameRules: [(v) => !!v || ""],
    };
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        if (this.username.toLowerCase() === "karim" && this.password === "1234")
          localStorage.setItem("isLoggedIn", true);
        this.$router.push("/profile");
      } else {
        this.showError = true;
      }
    },
  },
  computed: {
    isMd() {
      const { mdAndDown } = this.$vuetify.display;
      return mdAndDown ? 4 : 8;
    },
  },
};
</script>

<style scoped>
.login-box {
  height: 53px;
  width: 53px;
  transition: height 10ms ease-out, transform 10s ease-out;
}
.login-box:hover {
  height: 60px;
  transform: scale(1.1, 1.1);
  /* transform: translate3d(1,1,1); */
  box-shadow: 3px 3px 20px 5px rgba(23, 133, 130, 0.8),
    -3px -3px 20px 5px rgba(23, 133, 130, 0.8);
}

.login--form {
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(var(--v-theme-surface));
  border-color: transparent;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
</style>

<!-- rgba(23, 133, 130, 0.5) -->
