<template>
  <div>
    <br />
    <CommandLine type="input" @pressedEnterKey="onEnterKey" text="typehelp"></CommandLine>
    <CommandLine type="input" @pressedEnterKey="onEnterKey" text="typebored"></CommandLine>

    <CommandLine
      v-for="history in historyList"
      :key="history.type"
      :type="history.type"
      @pressedEnterKey="onEnterKey"
      :text="history.text"
    ></CommandLine>
    <!-- <CommandLine type="output" @pressedEnterKey="onEnterKey" text="help"></CommandLine> -->
  </div>
</template>

<script>
import CommandLine from "@/components/command/CommandLine.vue";
export default {
  name: "Command",
  data() {
    return {
      historyList: [{ type: "input" }],
    };
  },
  components: {
    CommandLine,
  },
  methods: {
    onEnterKey(value) {
      if (value == "clear") {
        this.historyList = [];
      }
      this.$delete(this.historyList, this.historyList.length - 1);
      console.log("onEnterKey", value);
      var input = { type: "input", text: value };
      var output = { type: "output", text: value };
      this.historyList.push(input);
      this.historyList.push(output);
      this.historyList.push({ type: "input" });
    },
  },
};
</script>

<style scoped>
</style>