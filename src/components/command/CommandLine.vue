<template>
  <div class="cli-wrapper">
    <div v-if="type == 'input'">
      <div v-if="textValue">
        <div v-if="text == 'typehelp'">
          <span>
            $> type
            <a
              href="javascript:void(0);"
              class="highlight"
              @click="onOptionSelected('help')"
            >&quot;help&quot;</a> to show available commands
          </span>
        </div>
        <div v-if="text == 'typebored'">
          <span>
            $> type
            <a
              href="javascript:void(0);"
              class="highlight"
              @click="onOptionSelected('bored')"
            >&quot;bored&quot;</a> to display interface
          </span>
        </div>
        <div v-if="text !== 'typebored' && text !== 'typehelp'">
          <span>$> {{textValue}}</span>
        </div>
      </div>
      <div v-else>
        $>
        <span
          heref="activeCursor"
          class="terminal-input blinkcursor"
          type="text"
          v-text="inputVal"
          contenteditable
          @keyup="onEnter"
          @keydown.enter.prevent
        ></span>
      </div>
    </div>
    <div v-if="type == 'output'" class="output">
      <div v-if="text == 'help'" class="label-info">
        <div>
          <fa-icon icon="quidditch" />dobby has come to answer your call for help
        </div>
        <div>
          <fa-icon icon="magic" />casting spell (displayamus commandus)
        </div>
        <table>
          <tr
            class="help-item"
            v-for="command in commands"
            :key="command.code"
            @click="onOptionSelected(command.code)"
          >
            <td class="code">{{ command.code }}</td>
            <td class="description">( {{ command.description }} )</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommandLine",
  data() {
    return {
      inputVal: "",
      hasPressedEnter: false,
      commands: [
        {
          code: "explain dev-info",
          description: "displays information about me",
        },
        {
          code: "explain services",
          description: "enumerates services I am offering",
        },
        {
          code: "explain site",
          description: "displays the information about this site",
        },
        {
          code: "warpto ui",
          description: "redirect to the main application page",
        },
        {
          code: "warpto about",
          description: "redirect to the about page",
        },
        {
          code: "warpto services",
          description: "redirect to the services page",
        },
        {
          code: "ask migs",
          description: "ask me a question",
        },
        {
          code: "create review",
          description: "write me a review",
        },
        {
          code: "create post",
          description: "post something here",
        },
        {
          code: "postboard",
          description: "redirects to posts board page",
        },
        {
          code: "clear",
          description: "clears the terminal interface",
        },
      ],
    };
  },
  props: ["text", "type", "htmlLine"],
  mounted() {
    console.log(this.inputVal, this.text);
    if (this.type == "input" && this.text === "") {
      this.$refs.activeCursor.focus();
    }
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.inputVal, this.text, this.hasPressedEnter);
  },
  updated() {
    console.log("beforeUpdate", this.inputVal, this.text, this.hasPressedEnter);
  },
  methods: {
    onEnter(event) {
      console.log(event.key, event.key == "Enter");

      if (event.key == "Enter") {
        var src = event.target.innerText;
        this.inputVal = src;
        this.hasPressedEnter = true;
        this.$emit("pressedEnterKey", event.target.innerText);
      }
    },
    onOptionSelected(code) {
      console.log("onOptionSelected", code);
      this.$emit("pressedEnterKey", code);
    },
  },
  computed: {
    textValue: function () {
      var val = this.hasPressedEnter ? this.inputVal : this.text;
      return val;
    },
  },
};
</script>

<style scoped>
.cli-wrapper {
  padding: 0 11px 0px 113px;
}

.terminal-input {
  border: 0;
  outline: none;
  background: transparent;
  color: transparent;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  color: white;
  padding-left: 6px;
}

.blinkcursor {
  animation: blinkcursor 0.5s step-end infinite alternate;
}

@keyframes blinkcursor {
  50% {
    border-right: 4px solid white;
  }
}

.highlight {
  color: #ff9a76;
  text-decoration-line: unset;
}

.help-item {
  cursor: pointer;
}
.help-item:hover .code {
  color: #ff9a76;
}

.help-item .description {
  display: none;
}

.help-item:hover .description {
  display: inline;
}

.output {
  padding: 5px 5px 5px 1rem;
}
</style>