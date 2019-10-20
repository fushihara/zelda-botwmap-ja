<template>
  <div v-bind:class="$style.root">
    <Icon-ele v-for="(data,index) in datas" v-bind:key="index" v-bind="data"></Icon-ele>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconEle from "./Icon.vue";

export default Vue.extend({
  components: { IconEle },
  data() {
    const colors = {
      水: "#4bc5ee",
      黄: "#ffad48",
      緑: "#3cbc75",
      紫: "#8e72b9",
      赤: "#ff422e"
    };
    const datas: { iconRaw: number, english: string, japanese: string, backgroundColor: string }[] = [];
    datas.push({ iconRaw: 0xe915, english: "Point of Interest", japanese: "", backgroundColor: colors.水 });
    datas.push({ iconRaw: 0xe912, english: "Memories", japanese: "", backgroundColor: colors.水 });
    datas.push({ iconRaw: 0xe91a, english: "Side-Quests", japanese: "", backgroundColor: colors.水 });
    datas.push({ iconRaw: 0xe91e, english: "Cracked Walls", japanese: "", backgroundColor: colors.水 });
    datas.push({ iconRaw: 0xe921, english: "Diary & Books", japanese: "", backgroundColor: colors.水 });
    datas.push({ iconRaw: 0xe922, english: "Cooking Pot", japanese: "料理鍋(焚き火除く)", backgroundColor: colors.水 });
    datas.push({ iconRaw: 0xe923, english: "Goddess Statue", japanese: "女神像", backgroundColor: colors.水 });
    datas.push({ iconRaw: 0xe909, english: "Equipment", japanese: "", backgroundColor: colors.黄 });
    datas.push({ iconRaw: 0xe91f, english: "Weapons", japanese: "", backgroundColor: colors.黄 });
    datas.push({ iconRaw: 0xe905, english: "Bows & Arrows", japanese: "", backgroundColor: colors.黄 });
    datas.push({ iconRaw: 0xe917, english: "Shields", japanese: "", backgroundColor: colors.黄 });
    datas.push({ iconRaw: 0xe91c, english: "Treasure Chest (Equip.)", japanese: "", backgroundColor: colors.黄 });
    datas.push({ iconRaw: 0xe90f, english: "Items", japanese: "", backgroundColor: colors.緑 });
    datas.push({ iconRaw: 0xe910, english: "Korok Seeds", japanese: "コロクの実", backgroundColor: colors.緑 });
    datas.push({ iconRaw: 0xe91c, english: "Treasure Chest (Non-Equip.)", japanese: "宝箱(消耗品)", backgroundColor: colors.緑 });
    datas.push({ iconRaw: 0xe903, english: "Blupee", japanese: "", backgroundColor: colors.緑 });
    datas.push({ iconRaw: 0xe911, english: "Locations", japanese: "場所一覧", backgroundColor: colors.紫 });
    datas.push({ iconRaw: 0xe91d, english: "Village", japanese: "村", backgroundColor: colors.紫 });
    datas.push({ iconRaw: 0xe916, english: "Sheikah Tower", japanese: "シーカータワー", backgroundColor: colors.紫 });
    datas.push({ iconRaw: 0xe919, english: "Shrine of Trials", japanese: "試練の祠", backgroundColor: colors.紫 });
    datas.push({ iconRaw: 0xe906, english: "Divine Beast", japanese: "", backgroundColor: colors.紫 });
    datas.push({ iconRaw: 0xe90c, english: "Great Fairy", japanese: "大妖精", backgroundColor: colors.紫 });
    datas.push({ iconRaw: 0xe91b, english: "Stables", japanese: "", backgroundColor: colors.紫 });
    datas.push({ iconRaw: 0xe907, english: "Enemies", japanese: "", backgroundColor: colors.赤 });
    datas.push({ iconRaw: 0xe908, english: "Enemy Camp", japanese: "", backgroundColor: colors.赤 });
    datas.push({ iconRaw: 0xe90d, english: "Guardian", japanese: "", backgroundColor: colors.赤 });
    datas.push({ iconRaw: 0xe926, english: "Wizzrobe", japanese: "", backgroundColor: colors.赤 });
    datas.push({ iconRaw: 0xe925, english: "Lynel", japanese: "", backgroundColor: colors.赤 });
    datas.push({ iconRaw: 0xe904, english: "Talus", japanese: "", backgroundColor: colors.赤 });
    datas.push({ iconRaw: 0xe924, english: "Hinox", japanese: "", backgroundColor: colors.赤 });
    datas.push({ iconRaw: 0xe904, english: "Molduga", japanese: "", backgroundColor: colors.赤 });
    return {
      datas: datas.map(a => {
        return {
          icon: `&#${a.iconRaw};`,
          ...a
        };
      })
    }
  }
});
</script>

<style lang="scss" module>
* {
  box-sizing: border-box;
}
.root {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 47px;
  > * {
    flex: 0 0 auto;
  }
}
</style>