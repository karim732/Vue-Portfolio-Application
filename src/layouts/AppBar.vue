<template>
  <account-dialog v-if="dialog" :dialog="dialog" @close="dialog = ''" />
  <v-app-bar
    color="brand_color1"
    prominent
    class="pe-2"
    :class="{ 'ps-2': !displayHamburg }"
  >
    <v-app-bar-nav-icon
      v-if="displayHamburg"
      variant="text"
      @click.stop="$emit('hamburgClicked')"
      color="brand_color3"
      class="ms-0"
    ></v-app-bar-nav-icon>
    <v-img
      src="@/assets/krm icon1.png"
      class="krm--logo"
      @click="$router.push('/')"
    ></v-img>

    <v-toolbar-title class="text-brand_color3">{{
      pageDetails.title
    }}</v-toolbar-title>

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
          @click="dialogComponent(item)"
        >
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import AccountDialog from "@/dialogs/AccountDialog.vue";
import router from "@/router";
export default {
  components: { AccountDialog },
  emits: ["hamburgClicked"],
  props: {
    pageDetails: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: "",
      account: [
        {
          title: "About",
          component: "about",
        },
        {
          title: "Rate",
          component: "Rating",
        },
      ],
    };
  },
  computed: {
    displayHamburg() {
      const { mdAndDown } = this.$vuetify.display;
      return mdAndDown;
    },
  },
  methods: {
    dialogComponent(item) {
      this.dialog = item.component;
    },
  },
};
</script>
