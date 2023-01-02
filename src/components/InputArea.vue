<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ mainText }}</p>
    <p>{{ subText1 }}</p>
    <v-textarea outlined clearable clear-icon="mdi-close-circle" name="" label="ダイス結果を含むログ"
      v-model="fflogs"></v-textarea>
    <v-btn color="primary" @click="analyze">結果を表示する</v-btn>
    <v-col class="d-flex" cols="12" sm="6" />
    <p>{{ subText2 }}</p>
    <p>{{ subText3 }}</p>
    <v-data-table :headers="headers" :items="data" class="elevation-1" hide-default-footer
      disable-pagination no-data-text="ダイスの結果が含まれていません"></v-data-table>
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
      fflogs: `ダイス！ Alphinaud	Leveilleurは、159を出した！
<Alisaie LeveilleurBahamut> ダイス！ MAX999  248
ダイス！ Fourchenault LeveilleurDurandalは、128を出した！
Hildibrand Mandervilleは紳士の舞を踊った。
999面ダイス！ Ameliance LeveilleurFenrirは、999を出した！`,
      headers: [
        { text: "Number", value: "number" },
        { text: "First name", align: "start", value: "firstname" },
        { text: "Last name", value: "lastname" },
        { text: "World", value: "world" },
        { text: "Dice", value: "dice" },
        { text: "Limit", value: "limit" },
      ],
      data: [
        {
          number: 1,
          firstname: "Alphinaud",
          lastname: "Leveilleur",
          world: "Home World",
          dice: 159,
          limit: 999,
        },
        {
          number: 2,
          firstname: "Alisaie",
          lastname: "Leveilleur",
          world: "Bahamut",
          dice: 248,
          limit: 999,
        },
        {
          number: 3,
          firstname: "Fourchenault",
          lastname: "Leveilleur",
          world: "Durandal",
          dice: 128,
          limit: 999,
        },
        {
          number: 4,
          firstname: "Ameliance",
          lastname: "Leveilleur",
          world: "Fenrir",
          dice: 999,
          limit: 999,
        },
      ],
    };
  },
  methods: {
    analyze: function () {
      let data = [];
      let num = 0;
      this.fflogs.split("\n").forEach((line) => {
        // デフォルト上限値
        let limit = 999;
        // ダイスを振った人ログを抽出
        if (/^.+(面ダイス！ ).+(は、).+(を出した！)/.test(line)) {
          num++;
          let rawData = line.split(/([A-Z!-/:-@¥[-`{-~][a-z!-/:-@¥[-`{-~]+)/);
          // ダイスを振った人のデータを作成
          if (rawData.length === 5) {
            let limit = rawData[0].replace(/[^0-9]/g, "");
            let dice = rawData[4].replace(/[^0-9]/g, "");
            data.push({
              number: num,
              firstname: rawData[1],
              lastname: rawData[3],
              world: "Home World",
              dice: dice,
              limit: limit
            });
          } else {
            let limit = rawData[0].replace(/[^0-9]/g, "");
            let dice = rawData[6].replace(/[^0-9]/g, "");
            data.push({
              number: num,
              firstname: rawData[1],
              lastname: rawData[3],
              world: rawData[5],
              dice: dice,
              limit: limit
            });
          }
        }
        if (/^.+(ダイス！ MAX).+(  )./.test(line)) {
          num++;
          let rawData = line.split(/([A-Z!-/:-@¥[-`{-~][a-z!-/:-@¥[-`{-~]+)/);
          if (rawData.length === 5) {
            let limit = rawData[4].slice(9).split("  ")[0];
            let dice = rawData[4].slice(9).split("  ")[1];
            data.push({
              number: num,
              firstname: rawData[1].replace(/[^a-zA-Z]/g, ""),
              lastname: rawData[3].replace(/[^a-zA-Z]/g, ""),
              world: "Home World",
              dice: dice,
              limit: limit
            });
          } else {
            let limit = rawData[6].slice(9).split("  ")[0];
            let dice = rawData[6].slice(9).split("  ")[1];
            data.push({
              number: num,
              firstname: rawData[1].replace(/[^a-zA-Z]/g, ""),
              lastname: rawData[3].replace(/[^a-zA-Z]/g, ""),
              world: rawData[5].replace(/[^a-zA-Z]/g, ""),
              dice: dice,
              limit: limit
            });
          }
        }
        if (/(^ダイス！ ).+(は、).+(を出した！)/.test(line)) {
          num++;
          let rawData = line.split(/([A-Z!-/:-@¥[-`{-~][a-z!-/:-@¥[-`{-~]+)/);
          // ダイスを振った人のデータを作成
          if (rawData.length === 5) {
            let dice = rawData[4].replace(/[^0-9]/g, "");
            data.push({
              number: num,
              firstname: rawData[1],
              lastname: rawData[3],
              world: "Home World",
              dice: dice,
              limit: limit
            });
          } else {
            let dice = rawData[6].replace(/[^0-9]/g, "");
            data.push({
              number: num,
              firstname: rawData[1],
              lastname: rawData[3],
              world: rawData[5],
              dice: dice,
              limit: limit
            });
          }
        }
      });
      this.data = data;
    },
  },
};
</script>
