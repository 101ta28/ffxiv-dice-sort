<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ mainText }}</p>
    <p>{{ subText1 }}</p>
    <v-textarea
      outlined
      clearable
      clear-icon="mdi-close-circle"
      name=""
      label="ダイス結果を含むログ"
      v-model="fflogs"
    ></v-textarea>
    <v-btn color="primary" @click="analyze">結果を表示する</v-btn>
    <v-col class="d-flex" cols="12" sm="6" />
    <p>{{ subText2 }}</p>
    <p>{{ subText3 }}</p>
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
      title: "FF14 Dice Sorter",
      mainText: "ダイスの結果を含むFF14のログを貼り付けてください。",
      subText1: "会話やエモートなどのログは自動で除外されます。",
      subText2: "下記の表からダイスの結果を確認できます。",
      subText3: "ヘッダーをクリックするとソートできます。",
      fflogs: `ダイス！ Alphinaud	LeveilleurAlexanderは、159を出した！
ダイス！ Alisaie LeveilleurBahamutは、	248を出した！
ダイス！ Fourchenault LeveilleurDurandalは、128を出した！
Hildibrand Mandervilleは紳士の舞を踊った。
ダイス！ Ameliance LeveilleurFenrirは、999を出した！`,
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
