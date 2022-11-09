<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <v-textarea
      solo
      name=""
      label="ログを貼り付けてください"
      v-model="fflogs"
    ></v-textarea>
    <v-btn color="primary" @click="analyze">結果を表示する</v-btn>
    <v-col class="d-flex" cols="12" sm="6" />
    <v-data-table
      :headers="headers"
      :items="data"
      class="elevation-1"
      hide-default-footer
      disable-pagination
    ></v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "FF14 Dice Sort",
      text: "ダイスを振った後のFF14のログを貼り付けてください。",
      fflogs: "",
      headers: [
        { text: "First name", align: "start", value: "firstname" },
        { text: "Last name", value: "lastname" },
        { text: "World", value: "world" },
        { text: "Dice", value: "dice" },
      ],
      data: [
        {
          firstname: "Alphinaud",
          lastname: "Leveilleur",
          world: "Alexander",
          dice: 159,
        },
        {
          firstname: "Alisaie",
          lastname: "Leveilleur",
          world: "Bahamut",
          dice: 248,
        },
        {
          firstname: "Fourchenault",
          lastname: "Leveilleur",
          world: "Durandal",
          dice: 128,
        },
        {
          firstname: "Ameliance",
          lastname: "Leveilleur",
          world: "Fenrir",
          dice: 999,
        },
      ],
    };
  },
  methods: {
    analyze: function () {
      let data = [];
      this.fflogs.split("\n").forEach((line) => {
        // ダイスを振った人ログを抽出
        if (/(^ダイス！ ).+(は、).+(を出した！)/.test(line)) {
          let rawData = line.split(/([A-Z!-/:-@¥[-`{-~][a-z!-/:-@¥[-`{-~]+)/);
          console.log(rawData);
          // ダイスを振った人のデータを作成
          if (rawData.length === 5) {
            let dice = rawData[4].replace(/[^0-9]/g, "");
            data.push({
              firstname: rawData[1],
              lastname: rawData[3],
              world: "Home World",
              dice: dice,
            });
          } else {
            let dice = rawData[6].replace(/[^0-9]/g, "");
            data.push({
              firstname: rawData[1],
              lastname: rawData[3],
              world: rawData[5],
              dice: dice,
            });
          }
        }
      });
      this.data = data;
    },
  },
};
</script>
