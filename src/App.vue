<template>
  <v-app>
    <v-app-bar app color="primary white--text">
      <div class="d-flex align-center">
        <h2>Dice Sorter</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn class="primary white--text" href="https://github.com/101ta28/ff14-dice-sort" target="_blank" text>
        <span class="mr-2">Source Code</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <InputArea />
    </v-main>

    <v-footer class="primary text-center white--text" padless>
      <v-col>
        記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。<br />
        Copyright (C) 2010 - {{ new Date().getFullYear() }} SQUARE ENIX CO.,
        LTD. All Rights Reserved.<br />
        ハッシュタグはこちら
        <a class="white--text"
          href="https://twitter.com/search?q=%23FF14%E3%83%80%E3%82%A4%E3%82%B9%E3%82%BD%E3%83%BC%E3%82%BF%E3%83%BC"
          target="_blank">#FF14ダイスソーター</a>
        <br />
        いいと思ったらシェアしていただけると喜びます！
        <v-btn class="primary white--text" text @click="twitterShare"><strong>シェアする</strong>
          <v-icon class="primary white--text">mdi-twitter</v-icon>
        </v-btn>
        <v-divider></v-divider>
        {{ new Date().getFullYear() }} — Ayuto Narutaki
        <v-btn href="https://twitter.com/AyutoNarutaki" target="_blank" text>
          <v-icon class="primary white--text">mdi-twitter</v-icon>
        </v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import InputArea from "./components/InputArea";

export default {
  name: "App",

  components: {
    InputArea,
  },

  data: () => ({}),
  methods: {
    twitterShare() {
      let tweet =
        "https://twitter.com/intent/tweet?text=" +
        "FF14ダイスソーター" +
        "&url=" +
        "https://101ta28.github.io/ff14-dice-sort/" +
        "&hashtags=FF14ダイスソーター" +
        "&via=AyutoNarutaki";
      window.open(tweet, "_blank");
    },
  },
};
</script>
