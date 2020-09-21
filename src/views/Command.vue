<template>
   <div>
      <br />
      <CommandLine type="input" @pressedEnterKey="onEnterKey" text="typehelp"></CommandLine>
      <CommandLine type="input" @pressedEnterKey="onEnterKey" text="typebored"></CommandLine>

      <CommandLine
         v-for="history in historyList"
         :key="history.id"
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
         var splitCommand = value.split(" ");
         if (value == "clear") {
            this.historyList = [];
         }
         if (value == "bored") {
            this.$router.push({ name: "home" });
         }

         if (splitCommand[0] == "warpto") {
            if (
               splitCommand.length > 1 &&
               (splitCommand[1] == "ui" ||
                  splitCommand[1] == "about" ||
                  splitCommand[1] == "services")
            ) {
               const routeVal =
                  splitCommand[1] == "ui" ? "home" : splitCommand[1];
               this.$router.push({ name: routeVal });
            }
         }
         this.$delete(this.historyList, this.historyList.length - 1);
         console.log("onEnterKey", value);
         var input = {
            id: this.historyList.length + 1,
            type: "input",
            text: value,
         };
         var output = {
            id: this.historyList.length + 2,
            type: "output",
            text: value,
         };
         this.historyList.push(input);
         this.historyList.push(output);
         this.historyList.push({
            id: this.historyList.length + 3,
            type: "input",
         });
      },
   },
};
</script>

<style scoped>
</style>