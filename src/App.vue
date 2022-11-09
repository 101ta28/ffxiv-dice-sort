<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>FF14 Dice Sort</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Source Code</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <InputArea />
    </v-main>
  </v-app>
</template>

<script>
import InputArea from "./components/InputArea";

export default {
  name: "App",

  components: {
    InputArea,
  },

  data: () => ({
    //
  }),
};
</script>
